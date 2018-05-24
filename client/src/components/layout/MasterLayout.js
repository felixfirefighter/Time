import React, { Component } from "react";

import { Layout, Menu, Icon } from "antd";

import { Link, Route, withRouter } from "react-router-dom";

import CalendarContainer from "./CalendarContainer";
import Tags from "../tags/Tags";

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
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <Route exact path="/" component={CalendarContainer} />
            <Route exact path="/tags" component={Tags} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(MasterLayout);
