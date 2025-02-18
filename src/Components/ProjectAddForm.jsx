import { Row ,Col,Form,Input,Select,DatePicker,} from 'antd'
import MyDropzone from './FileUpload'

import React from 'react'
import Redbtn from './btn/Redbtn';


const { Option } = Select;
const { TextArea } = Input;

const ProjectAddForm = () => {
  return (
    <Row gutter={[20,20]}>
      
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <Form.Item className='itemform'  layout="vertical" name="Project Title" label="Project Title" rules={[{ required: true }]}>
        <Input className="projInp"/>
      </Form.Item>
     
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <Form.Item  className='itemform' layout="vertical" name="Client name" label="Client name" rules={[{ required: true }]}>
        <Input className="projInp"/>
        </Form.Item>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
      <Form.Item  className='itemform' layout="vertical" name="Project Rate" label="Project Rate" rules={[{ required: true }]}>
        <Input className="projInp"/>
        </Form.Item>
      
      </Col>
      <Col  xs={24} sm={24} md={12} lg={8} xl={8}>
      <Form.Item  className='itemform' layout="vertical" name="Project Type" label="Project Type" >
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
      <Form.Item  className='itemform' layout="vertical" name="Priority" label="Priority" >
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
      <Form.Item  className='itemform' layout="vertical" name="Project size" label="Project Size" >
        <Select
        
           defaultValue='Small'
          allowClear
        >
          <Option value="Small">Small</Option>
          <Option value="Big">Big</Option>
          <Option value="Medium">Medium</Option>
          
        </Select>
        </Form.Item>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
      <Form.Item className='itemform'
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
        <DatePicker className="projInp"/>
      </Form.Item>
      
      </Col>
      <Col xs={24} sm={24} md={12} lg={8} xl={8}>
      <Form.Item className='itemform'
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
        <DatePicker className="projInp"/>
      </Form.Item></Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <Form.Item className='itemform'  layout="vertical" label="TextArea">
          <TextArea rows={1} className="projInp textarea"/>
        </Form.Item>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <div className='Proj-dropzone'>
  <MyDropzone className={'proj-drop'}/>
  </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} className='proj-btnsec'>
     <Redbtn title={'Add'} themeclass={'grbtn'}/>
      <Redbtn title={'cancel'} themeclass={'Rbtn'}/>
      </Col>
     
    </Row>
  )
}

export default ProjectAddForm
