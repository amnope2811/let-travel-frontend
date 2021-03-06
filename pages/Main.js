import stylesheet from "styles/index.less";
import { api, classes } from "../nredux.config";
import { useNReduxDispatcher,useNReduxMapping } from "../nredux";
import { connect } from "react-redux";
import Head from "next/head";
import { Row, Col, message } from "antd";

import { Navigator } from "components";
function errorMessage(error) {
  message.error(error);
}
function successMessage() {
  message.success("success");
}

function Main(props) {
  const { fullscreen, loadMap, noLayout } = props;
  const { error, success } = props.reducer.component;
  
 
  React.useEffect(() => {
    if (error) {
      errorMessage(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (success) {
      successMessage();
    }
  }, [success]);
  React.useEffect(() => {
    props.action?.api?.getMe();
  }, []);
  return (
    <Navigator fullscreen={fullscreen} noLayout={noLayout} {...props}>
      <Head>
        <title>Let's Travel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Description" content="Let travel" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        />
      </Head>
      <style
        dangerouslySetInnerHTML={{
          __html: stylesheet,
        }}
      />
      <Row gutter={8} style={{height:"100%"}}>
        <Col span={24 }>
            {React.Children.map(props.children, (child) => {
              return React.cloneElement(child, {
                action: props.action,
                reducer: props.reducer,
              });
            })}
        </Col>
      </Row>
    </Navigator>
  );
}
export default connect(useNReduxMapping, useNReduxDispatcher)(Main);
