import React from "react";
import { Button,Typography,Card,Form,Input,message,Checkbox,Row,Col  } from "antd";
import { MailTwoTone } from '@ant-design/icons';
import {useEffect} from "react";

const {Title,Text,Link} = Typography;
const styles={
  card:{boxShadow:"0px 0px 20px #00af917d",maxWidth:"470px"},
  title:{marginBottom:"2rem"},
  form:{width:'300px',textAlign:'initial'}
}


function TwoFactorValidation(props) {
    const [form] = Form.useForm();
    
    const { loading} = props.reducer.component;
    console.log(loading);
    
    const auth = props.reducer.interact["api-auth-signin"]
    console.log(auth);
    
    const validate =()=>{
        const {validateValue} = form.getFieldsValue();
        if(validateValue){
            props?.action?.api.postTwoFactor({
                ...auth,
                code:validateValue
            })
        }
    }

  return (
    <>
        <Card style={styles.card}>
            <Row gutter={70}>
                <Col sm={8} xs={24}>
                    <MailTwoTone style={{fontSize:"140px"}} twoToneColor="#00af98"/>
                </Col>
                <Col sm={16} xs={24} style={{textAlign:"left"}}>
                    <Title level={4}>Two Factor Authentication</Title>
                    <Text>A validation code has been sent to your email.</Text>
                    <Form 
                        form={form} 
                        name="nest-messages" 
                    >
                        <Form.Item 
                            name={['validateValue']} 
                            rules={[{ required: true, message: 'Please fill validation code' }]}
                        >
                            <Input 
                                style={{marginTop:"24px"}} 
                                className="input-with-addon-button" 
                                addonAfter={<Button onClick={validate} loading={loading}>Validate</Button>}
                            />
                        </Form.Item> 
                    </Form> 
                </Col>
            </Row>
        </Card>
    </>
  );
}

export default TwoFactorValidation;
