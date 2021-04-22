import stylesheet from "styles/index.less";
import { connect } from "react-redux";
import Head from "next/head";
import { Row, Col, message } from "antd";
import { Navigator } from "components";
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    reducer: {
      component: state.component,
      interact: state.interact,
      lotto: state.lotto,
      user: state.user
    },
  };
};
import actions from "../redux/actions";
const mapDispatchToProps = (dispatch) => ({
  action: {
    interact: (api, doc, item) =>
      dispatch(actions.interact.call(api, doc, item)),
    lotto: (api, doc, item, id, props) =>
      dispatch(actions.lotto.call(api, doc, item, id, props)),
    user: (api, doc, item, id, props) =>
      dispatch(actions.user.call(api, doc, item, id, props)),
  },
});
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
  return (
    <Navigator fullscreen={fullscreen} noLayout={noLayout}>
      <Head>
        <title>React Starter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Description" content="Amazon Deepmap" />
      </Head>
      <style
        dangerouslySetInnerHTML={{
          __html: stylesheet,
        }}
      />
      <Row gutter={8} style={{height: "100%" }}>
        <Col span={24}>
          <div style={{ height:"100%" }}>
            {React.Children.map(props.children, (child) => {
              return React.cloneElement(child, {
                action: props.action,
                reducer: props.reducer,
              });
            })}
          </div>
        </Col>
      </Row>
    </Navigator>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
