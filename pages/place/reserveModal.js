import React from "react";
import { Input,Typography,Button,Modal,DatePicker,Form,InputNumber } from "antd";
import moment from 'moment';
const { Search } = Input;
const { Title,Text,Link  } = Typography;
const {RangePicker } = DatePicker;
let styles={
  
}
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

export default function ReserveModal(props) {
  let {data,reducer} = props;
  let onConfirm =()=>{
    props.setIsRenderModal(false);
  }
  let onCancel =()=>{
    props.setIsRenderModal(false);
  }
  let onFinish =()=>{

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
          <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item 
              name={['number']} 
              label="Number of Tickers" 
              rules={[{ required: true }]}
            >
              <InputNumber size="large" min={1} max={10} defaultValue={1}/>
            </Form.Item>
            <Form.Item 
              name={['date']} 
              label="Date"
              rules={[{ required: true }]}
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

