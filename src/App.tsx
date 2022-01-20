import React from 'react';
import './App.css';
import WebUIWindow, { IWindowProps } from './components/webui-window';
import WebUIWindowWrapper from './components/webui-window-wrapper';
import { initialisePrognosisVariable } from './helpers/mock-data';
import { DashboardGenerator, IDashboardConfiguration, IDashboardWindow, WindowType } from "./helpers/dashboard-generator";
import { DashboardLoader } from './helpers/dashboard-loader';
import { ICalendarControlProps, IFilterControlProps, IMetricCardProps, IMixedChartProps, IPieChartProps, ITableProps } from 'webui-react-components';
import moment from 'moment';
import { propertiesOf } from 'ts-reflection';
import { Button, Form, Input, Modal, Popover } from "antd";
import DownloadOutlined from '@ant-design/icons/DownloadOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import { mockDashboard } from './mock-data/mock-dashboard';
import fetchMock from 'fetch-mock';
import { stringify } from 'querystring';

const { Search } = Input;

let dashboardGenerator = new DashboardGenerator();

interface IAppProps {

}

interface IAppState {
  windows: IWindowProps[],
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    initialisePrognosisVariable();

    this.state = {
      windows: [],
    }
  }

  componentDidMount() {
    this.setupMockDashboardRequest(); //DEBUG ONLY FOR TEST: Remove this line for production purposes.
    let dashboardLoader = new DashboardLoader("cisco", this.setWindows);

    var urlParams = new URLSearchParams(window.location.search);
    if(urlParams.has("dashboardName")) {
      let dashboardLoader = new DashboardLoader(urlParams.get("dashboardName"), this.setWindows);
    }
  }

  //Use to emulate getting a dashboard from webui, only used for local testing
  
  setupMockDashboardRequest() {
    fetchMock.config.overwriteRoutes = true;
    fetchMock.get(`https://127.0.0.1/Prognosis/Dashboard/Content/cisco`, () => { 
      return mockDashboard 
    });
  }
  

  setWindows = (window: IWindowProps) => {
    let windows = [...this.state.windows];
    windows.push(window);

    this.setState({
      windows: windows
    })
  }

  onFinish = (values: any) => {
    this.setState({
      windows: []
    });
    console.log(values);
    window.location.href = `?dashboardName=${values.dashboardname}&${values.urlparams.startsWith("?") ? values.urlParams.slice(1) : `${values.urlparams}`}`;
  };

  dashboardInputPopover = 
    <Form
      style = {{width: "500px"}}
      labelCol = {{ span: 8 }}
      wrapperCol = {{ span: 16 }}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={this.onFinish}
    >
      <Form.Item
        label="Dashboard Name"
        name="dashboardname"
        rules={[{ required: true, message: 'Please enter the dashboard name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="URL Parameters"
        name="urlparams"
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Go
        </Button>
      </Form.Item>
    </Form>

  renderMockWindows() {
    return (
      <>
        <WebUIWindowWrapper 
          windowType={WindowType.MetricCard}
          left={"83.33%"}
          top={"6%"}
          height={"14%"}
          width={"16.67%"}
          componentPropValues={{
            windowName: "System_Degraded_Sessions_CiscoWebex_MeetingsOverviewHistorical",
            title:"Degraded Sessions"
          }}
          dataQueries={`
          <query>SELECT
    CASE
      WHEN COUNT(*) > 0 THEN ROUND(100*SUM(IsDegradedSession)/COUNT(*),2)
      ELSE ''
    END AS CiscoWebexMeetingHistorical_DegradedSessionsCount
  FROM CiscoWebexHistoricalMeetingsOverview_DegradedSessionsView
          </query>
          `}
        />
        <WebUIWindowWrapper
          windowType={WindowType.CalendarControl}
          left={"50%"}
          top={"0%"}
          height={"6%"}
          width={"50%"}
          componentPropValues={{
            mode: 'live',
            duration: moment.duration(1,'hour'),
            step: {
              minutes: 5
            },
            utc: true,
            persistId: 'ciscowebex'
          }}
        />
      </>
    )
  }

  render() {
    return (
      <div>
      {
        this.state.windows.map((window, i) => {
          return (
            <WebUIWindowWrapper
              key={Math.random()}
              {...window}
            />
          )
        })
      }

      <div style={{position: "absolute", bottom: "0px", right: "0px", margin: "20px"}}>
        <Popover placement="topRight" content={this.dashboardInputPopover} title="Search Dashboard" trigger="click">
          <Button style={{margin: "5px"}}>
            <SettingOutlined />
          </Button> 
        </Popover>
        <Button style={{margin: "5px"}} onClick={exportDashboard}>
          <DownloadOutlined />
        </Button>
      </div>
    </div>
    )
  }
}

function exportDashboard() {
  let configuration: IDashboardConfiguration = {
    windows: []
  };

  let componentPropNames = propertiesOf<IMetricCardProps>();
  let props: IMetricCardProps = {
    windowName: "System_Degraded_Sessions_CiscoWebex_MeetingsOverviewHistorical",
    title: "Degraded Sessions",
    tooltip: "Percentage of sessions across all meetings where the mean opinion score is Poor or Fair.",
    calendarControlled: true,
    showStatusBar: false,
    precision: 2,
    suffix: "%"
  }

  let window: IDashboardWindow = {
    top: "6%",
    left: "83.33%",
    height: "14%",
    width: "16.67%",
    name: "System_Degraded_Sessions_CiscoWebex_MeetingsOverviewHistorical",
    type: WindowType.MetricCard,
    propNames: componentPropNames,
    props: props,
    dataQueries: `<query>SELECT
    CASE
      WHEN COUNT(*) > 0 THEN ROUND(100*SUM(IsDegradedSession)/COUNT(*),2)
      ELSE ''
    END AS CiscoWebexMeetingHistorical_DegradedSessionsCount
  FROM CiscoWebexHistoricalMeetingsOverview_DegradedSessionsView
           </query>`,
    ddQueries: `<query>SELECT
    CASE 
      WHEN COUNT(*) > 0 THEN 'CiscoWebex-MeetingsQualitySessionListHistorical?DefaultNode=' + URIENCODE(COALESCE(@DefaultNode, '')) + '&Customer=' + URIENCODE(COALESCE(LAST(Customer), '')) + '&Title=' + URIENCODE(COALESCE(LAST(Customer), ''))
      ELSE ''
    END AS CiscoWebexMeetingHistorical_DegradedSessionsCount
  FROM CiscoWebexHistoricalMeetingsOverview_DegradedSessionsView
           </query>`
  };

  configuration.windows.push(window);

  dashboardGenerator.export(configuration);
}