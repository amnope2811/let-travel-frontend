import React from "react";
import { Button,Typography,Card,Form,Input,message,Checkbox,Row,Col  } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {useEffect} from "react";

const {Title,Text,Link} = Typography;
const styles={
  main:{backgroundColor:"#cccccc"},
  pad:{position:"absolute",width:"100%",textAlign:"-webkit-center",top:"22vh"},
  card:{boxShadow:"0px 0px 20px #00af917d",width:"max-content"},
  title:{marginBottom:"2rem"},
  form:{width:'300px',textAlign:'initial'},
  button:{width:'120px'}
}
const layout = {
  wrapperCol: {
    md:{span: 16, offset: 4},
    sm:{span: 18, offset: 3}
    
  },
};

export default function SignUpForm(props) {
    const {setRole} = props;
    console.log(props);
    // useEffect(() => {
    //   props?.action?.interact.getRemember();
    // }, []);

    const [form] = Form.useForm();
    const validateMessages = {
      required: '${label} is required!'
    };

    const onFinish =(e)=>{
      form.validateFields().then(v=>{
        
      })
    }
    const onBack =()=>{
        setRole(null);
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
        <Title level={3} style={styles.title}>Let Travel</Title>
        <Form 
            style={styles.form}
            {...layout} 
            form={form} 
            name="nest-messages" 
            onFinish={onFinish} 
            validateMessages={validateMessages}
            autoComplete="off"
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
            <Form.Item 
                name={['confirmPassword']} 
                rules={[{ required: true, message: 'Please confirm password'  }]}
            >
                <Input.Password
                  placeholder="confirm"
                  size="large"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Form.Item>
            <Form.Item 
                name={['email']} 
                rules={[{ required: true, message: 'Please fill username' }]}
            >
                <Input placeholder="email" size="large" />
            </Form.Item>
            <Row gutter={16}>
                <Col>
                    <Form.Item style={{margin:'1rem auto'}}>
                        <Button style={styles.button} type="primary" onClick={onBack}>Back</Button>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item style={{margin:'1rem auto'}}>
                        <Button style={styles.button} type="primary" htmlType="submit" value="Signup">Sign Up</Button>
                    </Form.Item>
                </Col>
            </Row>
            
            
        </Form>
    </>
  );
}

