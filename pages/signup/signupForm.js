import React from "react";
import { Button,Typography,Form,Input,Row,Col,Radio  } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {useEffect} from "react";
import Router from "next/router";

const {Title,Text,Link} = Typography;
const styles={
  title:{marginBottom:"2rem"},
  form:{width:'320px',textAlign:'initial',maxWidth:'100%'},
  button:{width:'120px'}
}
const layout = {
  labelCol: { md: 10,sm:8 },
  wrapperCol: {
    md:{span: 14},
    sm:{span: 16}
    
  },
};

export default function SignUpForm(props) {
    const {role,setRole,reducer} = props;
    const signup = reducer?.api?.signup;
    
    useEffect(() => {
      if(signup?.message==="User registered successfully!"){
        Router.push('/login');
      }
      console.log(signup);
    }, [signup]);

    const [form] = Form.useForm();
    const validateMessages = {
      required: '${label} is required!'
    };

    const onFinish =(e)=>{
      form.validateFields().then(v=>{
        delete v.confirm;
        v.roles = [role];
        console.log(v);
        try{
           props?.action?.api.postSignup(v);
        }catch(e){
          console.log(e);
        }
      })
    }
    const onBack =()=>{
        setRole(null);
    }
    const changePhoneNumber=(e)=>{
      console.log(e)
    }

  return (
    <>
        <Title level={3} style={styles.title}>Let's Travel</Title>
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
                name={['firstname']}
                label="First Name"
                rules={[{ required: true, message: 'Please fill firstname' }]}
            >
                <Input placeholder="firstname" size="large"/>
            </Form.Item>
            <Form.Item 
                name={['lastname']} 
                label="Last Name"
                rules={[{ required: true, message: 'Please fill lastname' }]}
            >
                <Input placeholder="lastname" size="large" />
            </Form.Item>
            <Form.Item 
                name={['mobileNumber']} 
                label="Phone"
                rules={[
                  { required: true, message: 'Please fill phone number' }
                ]}
            >
                <Input onChange={changePhoneNumber} placeholder="phone number" size="large" maxLength={10}/>
            </Form.Item>
            <Form.Item 
                name={['gender']} 
                label="Gender"
                rules={[{ required: true, message: 'Please select gender' }]}
            >
                 <Radio.Group>
                  <Radio value="M">Male</Radio>
                  <Radio value="F">Female</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item 
                name={['email']} 
                label="Email"
                rules={[{ required: true, message: 'Please fill email',type: 'email' }]}
            >
                <Input placeholder="email" size="large" />
            </Form.Item>
            <Form.Item 
                name={['username']} 
                label="Username"
                rules={[{ required: true, message: 'Please fill username' }]}
            >
                <Input placeholder="username" size="large" autoComplete="off"/>
            </Form.Item>
            <Form.Item 
                name={['password']} 
                label="Password"
                rules={[
                  { required: true, message: 'Please fill password'  },
                  {min:6,message: 'Use 6 characters or more for your password'}
                ]}
            >
                <Input.Password
                  placeholder="password"
                  size="large"
                  autoComplete="off"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Form.Item> 
            <Form.Item 
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                autoComplete="off"
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  }),
                ]}
            >
                <Input.Password
                  placeholder="confirm password"
                  size="large"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
            </Form.Item>
            <Row gutter={16} style={{justifyContent:'center'}}>
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

