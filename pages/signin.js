import React from "react";
import { Button,Typography  } from "antd";
import Head from "next/head";
import stylesheet from "styles/index.less";
import { useNReduxDispatcher,useNReduxMapping } from "../nredux";
import { connect } from "react-redux";

function SignInPage(props) {
  return (
      <>
        <SignInComponent {...props}/>
      </>
  );
}

function SignInComponent(props) {
    console.log(props);
    const signin=()=>{
      props?.action?.api.postAuthSignup({id:'test'});
    }
  return (
    <>
    <Head>
        <title>Let's Travel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Description" content="Amazon Deepmap" />
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
        <Button type="primary" onClick={signin}>test</Button>
    </>
  );
}

export default connect(useNReduxMapping, useNReduxDispatcher)(SignInPage);
