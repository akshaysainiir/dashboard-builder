import React from "react";
import { Rnd } from "react-rnd";
import { WindowType } from "../../helpers/dashboard-generator";

//WebUI props
import { ICalendarControlProps, IFilterControlProps, IMetricCardProps, IMixedChartProps, IPieChartProps, ITableProps, WebUICalendarControl, WebUIFilterControl, WebUIMetricCard, WebUIMixedChart, WebUIPieChart, WebUITable } from 'webui-react-components';
import { Button } from "antd";
import SettingOutlined from '@ant-design/icons/SettingOutlined';

export interface IWindowProps {
  windowType?: WindowType
  left?: string;
  top?: string;
  width?: number | string;
  height?: number | string;
  componentPropValues?: ITableProps | IMixedChartProps | IPieChartProps | IMetricCardProps | ICalendarControlProps | IFilterControlProps;
  dataQueries?: string;
  ddQueries?: string;
  vaQueries?: string;
  guid?: string;
  reactDivId?: string;
  id?: string;
  openSettingsCallback?: () => void;
  onMoveOrResize?: (left: string, top: string, width: string, height: string) => void;
}

export interface IWindowState {
}

export default class WebUIWindow extends React.Component<IWindowProps, IWindowState> {

  root: HTMLElement;

  constructor(props: IWindowProps) {
    super(props);

    this.state = {
    };
  }

  renderWebUIComponent() {
    if(this.props.windowType === WindowType.Table) {
      return <WebUITable {...this.props.componentPropValues as ITableProps}/>;
    } else if(this.props.windowType === WindowType.MixedChart) {
      return <WebUIMixedChart {...this.props.componentPropValues as IMixedChartProps}/>;
    } else if(this.props.windowType === WindowType.PieChart) {
      return <WebUIPieChart {...this.props.componentPropValues as IPieChartProps}/>;
    } else if(this.props.windowType === WindowType.MetricCard) {
      return <WebUIMetricCard {...this.props.componentPropValues as IMetricCardProps}/>;
    } else if(this.props.windowType === WindowType.CalendarControl) {
      return <WebUICalendarControl {...this.props.componentPropValues as ICalendarControlProps}/>;
    } else if(this.props.windowType === WindowType.FilterControl) {
      return <WebUIFilterControl {...this.props.componentPropValues as IFilterControlProps}/>;
    }
  }

  render() {
    let style = {
      display: "flex",
      background: "#f0f0f0",
      overflow: "hidden",
    };

    this.root = document.getElementById("root");
    let x: number;
    let y: number;
    if(this.props.left.includes('%')) {
      x = Math.round(parseFloat(this.props.left) / 100 * this.root.clientWidth);
    } else {
      x = parseInt(this.props.left);
    }

    if(this.props.top.includes('%')) {
      y = Math.round(parseFloat(this.props.top) / 100 * this.root.clientHeight);
    } else {
      y = parseInt(this.props.top);
    }
    return (
      <>
        <Rnd
          style={style}
          bounds={"window"}
          dragGrid={[this.root.clientWidth / 100, this.root.clientHeight / 100]}
          resizeGrid={[this.root.clientWidth / 100, this.root.clientHeight / 100]}
          size={{
            width: this.props.width,
            height: this.props.height,
          }}
          position={{
            x: x,
            y: y,
          }}
          onDragStop={(e, d) => {
            let x = `${Math.round(d.x/this.root.clientWidth * 100)}%`;
            let y = `${Math.round(d.y/this.root.clientHeight * 100)}%`;
            this.props.onMoveOrResize(x,y,this.props.width as string,this.props.height as string);
          }}
          onResize={(e, direction, ref, delta, position) => {
            let x = `${Math.round(position.x/this.root.clientWidth * 100)}%`;
            let y = `${Math.round(position.y/this.root.clientHeight * 100)}%`;
            this.props.onMoveOrResize(x,y,ref.style.width,ref.style.height);
          }}
        >
          <div className="window-container">
            {this.renderWebUIComponent()}
            <Button onClick={this.props.openSettingsCallback} shape="circle" className="settings-popup-btn">
                <SettingOutlined />
            </Button>
          </div>
        </Rnd>
      </>
    );
  }
}