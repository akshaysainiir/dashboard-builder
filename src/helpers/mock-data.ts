//import fetchMock from 'fetch-mock';
import { WindowType } from './dashboard-generator';

declare var Prognosis: any;

export function initialisePrognosisVariable() {
    Prognosis.globals = {};
    Prognosis.globals.appUrl = "/Prognosis/"
    Prognosis.globals.windows = [];

    //fetchMock.config.overwriteRoutes = true;
}

export function setupMockData(windowName: string, windowType: WindowType) {
    Prognosis.globals.windows[windowName] = {
      getConfig: () => {
        return { guid: windowName }
      }
    };
    
    let mockData;
    if(windowType === WindowType.MetricCard) {
        mockData = metricCardMockData(windowName);
    } else if(windowType === WindowType.Table) {

    } else if(windowType === WindowType.PieChart) {

    } else if(windowType === WindowType.MixedChart) {

    }

    var endpoint = new RegExp(`/Prognosis/DashboardView/${windowName}.*`, "g");
   // fetchMock.get(endpoint, () => { return mockData }, { delay: 1000 });
    
}

function metricCardMockData(windowName: string) {
    let mockData = {};
    mockData[windowName] = {
        "Data": [
            [
              [
                "Dummy field"
              ],
              [
                "Numeric"
              ],
              [
                Math.random()*50
              ],
            ]
          ]
    }
    return mockData;
}