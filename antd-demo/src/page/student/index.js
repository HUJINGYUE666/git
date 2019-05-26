import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios';
  
export default class student extends Component {
    constructor(params){
        super(params);
        this.state = {
            dataSource:[]
        }
    }
    componentWillMount() {
        axios.get('https://easy-mock.com/mock/5ce94187843fd568acd104c2/example/student')
        .then((result)=>{
            this.setState({
                dataSource:result.data.data.projects
            })
        })
    }
    render() {
        const columns = [
            {
              title: '姓名',
              dataIndex: 'name',
              key:'name'
            },
            {
              title: '邮箱',
              dataIndex: 'email',
              key:'email'
            },
            {
              title: '住址',
              dataIndex: 'address',
              key:'address'
            },
            {
              title: '学号',
              dataIndex: 'id',
              key:'id'  
            },
            {
              title: '学校',
              dataIndex: 'school',
              key:'school'  
            }
          ];
        return (
            <div>
                <Table columns={columns} dataSource={this.state.dataSource} />,
            </div>
        )
    }
}
