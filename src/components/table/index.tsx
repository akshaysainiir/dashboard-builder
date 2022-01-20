import React from 'react';

//antd react components
import Table from 'antd/lib/table';
import { SizeType } from 'antd/lib/config-provider/SizeContext';


export interface IMockTableProps {
    size: SizeType,
    title?: string,
    value?: number
}

export interface IMockTableState {

}

const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

export class MockTable extends React.Component<IMockTableProps, IMockTableState> {

    constructor(props: IMockTableProps) {
        super(props);
        this.state = {};
    }

    render() {
        return(
        <div style={{display: "grid", gridTemplateRows:"1fr auto"}}>
            {this.props.title && <h4 style={{paddingLeft: "5px"}}>{this.props.title}</h4>}
            <Table
                size={this.props.size}
                dataSource={dataSource}
                columns={columns} 
                pagination={false}
            />
        </div>);
    }
}