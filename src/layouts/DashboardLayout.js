import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom';
import { Layout, Menu, Icon, Input, Button } from 'antd';

import './DashboardLayout.less'

const { Header, Sider, Content } = Layout;

export class DashboardLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    this.props.history.push('/login')
  }

  render() {
    const {children} = this.props;
    const {collapsed} = this.state;

    const rightContent = [
        <React.Fragment>
          <span style={{ color: '#999', marginRight: 4 }}>
            Hi,
          </span>
          <span>Admin</span>
          <Button
            icon="poweroff"
            shape="circle"
            style={{margin: '0px 10px'}}
            onClick={this.handleLogout}
          />
        </React.Fragment>
    ]

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="brand">
            <div className="logo">
              {collapsed ? null : <h1>QuadX</h1>}
            </div>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="dashboard" />
              <span>Dashboard</span>
              <Link to="/dashboard" />
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="file" />
              <span>Page 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="file" />
              <span>Page 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <div className="container">
          <Header className="header">
            <div
              className="button"
              onClick={this.toggle}
            >
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              />
            </div>

            <Input placeholder="Search" prefix={<Icon type="search"/>} className="search" />

            <div className="rightContainer">{rightContent}</div>
          </Header>
          <Content className="content">
            {children}
          </Content>
          </div>
      </Layout>
    )
  }
}

export default withRouter(DashboardLayout)
