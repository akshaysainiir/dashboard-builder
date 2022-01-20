import { IWindowProps } from "../components/webui-window";
import { getcomponentPropNames } from "./common";
import { WindowType } from "./dashboard-generator";
import { PropsReader } from './props-reader';

declare var Prognosis: any;

export class DashboardLoader {
    private componentMap: Map<string, IWindowProps>;

    private propsReader: PropsReader;
    private onCompleteCallback: (windows: IWindowProps) => void;

    constructor(dashboardName: string, onCompleteCallback: (windows: IWindowProps) => void) {
        this.onCompleteCallback = onCompleteCallback;
        this.componentMap = new Map();

        //Setup props reader
        this.propsReader = new PropsReader(this.LoadProps);

        this.fetchDashboardPage(dashboardName);
    }

    private fetchDashboardPage(dashboardName: string) {
        fetch(`https://127.0.0.1/Prognosis/Dashboard/Content/${dashboardName}`, {mode: 'no-cors'})
        .then(response => response.body)
        .then(rb => {
          const reader = rb.getReader();
        
          return new ReadableStream({
            start(controller) {
              // The following function handles each data chunk
              function push() {
                // "done" is a Boolean and value a "Uint8Array"
                reader.read().then( ({done, value}) => {
                  // If there is no more data to read
                  if (done) {
                    controller.close();
                    return;
                  }
                  // Get the data and send it to the browser via the controller
                  controller.enqueue(value);
                  push();
                })
              }
        
              push();
            }
          });
        })
        .then(stream => {
          // Respond with our stream
          return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
        })
        .then(result => {
          // Do things with result
          this.Load(result);
        });
    }

    public LoadProps = (divId: string, props: any) => {
        for(let [key,value] of this.componentMap) {
            if(value.reactDivId === divId) {
                value.componentPropValues = props;
                this.onCompleteCallback(value);
                return;
            }
        }
    }

    public Load(html: string) {
        let guidRegex = /Prognosis.DashboardHtmlWindow\(\);[\s\S]*?guid:[\s\S]*?"(.*?)\\?"[\s\S]*?name:[\s\S]*?"(.*?)\\?"/g;
        let matches = [...html.matchAll(guidRegex)];

        //Populate guid map
        for(let match of matches) {
            if(match.length === 3) { //Must have 3 matches, otherwise consider it invalid
                this.componentMap.set(match[2],{
                    guid: match[1]
                });
            }
        }

        //Extract component configuration
        let htmlRgx = new RegExp(`<div.*?name=['"](.*)['"].*?id=['"](.*?)['"].*?>[\\s\\S]*?WebUIComponents[\\s\\S]*?<\/div>`, 'g');
        let htmlMatches = [...html.matchAll(htmlRgx)];
        for(let htmlMatch of htmlMatches) {
            if(htmlMatch?.length === 3) {
                if(this.componentMap.has(htmlMatch[1])) {
                    this.componentMap.get(htmlMatch[1]).id = htmlMatch[2];
                } else {
                    this.componentMap.set(htmlMatch[1], {
                        id: htmlMatch[2]
                    });
                }
            }
        }

        let dashboardScript = "";

        //Extract css properties
        let properties = ["left", "top", "width", "height"];
        for(let [windowName, component] of this.componentMap) {

            //Setup guid in global Prognosis variable
            Prognosis.globals.windows[windowName] = {
                getConfig: () => {
                    return { guid: component.guid }
                }
            }

            let css: string;
            let cssPropertiesRgx = new RegExp(`#${this.componentMap.get(windowName).id}\\s*{[\\s\\S]*?}`);
            let cssMatch = html.match(cssPropertiesRgx);
            if(cssMatch?.length > 0) {
                css = cssMatch[0];
            } else {
                //TODO: display error
                console.log("Could not obtain css for " + windowName);
                continue;
            }

            for(let property of properties) {
                var cssPropertyRgx = new RegExp(`{[\\s\\S]*?${property}\\s*:\\s*(.*?)\\s*[!important]*\\s*?;[\\s\\S]*?}`);
                let cssPropMatch = css.match(cssPropertyRgx);
                if(cssPropMatch?.length === 2) {
                    this.componentMap.get(windowName)[property] = cssPropMatch[1]
                } else {
                    //TODO: display error
                    console.log(`Could not obtain css property (${property}) for ${windowName}`);
                    continue;
                }
            }

            //Extract component configuration
            let componentHtml: string;
            let htmlRgx = new RegExp(`<div.*?name=['"]${windowName}['"].*?>[\\s\\S]*?<\/div>`);
            let htmlMatch = html.match(htmlRgx);
            if(htmlMatch?.length === 1) {
                componentHtml = htmlMatch[0];
            } else {
                //TODO: display error
                console.log(`Could not obtain html or id for ${windowName}`);
                continue;
            }

            let propNames = [];
            let renderMatch = componentHtml.match(/WebUIComponents.render(.*)\(['"](.*?)['"]/);
            if(renderMatch.length === 3) {
                let type = this.getWindowType(renderMatch[1]);
                propNames = getcomponentPropNames(type);
                this.componentMap.get(windowName).windowType = type;
                this.componentMap.get(windowName).reactDivId = renderMatch[2];
            } else {
                //TODO: display error
                console.log(`Could not obtain window type and config parameter for ${windowName}`);
                continue;
            }
        }

        //Extract scripts
        let scriptsMatch = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
        for(let scriptMatch of scriptsMatch) {
            if(scriptMatch[1]) {
                let script = scriptMatch[1] as string;
                dashboardScript += script.replace("WebUIComponents","WebUIPropsReader")
            }
        }

        //Ensure the last thing that is performed is adding the scripts.
        //This way when the callback to LoadProps is called, the components are ready to be rendered
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.innerText = dashboardScript;
        document.body.append(s);
    }

    private getWindowType(type: string): WindowType {
        if(type === "PieChart") {
            return WindowType.PieChart;
        } else if(type === "MixedChart") {
            return WindowType.MixedChart;
        } else if(type === "Table") {
            return WindowType.Table;
        } else if(type === "MetricCard") {
            return WindowType.MetricCard;
        } else if(type === "CalendarControl") {
            return WindowType.CalendarControl;
        } else if(type === "FilterControl") {
            return WindowType.FilterControl
        }
    }
}