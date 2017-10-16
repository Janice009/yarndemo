/**
 * Created by janice on 2017/10/15.
 */
//系统管理主页面子页面路由
import React from 'react';
import ReactDOM from 'react-dom'
import { Switch, Route ,Link} from 'react-router-dom';
import {Router} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
//import SysContent from './sysContent';
//import FullSys from './fullsysmanage'
import {Row,Col,} from 'antd';
import Orgmanage from './orgmanage';
import Basemanage from './basemanage';
import Departmanage from './departmanage';
import Permissfunc from './permissfunc';
import Personmanage from './personmanage';
import Dutymanage from './dutymanage';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider} = Layout;
const history = createBrowserHistory()

export default class Sysmanage extends React.Component {

    render() {
        return (
            <Router history={history}>
                <div>
                    <Row lg={24}>

                        <Layout style={{ padding: '24px 0', background: '#fff' }}>

                            <Sider width={200} style={{ background: '#fff' }}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                    onClick={this.handleClick}
                                    >
                                    <SubMenu key="sub1" title={<span><Icon type="user" />系统配置</span>}>
                                        <Menu.Item key="1"><Link to="/sysmanage/sysbase">基本配置</Link></Menu.Item>
                                        <Menu.Item key="2"><Link to="/sysmanage/orgmanage">组织管理</Link></Menu.Item>
                                        <Menu.Item key="3"><Link to="/sysmanage/departmanage">部门管理</Link></Menu.Item>
                                        <Menu.Item key="4"><Link to="/sysmanage/personmanage">角色管理</Link></Menu.Item>
                                        <Menu.Item key="5"><Link to="/sysmanage/dutymanage">职位管理</Link></Menu.Item>
                                    </SubMenu>

                                    <Menu.Item key="6"><Link to="/sysmanage/announce"><Icon type="notification"/>公告管理</Link></Menu.Item>

                                    <SubMenu key="sub2" title={<span><Icon type="notification" />人员管理</span>}>
                                        <Menu.Item key="7"><Link to="/sysmanage/tech">技术人员</Link></Menu.Item>
                                        <Menu.Item key="8"><Link to="/sysmanage/sales">销售人员</Link></Menu.Item>
                                    </SubMenu>

                                    <SubMenu key="sub3" title={<span><Icon type="permission" />权限管理</span>}>
                                        <Menu.Item key="9"><Link to="/sysmanage/permissfunc">功能权限</Link></Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </Sider>


                            <Content>
                                <div style={{width:"93%",margin:"1em auto"}}>
                                    <Route  path="/sysmanage/sysbase" component={Basemanage}/>
                                    <Route  path="/sysmanage/orgmanage" component={Orgmanage}/>
                                    <Route  path="/sysmanage/departmanage" component={Departmanage}/>
                                    <Route  path="/sysmanage/personmanage" component={Personmanage}/>
                                    <Route  path="/sysmanage/dutymanage" component={Dutymanage}/>

                                    <Route  path="/sysmanage/permissfunc" component={Permissfunc}/>
                                </div>
                            </Content>
                        </Layout>
                    </Row>
                </div>
            </Router >
        )

    }


}

