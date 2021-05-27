import React from "react";
import { Input,Typography,Button,Modal,DatePicker,Form,InputNumber } from "antd";
import moment from 'moment';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const initValue ={
  number:1,
  date:moment((new Date()).setHours(0,0,0))
}

export default function ReserveModal(props) {
  const {reducer,data} = props;
  const [form] = Form.useForm();
  

  const onConfirm =()=>{
    form.submit();
  }

  const onCancel =()=>{
    props.setIsRenderModal(false);
  }

  const onFinish =()=>{
    console.log('testtt');
    form.validateFields().then(v=>{
      console.log(v);
      props.setIsRenderModal(false);
    })
  }
  return (
    <>
      {data&&(
        <Modal
          visible={props.isRenderModal}
          title="Reservation Form"
          onOk={onConfirm}
          onCancel={onCancel}
          footer={[
            <Button key="back" onClick={onCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" loading={reducer?.component?.loading} onClick={onConfirm}>
              Confirm
            </Button>,
          ]}
        >
          <Form 
            {...layout} 
            form={form} 
            name="nest-messages" 
            onFinish={onFinish} 
            validateMessages={validateMessages}
            initialValues={initValue}
          >
            <Form.Item 
              name={['number']} 
              label="Number of Tickers" 
              rules={[{ required: true, message: 'Please fill number of tickets' }]}
            >
              <InputNumber size="large" min={1} max={10} defaultValue={1}/>
            </Form.Item>
            <Form.Item 
              name={['date']} 
              label="Date"
              rules={[{ required: true, message: 'Please fill reservation date'  }]}
            >
              <DatePicker
                size="large"
                format="YYYY-MM-DD HH:mm:ss"
                showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
              />
            </Form.Item>
            <Form.Item 
              name={['code']} 
              label="Promotion Code"
            >
              <Input size="large" style={{width:'160px'}} placeholder="Enter Promo Code"/>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
}

