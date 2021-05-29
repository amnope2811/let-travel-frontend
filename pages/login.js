import React from "react";
import { message,Spin  } from "antd";
import Head from "next/head";
import stylesheet from "styles/index.less";
import { useNReduxDispatcher,useNReduxMapping } from "../nredux";
import { connect } from "react-redux";
import {useEffect} from "react";
import UsernameForm from "./login/username";
import TwoFactorValidation from "./login/validation";

const styles={
  pad:{position:"absolute",width:"100%",textAlign:"-webkit-center",top:"22vh"}
}
const layout = {
  wrapperCol: {
    md:{span: 16, offset: 4},
    sm:{span: 18, offset: 3}
    
  },
};


function LogInPage(props) {
  return (
      <>
        <LogInComponent {...props}/>
      </>
  );
}

function LogInComponent(props) {
    const { error} = props.reducer.component;
    const auth = props.reducer.interact["api-auth-signin"]
    console.log(auth);
    useEffect(() => {
      props?.action.interact.clearApiAuthSignin();
    }, []);

    useEffect(() => {
      if(error!=null) {
        message.error(error);
      }
    }, [error]);

  return (
    <>
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

        <div style={styles.pad}>
          { auth? 
            <TwoFactorValidation {...props}/>
            :<UsernameForm {...props}/>
          }
        </div>
    </>
  );
}

export default connect(useNReduxMapping, useNReduxDispatcher)(LogInPage);
