import React from "react";
import WebUIWindow, { IWindowProps } from "../webui-window"; 

//WebUI props
import { ICalendarControlProps, IFilterControlProps, IMetricCardProps, IMixedChartProps, IPieChartProps, ITableProps, WebUICalendarControl, WebUIFilterControl, WebUIMetricCard, WebUIMixedChart, WebUIPieChart, WebUITable } from 'webui-react-components';

//Helper
import { getcomponentPropNames } from "../../helpers/common";

//3rd party libraries
import cloneDeep from 'lodash.clonedeep';
import { decode } from "html-entities";
import ContentEditable from "react-contenteditable";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import { Button, Drawer } from "antd";
import { WindowType } from "../../helpers/dashboard-generator";

interface IWindowWrapperState {

    windowType: WindowType,
    
    left: string;
    top: string;
    width: number | string;
    height: number | string;
    componentPropValues: ITableProps | IMixedChartProps | IPieChartProps | IMetricCardProps | ICalendarControlProps | IFilterControlProps;
    dataQueries: string;
    ddQueries: string;
    vaQueries: string;

    settingsVisibility: boolean;
}

export default class WebUIWindowWrapper extends React.Component<IWindowProps, IWindowWrapperState> {

    leftPosEditable: React.RefObject<HTMLElement>;
    topPosEditable: React.RefObject<HTMLElement>;
    widthEditable: React.RefObject<HTMLElement>;
    heightEditable: React.RefObject<HTMLElement>;
    
    propEditable: Map<string,React.RefObject<HTMLElement>> = new Map();
  
    dataQueryEditable: React.RefObject<HTMLElement>;
    ddQueryEditable: React.RefObject<HTMLElement>;
    vaQueryEditable: React.RefObject<HTMLElement>;
    componentPropNames: string[];

    settingComponentPropValues: ITableProps | IMixedChartProps | IPieChartProps | IMetricCardProps | ICalendarControlProps | IFilterControlProps;

    constructor(props: IWindowProps) {
        super(props);

        //Setup editable props
        this.setupComponentPropNames();

        //Setup editable queries
        this.dataQueryEditable = React.createRef();
        this.ddQueryEditable = React.createRef();
        this.vaQueryEditable = React.createRef();

        this.leftPosEditable = React.createRef();
        this.topPosEditable = React.createRef();
        this.widthEditable = React.createRef();
        this.heightEditable = React.createRef();

        //prop values that have not yet been saved
        this.settingComponentPropValues = cloneDeep(this.props.componentPropValues);

        this.state = {
            windowType: this.props.windowType,
            width: this.props.width,
            height: this.props.height,
            left: this.props.left,
            top: this.props.top,
            settingsVisibility: false,
            componentPropValues: cloneDeep(this.props.componentPropValues),
            dataQueries: this.props.dataQueries ? this.props.dataQueries : "",
            ddQueries: this.props.ddQueries ? this.props.dataQueries : "",
            vaQueries: this.props.vaQueries ? this.props.vaQueries : ""
        };
    }

    setupComponentPropNames() {
        //Setup editable props
        this.componentPropNames = getcomponentPropNames(this.props.windowType);
        for(let propertyName of this.componentPropNames) {
          this.propEditable.set(propertyName, React.createRef());
        }
    }

    handlePropChange(evt, property) {
        let values = {...this.settingComponentPropValues};
        values[property] = decode(evt.target.value);
        this.settingComponentPropValues = values;
    };

    handleDataQueriesChange(evt) {
        this.setState({
            dataQueries: evt.target.value
        })
    }

    handleDDQueriesChange(evt) {
    let queries = decode(evt.target.value);
        this.setState({
            ddQueries: queries
        })
    }

    handleVAQueriesChange(evt) {
    let queries = decode(evt.target.value);
        this.setState({
            vaQueries: queries
        })
    }

    handleLeftPosChange(evt) {
        this.setState({
            left: evt.target.value
        })
    }

    handleTopPosChange(evt) {
        this.setState({
            top: evt.target.value
        })
    }

    handleWidthChange(evt) {
        this.setState({
            width: evt.target.value
        })
    }

    handleHeightChange(evt) {
        this.setState({
            height: evt.target.value
        })
    }

    saveConfiguration = () => {
        this.setState({
            componentPropValues: cloneDeep(this.settingComponentPropValues)
        })
    }

    handleMoveOrResize = (left: string, top: string, width: string, height: string) => {
        this.setState({
            left: left,
            top: top,
            width: width,
            height: height
        });
    }

