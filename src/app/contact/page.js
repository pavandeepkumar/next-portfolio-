'use client';
import React from "react";
import { useState } from "react";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";
import { AiFillPhone, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import  Link  from "next/link";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row gutter={[16, 16]} justify="center">
      <Col xs={24} md={12} lg={8} className="m-20">
        <div>
          <div className="text-3xl font-bold mb-5">
            <span className="text-red-300">Contact</span>{" "}
            <span className="text-yellow-500">Me</span>
          </div>
          <div className="mb-4">
            <h1>
              If you have any questions or would like to collaborate, please don't hesitate to contact me.
            </h1>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex">
            <AiFillPhone className="mt-1" /> +91 9798949232
          </div>
          <div className="flex mt-2">
            <AiOutlineMail className="mt-2 mr-1" /> pavandeepkumarmlk@gmail.com
          </div>
          <div className="flex mt-2">
            <CiLocationOn className="mt-1" /> Ahmedabad, Gujarat
          </div>
        </div>
      </Col>
      <Col xs={24} md={12} lg={8} className="m-20">
        <Form
          className="p-10 rounded-3xl bg-white boxShadow"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          <h1 className="mb-8 font-bold text-2xl items-center flex">Contact Me</h1>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input onChange={(e) => setName(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[
              {
                required: true,
                message: "Please enter your message!",
              },
            ]}
          >
            <Input.TextArea onChange={(e) => setMessage(e.target.value)} />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button className="w-full bg-blue-600 font-bold text-white" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col xs={24} md={12} lg={8}>
        <div className="bg-blue-500 text-white rounded-3xl flex justify-center items-center h-20">
          <Link href="https://www.linkedin.com/in/pavandeep-kumar-0b0366231/" className="px-2 font-bold">
            <AiFillLinkedin className="m-3 rounded-3xl" />
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default Page;
