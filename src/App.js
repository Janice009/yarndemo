import React, { Component } from 'react';

import { Button } from 'antd';
import './App.css';
import Navbar from './common/Page/Navbar';
import Main from './common/Page/Main';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


class App extends Component {
    render() {
        return (
        // this component will be rendered by our <___Router>
            <div>
                <Layout>
                    <Header>
                        <Navbar />
                    </Header>
                    <Content>
                        <Main />
                    </Content>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>
                    HIK ©2017 Created by HIKVISION
                </Footer>
            </div>

        );
    }
}

export default App;