import { DashboardExporter } from "./dashboard-export";

export interface IDashboardConfiguration {
    windows: IDashboardWindow[]
}

export interface IDashboardWindow {
    top: string;
    left: string;
    width: string;
    height: string;

    name: string;
    type: WindowType;

    propNames: string[];
    props: any;

    dataQueries: string;
    ddQueries?: string;
    vaQueries?: string;
}

export enum WindowType {
    Table,
    MixedChart,
    PieChart,
    MetricCard,
    CalendarControl,
    FilterControl
}

const common_styling = 
`
.dashboard {
    height: calc(100% - 34px);
    width: calc(100% - 1.5em);
    position: absolute;
    top: 34px;
    bottom: 0px;
    left: 0px;
    background: var(--dashboard-background);
 }
 .window {
    background: var(--window-background);
 }
 query, drilldown, visualalarm, series {
    display: none;
 }
 #id_Title {
    position: absolute;
    left: 0% !important;
    top: 0% !important;
    height: 34px !important;
    width: 100% !important;
    background: var(--dashboard-background);
    border-left: 1em var(--dashboard-background) solid !important;
 }
`

export class DashboardGenerator {

    private dashboardExporter: DashboardExporter;

    constructor() {
        this.dashboardExporter = new DashboardExporter();
    }

    public export(configuration: IDashboardConfiguration) {
        let style = `
<style>
    ${common_styling}
    ${this.generateStyling(configuration)}
</style>
        `

        let body = `
<body>
<div class="window Title_css" name="Title" id="id_Title">
   <script type="text/javascript">
      $(function() {
         WebUIComponents.renderTitle("webui-title-Title", "TEMPLATE TITLE - @customer", "customer");
      });
   </script>
   <div id="webui-title-Title"></div>
</div>
<div class="dashboard">
    ${this.generateHtml(configuration)}
</div>
</body>
`
        let html = 
`
<!DOCTYPE html>
<html lang="en">
<head></head>
${style}
${body}
</html>
`
        const data = new Blob([html], { type: 'text/plain' })
        this.dashboardExporter.export(data);
    }

    public generateRenderCommand(window: IDashboardWindow) {
        if(window.type === WindowType.Table) {
            return `WebUIComponents.renderTable('${window.name}-container', configuration);`;
        } else if(window.type === WindowType.MixedChart) {
            return `WebUIComponents.renderMixedChart('${window.name}-container', configuration);`;
        } else if(window.type === WindowType.PieChart) {
            return `WebUIComponents.renderPieChart('${window.name}-container', configuration);`;
        } else if(window.type === WindowType.MetricCard) {
            return `WebUIComponents.renderMetricCard('${window.name}-container', configuration);`;
        } else if(window.type === WindowType.CalendarControl) {
            return `WebUIComponents.renderCalendarControl('${window.name}-container', configuration);`;
        } else if(window.type === WindowType.FilterControl) {
            return `WebUIComponents.renderFilterControl('${window.name}-container', configuration);`;
        }
    }

    public generateHtml(configuration: IDashboardConfiguration) {
        let content = "";
        for(let window of configuration.windows) {

            let props = "";
            for(let propName of window.propNames) {
                if(window.props[propName]) {
                    if(typeof window.props[propName] === "string") {
                        props += `                    ${propName}: "${window.props[propName]}",\n`
                    } else {
                        props += `                    ${propName}: ${window.props[propName]},\n`
                    }
                }
            }

            content +=
`
    <div class="window" name="${window.name}" id="id_${window.name}">
        <script>
            $(function() {
                var configuration = {
${props}
                }
                ${this.generateRenderCommand(window)}
            });
        </script>
        <div id='${window.name}-container'></div>
        <series>
            ${window.dataQueries}
        </series>
        ${window.ddQueries ? `
        <drilldown>
            ${window.ddQueries}
        </drilldown>`: ''}
        ${window.vaQueries ? `
        <visualalarm>
            ${window.vaQueries}
        </visualalarm>`: ''}
    </div>
`
        }

        return content;
    }

    public generateStyling(configuration: IDashboardConfiguration) {
        let windowStyling = "";
        for(let window of configuration.windows) {
            windowStyling += 
`
#id_${window.name} {
    position: absolute;
    left: ${window.left} !important;
    top: ${window.top} !important;
    height: ${window.height} !important;
    width: ${window.width} !important;
    border-left: 1em var(--dashboard-background) solid !important;
    border-top: 0.5em var(--dashboard-background) solid !important;
    border-bottom: 0.5em var(--dashboard-background) solid !important;    
}
`
        }
        return windowStyling;
    }
}