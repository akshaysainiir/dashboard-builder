import { propertiesOf } from 'ts-reflection';
import { ICalendarControlProps, IFilterControlProps, IMetricCardProps, IMixedChartProps, IPieChartProps, ITableProps } from 'webui-react-components';
import { WindowType } from './dashboard-generator';

export function getcomponentPropNames(windowType: WindowType) {
    //Setup editable props
    let componentPropNames = [];

    if(windowType === WindowType.Table) {
      componentPropNames = propertiesOf<ITableProps>();
    } else if(windowType === WindowType.MixedChart) {
      componentPropNames = propertiesOf<IMixedChartProps>();
    } else if(windowType === WindowType.PieChart) {
      componentPropNames = propertiesOf<IPieChartProps>();
    } else if(windowType === WindowType.MetricCard) {
      componentPropNames = propertiesOf<IMetricCardProps>();
    } else if(windowType === WindowType.CalendarControl) {
      componentPropNames = propertiesOf<ICalendarControlProps>();
    } else if(windowType === WindowType.FilterControl) {
      componentPropNames = propertiesOf<IFilterControlProps>();
    }

    return componentPropNames;
  }