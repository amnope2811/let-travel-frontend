import React from "react";
import SignUpForm from "./signupForm";
import RoleSelected from "./roleSelected";
import { useNReduxDispatcher,useNReduxMapping } from "../../nredux";
import { Card,message } from "antd";
import { connect } from "react-redux";
import Head from "next/head";
import stylesheet from "styles/index.less";

function SignUpPage(props) {
    const [role, setRole] = React.useState();
    const state ={role, setRole};

    const { error} = props.reducer.component;
    React.useEffect(() => {
      if(error!=null) {
        message.error(error);
      }
    }, [error]);
    
    return (
        <MainComponent {...state} {...props}/>
    );
}

function MainComponent(props) {
  const styles={
    pad:{position:"absolute",width:"100%",textAlign:"-webkit-center",top:props.role?"0.1vh":"20vh"},
    card:{boxShadow:"0px 0px 20px #00af917d",width:"max-content"}
  }
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
        <Card style={styles.card}>
            {props.role==null ?
                <RoleSelected {...props}/>
                : <SignUpForm {...props}/>   
            }
        </Card>  
      </div>
    </>
  );
}

export default connect(useNReduxMapping, useNReduxDispatcher)(SignUpPage);
