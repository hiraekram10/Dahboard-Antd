import React, { useState } from "react";
import ReactQuill from "react-quill";
import { Form ,Row,Col,Input} from "antd";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS

const RichText = () => {
  const [content, setContent] = useState("");

  return (
    <div className="p-4">
      <Form>
        <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <Form.Item className='itemform'  layout="horizontal" name="From" label="From" rules={[{ required: true }]}>
        <Input className="projInp"/>
      </Form.Item>
     
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <Form.Item className='itemform'  layout="horizontal" name="To" label="To" rules={[{ required: true }]}>
        <Input className="projInp"/>
      </Form.Item>
     
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <Form.Item className='itemform'  layout="horizontal" name="Subject" label="Subject" rules={[{ required: true }]}>
        <Input className="projInp"/>
      </Form.Item>
     
      </Col>
        </Row>

      </Form>
      <ReactQuill theme="snow" value={content} onChange={setContent} />
      <div className="mt-4 p-2 border">
        <h3 className="text-md font-semibold">Preview:</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default RichText;
