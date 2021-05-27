import React from "react";
import { Button,Typography,Card,Form,Input,message,Checkbox  } from "antd";
import Head from "next/head";
import stylesheet from "styles/index.less";
import { useNReduxDispatcher,useNReduxMapping } from "../nredux";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { connect } from "react-redux";
import {useEffect} from "react";

const {Title,Text,Link} = Typography;
const styles={
  pad:{position:"absolute",width:"100%",textAlign:"-webkit-center",top:"22vh"},
  card:{boxShadow:"0px 0px 20px #00af917d",width:"max-content"},
  title:{marginBottom:"2rem"},
  form:{width:'300px',textAlign:'initial'}
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
    const {remember} = props.reducer?.interact;
    console.log(remember);
    useEffect(() => {
      props?.action?.interact.getRemember();
    }, []);

    useEffect(() => {
      form.setFieldsValue(remember);
    }, [remember]);

    useEffect(() => {
      if(error!=null) {
        message.error(error);
      }
    }, [error]);

    const [form] = Form.useForm();
    const validateMessages = {
      required: '${label} is required!'
    };
    const onFinish =(e)=>{
      form.validateFields().then(v=>{
        if(v.remember){
          props.action.interact.putRemember(v);
        }else{
          props.action.interact.deleteRemember();
        }
        delete v.remember;
        props?.action?.api.postApiAuthSignin(v,null,props);
      })
    }

    const signup=()=>{
      props?.action?.api.postApiAuthSignup({
        "username": "user011",
        "email": "user@gmail.com",
        "password": "user01",
        "roles": ["user"]
      });
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
            <Title level={3} style={styles.title}>Let's Travel</Title>
            <Form 
              style={styles.form}
              {...layout} 
              form={form} 
              name="nest-messages" 
              onFinish={onFinish} 
              validateMessages={validateMessages}
              initialValues={remember}
            >
              <Form.Item 
                name={['username']} 
                rules={[{ required: true, message: 'Please fill username' }]}
              >
                <Input placeholder="username" size="large" />
              </Form.Item>
              <Form.Item 
                name={['password']} 
                rules={[{ required: true, message: 'Please fill password'  }]}
              >
                <Input.Password
                  placeholder="password"
                  size="large"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Form.Item> 
              <Form.Item name={['remember']} valuePropName="checked">
                <Checkbox >Remember me</Checkbox>
              </Form.Item>
              <Form.Item style={{marginTop:'1rem',textAlign:'center'}}>
                <Button type="primary" htmlType="submit" value="Login">Log in</Button>
              </Form.Item>
            </Form>
            <Text >Don't have an account? 
              <Link href="/signup" style={{marginLeft:"6px"}}>
                  Sign up
              </Link>
            </Text >
          </Card>
        </div>
    </>
  );
}

export default connect(useNReduxMapping, useNReduxDispatcher)(LogInPage);
