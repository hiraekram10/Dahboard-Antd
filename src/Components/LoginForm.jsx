import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const LoginForm = ({login}) => (
  <Form
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
    onFinish={login}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
 <Form.Item
       label="email"
       name="email"
       rules={[
         {
           required: true,
           message: 'Please input your email',
         },
 
         {
             pattern: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm,
             message: 'input ypur email correctly',
           },
       ]}
     >
       <Input/>
     </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default LoginForm