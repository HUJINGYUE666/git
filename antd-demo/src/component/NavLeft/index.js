import React, { Component } from 'react'
import { Menu ,Icon} from 'antd';
import menuList from './../../config/menuconfig'
import './index.css';
import '../../router'
import {Link} from 'react-router-dom'

const { SubMenu } = Menu;

export default class NavLift extends Component {
    createMenu = (menuList) => {
        return menuList.map((elem) => {
            if(elem.children){
                return (
                    <SubMenu key={elem.path} title={<span><Icon type={elem.icon}></Icon>{elem.title}</span>}>
                        {this.createMenu(elem.children)}
                    </SubMenu>     
                )
            }
            return (
                <Menu.Item key={elem.path}>
                    <Link to={elem.path}>
                        {elem.icon?<Icon type={elem.icon}></Icon>:null}
                        {elem.title}
                    </Link>
                </Menu.Item>     
            )
        })
    }
    componentWillMount = () => {
        let list = this.createMenu(menuList);
        this.setState({
            list
        })
    }  
    render() {
        return (
            <div>
                <div className="logobox">
                    <img src="/imgs/logo.png"/>
                </div>
                <Menu theme='dark' mode='inline' defaultOpenKeys={['/admin/student']}>
                    {this.state.list}
                    {/* <Menu.Item>菜单项</Menu.Item>
                    <Menu.Item>菜单项</Menu.Item>
                    <Menu.Item>菜单项</Menu.Item>
                    <SubMenu title="子菜单">
                    <Menu.Item>子菜单项</Menu.Item>
                    <Menu.Item>子菜单项</Menu.Item>
                    <Menu.Item>子菜单项</Menu.Item>
                </SubMenu> */}
               </Menu>
            </div>
        )
    }
}
