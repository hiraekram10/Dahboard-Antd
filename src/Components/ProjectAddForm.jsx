import { Row ,Col,Form,Input,Select,DatePicker,} from 'antd'
import MyDropzone from './FileUpload'

import React from 'react'

const { Option } = Select;
const { TextArea } = Input;

const ProjectAddForm = () => {
  return (
    <Row>
      <Form> 
      <Col>
      <Form.Item name="note" label="Note" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
     
      </Col>
      <Col>
      <Form.Item name="note" label="Note" rules={[{ required: true }]}>
        <Input />
        </Form.Item>
      </Col>
      <Col>
      <Form.Item name="note" label="Note" rules={[{ required: true }]}>
        <Input />
        </Form.Item>
      
      </Col>
      <Col>
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          // onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item></Col>
      <Col>
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          // onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      </Col>
      <Col>
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          // onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      </Col>
      <Col>
      <Form.Item
        label="DatePicker"
        name="DatePicker"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      
      </Col>
      <Col>
      <Form.Item
      layout="vertical"
        label="DatePicker"
        name="DatePicker"
        rules={[
          {
            required: true,
            message: 'Please input!',
          },
        ]}
      >
        <DatePicker />
      </Form.Item></Col>
      <Col>
      <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
      </Col>
      <Col>
  <MyDropzone/>
      </Col>
      </Form>
    </Row>
  )
}

export default ProjectAddForm
