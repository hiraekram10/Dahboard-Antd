import { Row ,Col,Form,Input,Select,DatePicker,} from 'antd'
import MyDropzone from './FileUpload'

import React from 'react'

const { Option } = Select;
const { TextArea } = Input;

const ProjectAddForm = () => {
  return (
    <Row gutter={[20,20]}>
      
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <Form.Item  layout="vertical" name="Project Title" label="Project Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
     
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <Form.Item  layout="vertical" name="Client name" label="Client name" rules={[{ required: true }]}>
        <Input />
        </Form.Item>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
      <Form.Item  layout="vertical" name="Project Rate" label="Project Rate" rules={[{ required: true }]}>
        <Input />
        </Form.Item>
      
      </Col>
      <Col  xs={24} sm={24} md={12} lg={8} xl={8}>
      <Form.Item  layout="vertical" name="Project Type" label="Project Type" >
        <Select
         defaultValue='horly'
          // placeholder="Horly"
          // onChange={onGenderChange}
          allowClear
        >
          <Option value="horly" Select>Horuly</Option>
          <Option value="fix price">Fix price</Option>
          
        </Select>
      </Form.Item></Col>
      <Col  xs={24} sm={24} md={12} lg={8} xl={8}>
      <Form.Item  layout="vertical" name="Priority" label="Priority" >
        <Select
        
           defaultValue='Low'
          allowClear
        >
          <Option value="Low">Low</Option>
          <Option value="Medium">Medium</Option>
          <Option value="High">High</Option>
          <Option value="Urgent">Urgent</Option>
        </Select>
      </Form.Item>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
      <Form.Item  layout="vertical" name="Project Size" label="Project Size" rules={[{ required: true }]}>
        <Select
      
         defaultValue='Small'
          allowClear
        >
          <Option value="Small">Small</Option>
          <Option value="Medium">Medium</Option>
          <Option value="Big">Big</Option>
        </Select>
      </Form.Item>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
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
      </Form.Item>
      
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
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
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <Form.Item  layout="vertical" label="TextArea">
          <TextArea rows={1} />
        </Form.Item>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
  <MyDropzone/>
      </Col>
     
    </Row>
  )
}

export default ProjectAddForm
