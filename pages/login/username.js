import React from "react";
import { Button,Typography,Card,Form,Input,message,Checkbox  } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
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


function UsernameForm(props) {
    const {remember} = props.reducer?.interact;
    const { loading} = props.reducer.component;

    useEffect(() => {
      props?.action?.interact.getRemember();
    }, []);

    useEffect(() => {
      form.setFieldsValue(remember);
    }, [remember]);

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

  return (
    <>
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
                <Button type="primary" htmlType="submit" value="Login" loading={loading}>Log in</Button>
              </Form.Item>
            </Form>
            <Text >Don't have an account? 
              <Link href="/signup" style={{marginLeft:"6px"}}>
                  Sign up
              </Link>
            </Text >
        </Card>
    </>
  );
}

export default UsernameForm;
