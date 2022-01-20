import { ICalendarControlProps, IFilterControlProps, IMetricCardProps, IMixedChartProps, IPieChartProps, ITableProps } from "webui-react-components";

declare var WebUIPropsReader;

export class PropsReader {
    constructor(callback: (divId: string, props: any) => void) {
        this.setupMockFunctions();
        this.propsLoadCallback = callback;
    }

    private propsLoadCallback;

    setupMockFunctions() {
        WebUIPropsReader = {};
        WebUIPropsReader.renderTable = (id: string, props: ITableProps) => {
            this.propsLoadCallback(id, props);
        }
        WebUIPropsReader.renderPieChart = (id: string, props: IPieChartProps) => {
            this.propsLoadCallback(id, props);
        }
        WebUIPropsReader.renderMixedChart = (id: string, props: IMixedChartProps) => {
            this.propsLoadCallback(id, props);
        }
        WebUIPropsReader.renderMetricCard = (id: string, props: IMetricCardProps) => {
            this.propsLoadCallback(id, props);
        }
        WebUIPropsReader.renderFilterControl = (id: string, props: IFilterControlProps) => {
            this.propsLoadCallback(id, props);
        }
        WebUIPropsReader.renderCalendarControl = (id: string, props: ICalendarControlProps) => {
            this.propsLoadCallback(id, props);
        }
    }

}