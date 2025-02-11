import React from "react";
import { Button, Checkbox, Form, Input, Radio } from "antd";
import bgGreeting from '../assets/img/bg-greeting.jpg'
import './Greetings.css'
export default function Greetings() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div style={{
      maxWidth: 350,
      height: 650,
      margin: "auto",
      // boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 3px, rgba(17, 17, 26, 0.1) 0px 2px 7px, rgba(17, 17, 26, 0.1) 0px 3px 10px',
      borderRadius: "16px",
      // background: "#ffff",
      textAlign: "left",
      position: "relative",

    }}>
      <img src={bgGreeting} width={'100%'} height={'100%'} style={{ position: 'absolute', borderRadius: "16px" }} />
      <Form
        name="basic"
        initialValues={{
          confirm: '1',
          friend: '1'
        }}
        layout="vertical"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        style={{ position: 'relative', top: 100, left: 27, width: 295 }}
        autoComplete="off"

      >
        <Form.Item
          label="Tên"
          name="name"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="friend" label="Bạn là khách của:" >
          <Radio.Group>
            <Radio value="1">Chú rễ</Radio>
            <Radio value="2">Cô dâu</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="confirm" label="Bạn sẽ đến chứ?" >
          <Radio.Group>
            <Radio value="1">Có, tôi sẽ đến</Radio>
            <Radio value="2">Xin lỗi, tôi bận mất rồi</Radio>
          </Radio.Group>
        </Form.Item>



        {/* <Form.Item
          label="Số điện thoại"
          name="phone"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập số điện thoại",
            },
          ]}
        >
          <Input />
        </Form.Item> */}

        <Form.Item
          label="Gửi lời chúc"
          name="Gửi lời chúc"
        // rules={[
        //   {
        //     // required: true,
        //     message: "Please input your password!",
        //   },
        // ]}
        >
          <Input.TextArea style={{ height: '100px' }} />
        </Form.Item>

        <Form.Item style={{ textAlign: '-webkit-center' }}>
          <button htmlType="submit" className="btn-grad">
            Gửi
          </button>
        </Form.Item>
      </Form>

    </div>
  );
}
