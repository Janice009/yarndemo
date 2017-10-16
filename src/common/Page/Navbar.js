/**
 * Created by janice on 2017/10/16.
 */
/**
 * Created by janice on 2017/10/15.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Navbar extends React.Component {

    render() {
        return (
            // this component will be rendered by our <___Router>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
                >
                <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/project'>任务管理</Link></Menu.Item>
                <Menu.Item key="3"><Link to='/source'>资源管理</Link></Menu.Item>
                <Menu.Item key="4"><Link to='/workdata'>工作日志</Link></Menu.Item>
                <Menu.Item key="5"><Link to='/excel'>报表</Link></Menu.Item>
                <Menu.Item key="6"><Link to='/sysmanage'>系统管理</Link></Menu.Item>
                <Menu.Item key="7"><Link to='/view'>大屏视图</Link></Menu.Item>
            </Menu>

        );
    }
}

export default Navbar;