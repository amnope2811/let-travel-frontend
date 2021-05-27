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
  const {reducer,data,action,setIsRenderModal} = props;
  const [form] = Form.useForm();
  const {me} = reducer.api;
  const {place} = reducer.interact;

  const onConfirm =()=>{
    form.submit();
  }

  const onCancel =()=>{
    setIsRenderModal(false);
  }

  const onFinish =()=>{
    form.validateFields().then(v=>{
      v.date = v.date.format();
      console.log({placeId:place?.item?.id,username:me?.user?.username,...v});
      delete v.code;
      // action.api.postBook({placeId:place?.item?.id,username:me?.user?.username,...v});
      setIsRenderModal(false);
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

