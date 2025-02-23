import React from "react";
import { Form, Input, Radio } from "antd";
import bgGreeting from '../assets/img/bg-greeting.jpg'
import './Greetings.css'
import axios from "axios";
import { toast } from "react-toastify";
export default function Greetings() {
  const onFinish = async (values) => {
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz0_RDiQL7ec7-fKz0PIPFEJosqmccVlDSmXTFIzLkjYxH1_C2DefucZzL0aaK0s2pjuQ/exec"

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    toast.success("Gửi thành công, xin cảm ơn quý khách!");

    form.resetFields()
  }



  const [form] = Form.useForm();

  return (
    <div style={{
      maxWidth: 350,
      height: 630,
      margin: "auto",
      // boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 3px, rgba(17, 17, 26, 0.1) 0px 2px 7px, rgba(17, 17, 26, 0.1) 0px 3px 10px',
      borderRadius: "16px",
      // background: "#ffff",
      textAlign: "left",
      position: "relative",

    }}>
      <img src={bgGreeting} width={'100%'} height={'100%'} style={{ position: 'absolute', borderRadius: "16px", animationDelay: '1.3s' }} className="animate__animated animate__fadeIn" />
      <Form
        className="animate__animated animate__backInRight"
        name="basic"
        initialValues={{
          confirm: '1',
          friend: '1'
        }}
        layout="vertical"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        style={{ position: 'relative', top: 130, left: 27, width: 295, animationDelay: '1.7s' }}
        autoComplete="off"
        form={form}
      // variant="borderless"
      >
        <Form.Item
          // label="Tên"
          name="name"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên",
            },
          ]}
        >
          <Input placeholder="Tên của bạn" />
        </Form.Item>
        <Form.Item name="friend" label="Bạn là khách của:" >
          <Radio.Group>
            <Radio value="1">Chú rễ</Radio>
            <Radio value="2">Cô dâu</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="confirm" label="Bạn sẽ đến chứ?" >
          <Radio.Group>
            <Radio value="1">Tôi sẽ đến</Radio>
            <Radio value="2">Xin lỗi. Tôi bận mất rồi</Radio>
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
          // label="Gửi lời chúc"
          name="greeting"
        // rules={[
        //   {
        //     // required: true,
        //     message: "Please input your password!",
        //   },
        // ]}
        >
          <Input.TextArea style={{ height: '100px' }} placeholder="Gửi lời chúc đến cô dâu chú rễ" />
        </Form.Item>

        <Form.Item style={{ textAlign: '-webkit-center' }}>
          <button className="btn-grad">
            Gửi
          </button>
        </Form.Item>
      </Form>

    </div>
  );
}
