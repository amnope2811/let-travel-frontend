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
import traveller from 'images/traveller.png'
function WebLayout({ router, fullscreen, t, ...props }) {
  const path = router.pathname;
  const _on_click_menu = (e) => {
    Router.push(e.key);
  };

  const _on_click_user=(e)=>{
    console.log(e);
    switch (e.key){
      case 'signout':
        props?.action?.interact.postSignout();
        break;
    }
  }
  React.useEffect(() => {
    if (router.asPath !== "/") {
      Router.push(router.asPath);
    }
  }, []);
  return (
    <Layout  style={{ height: "100vh",overflowY: "hidden" }}>
      <Header>
        <Row gutter="16">
          <Col span={20}>
            <Menu
              onClick={_on_click_menu}
              mode="horizontal"
              defaultSelectedKeys={[path]}
            >
              <Menu.Item key="/"><HomeOutlined /></Menu.Item>
              <Menu.Item key="/explore">Explore</Menu.Item>
              <Menu.Item key="/booked">Booked</Menu.Item>
            </Menu>
          </Col>
          {props?.reducer?.api?.me?.user &&
            <Col span={4}>
              
              <Menu
                onClick={_on_click_user}
                mode="horizontal"
                defaultSelectedKeys={[path]}
                style={{textAlign:'end'}}
              >
                <SubMenu key="sub1" icon={<Avatar src={traveller}/>}>
                  <Menu.Item key="signout">Sign out</Menu.Item>
                </SubMenu>
              </Menu>
            </Col>
        }
        </Row>
        
      </Header>
      <Layout>
        <Content style={{overflowY:"auto",overflowX:"hidden"}}>
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