    renderSettings = () => {
        //Calculate height and width
        return (
          <div className="settings-popup-grid">
            <div className="settings-popup-title">
              Style
            </div>
            <div className="settings-popup-option">
              <div className="settings-popup-name">left</div>
              <ContentEditable
                innerRef={this.leftPosEditable}
                html={this.state.left} // innerHTML of the editable div
                disabled={false} // use true to disable editing
                onChange={(evt) => { this.handleLeftPosChange(evt)}} // handle innerHTML change
                tagName='article' // Use a custom HTML tag (uses a div by default)
              />
            </div>
            <div className="settings-popup-option">
              <div className="settings-popup-name">top</div>
              <ContentEditable
                innerRef={this.topPosEditable}
                html={this.state.top} // innerHTML of the editable div
                disabled={false} // use true to disable editing
                onChange={(evt) => { this.handleTopPosChange(evt)}} // handle innerHTML change
                tagName='article' // Use a custom HTML tag (uses a div by default)
              />
            </div>
            <div className="settings-popup-option">
              <div className="settings-popup-name">width</div>
              <ContentEditable
                innerRef={this.widthEditable}
                html={this.state.width as string} // innerHTML of the editable div
                disabled={false} // use true to disable editing
                onChange={(evt) => { this.handleWidthChange(evt)}} // handle innerHTML change
                tagName='article' // Use a custom HTML tag (uses a div by default)
              />
            </div>
            <div className="settings-popup-option">
              <div className="settings-popup-name">height</div>
              <ContentEditable
                innerRef={this.heightEditable}
                html={this.state.height as string} // innerHTML of the editable div
                disabled={false} // use true to disable editing
                onChange={(evt) => { this.handleHeightChange(evt)}} // handle innerHTML change
                tagName='article' // Use a custom HTML tag (uses a div by default)
              />
            </div>
            <div className="settings-popup-title">
              Props
            </div>
            {
              this.componentPropNames.map((name, i) => {
    
                let propValue: string;
                if(this.settingComponentPropValues[name]) {
                  if(typeof this.settingComponentPropValues[name] === "string" || typeof this.settingComponentPropValues[name] === "number") {
                    propValue = this.settingComponentPropValues[name];
                  } else if (typeof this.settingComponentPropValues[name] === "function") {
                    propValue = this.settingComponentPropValues[name].toString();
                  } else {
                    propValue = JSON.stringify(this.settingComponentPropValues[name]);
                  }
                }
    
                return (
                  <div key={Math.random()} className="settings-popup-option">
                    <div className="settings-popup-name">
                      {name}              
                    </div>
                    <ContentEditable
                      innerRef={this.propEditable.get(name)}
                      html={propValue ? propValue : ""} // innerHTML of the editable div
                      disabled={false}       // use true to disable editing
                      onChange={(evt) => { this.handlePropChange(evt, name)}} // handle innerHTML change
                      tagName='article' // Use a custom HTML tag (uses a div by default)
                    />
                  </div>
                )
              })
            }
            <div className="settings-popup-name">
                <Button onClick={this.saveConfiguration}>Save Configuration</Button>
            </div>
            <div className="settings-popup-title">
              Data Queries
            </div>
            <Editor
              value={this.state.dataQueries}
              onValueChange={dataQueries => this.setState({ dataQueries })}
              highlight={code => highlight(code, languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                height: "200px",
                border: "1px solid #F0F0F0"
              }}
            />
            <div className="settings-popup-title">
              Drilldown Queries
            </div>
            <Editor
              value={this.state.ddQueries}
              onValueChange={ddQueries => this.setState({ ddQueries })}
              highlight={code => highlight(code, languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                height: "200px",
                border: "1px solid #F0F0F0"
              }}
            />
            <div className="settings-popup-title">
              Visual Alarm Queries
            </div>
            <Editor
              value={this.state.vaQueries}
              onValueChange={vaQueries => this.setState({ vaQueries })}
              highlight={code => highlight(code, languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                height: "200px",
                border: "1px solid #F0F0F0"
              }}
            />
          </div>
        );
      }

    openSettings = () => {
        this.setState({
            settingsVisibility: true
        })  
    }

    closeSettings = () => {
        this.setState({
            settingsVisibility: false
        })
    };

    render() {
        return (
            <div>
                <Drawer
                    width={"auto"}
                    title="Settings"
                    placement="right"
                    closable={false}
                    onClose={this.closeSettings}
                    visible={this.state.settingsVisibility}
                >
                    {this.renderSettings()}
                </Drawer>
                <WebUIWindow
                    {...this.state}
                    openSettingsCallback={this.openSettings}
                    onMoveOrResize={this.handleMoveOrResize}
                />
            </div>
        )
    }
}