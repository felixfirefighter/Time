import React, { Component } from "react";

import { Layout, Menu, Icon } from "antd";

import { Link, Route, withRouter } from "react-router-dom";

import CalendarContainer from "../calendar/CalendarContainer";
import TagsContainer from "../tags/TagsContainer";
import ChartsContainer from '../charts/ChartsContainer';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class MasterLayout extends Component {
  render() {
    const { location } = this.props;

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible>
          
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["/"]}
            selectedKeys={[location.pathname]}
          >
            <Menu.Item key="/">
              <Link to="/">
                <Icon type="calendar" />
                <span>Calendar</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/tags">
              <Link to="/tags">
                <Icon type="tags-o" />
                <span>Tags</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/charts">
              <Link to="/charts">
                <Icon type="pie-chart" />
                <span>Charts</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content>
          <div style={{backgroundColor: '#fff', padding: '24px'}}>
            <Route exact path="/" component={CalendarContainer} />
            <Route exact path="/tags" component={TagsContainer} />
            <Route exact path="/charts" component={ChartsContainer}/>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(MasterLayout);
