import {
  Layout,
  Menu,
  Row,
  Col,
  Typography,
  Avatar,
  Space,
  Divider,
  Button,
} from "antd";
const { SubMenu } = Menu;
const { Title } = Typography;
import Router from "next/router";
import { withRouter } from "next/router";
import { ApiFilled,HomeOutlined } from "@ant-design/icons";
import * as React from "react";
import getConfig from "next/config";
const { Content, Sider, Header } = Layout;
function WebLayout({ router, fullscreen, t, ...props }) {
  const path = router.pathname;
  const _on_click_menu = (e) => {
    Router.push(e.key);
  };
  React.useEffect(() => {
    if (router.asPath !== "/") {
      Router.push(router.asPath);
    }
  }, []);
  return (
    <Layout  style={{ height: "100vh",overflowY: "hidden" }}>
      <Header>
        <Menu
          onClick={_on_click_menu}
          mode="horizontal"
          defaultSelectedKeys={[path]}
        >
          <Menu.Item key="/"><HomeOutlined /></Menu.Item>
          <Menu.Item key="/search">ค้นหา</Menu.Item>
        </Menu>
      </Header>
      <Layout
        // style={{
        //   backgroundColor: "rgba(var(--b3f,250,250,250),1)",
        // }}
      >
        <Content style={{overflowY:"auto"}}>
          <Row
            gutter={8}
            style={{
              height:"100%"
            }}
          >
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
            >
              {props.children}
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}
export default withRouter(WebLayout);
