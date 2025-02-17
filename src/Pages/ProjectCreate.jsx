import React from 'react'
import { Row,Col,Card } from 'antd'
// import '../Components/project.css '

const ProjectCreate = () => {
  return (
    <div className='createPorj-main'>
      <Row gutter={[10,10]}>
        <Col className='proj-one' xs={24} sm={24} md={24} lg={24}>
        <h1>Project Create</h1>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
        <Card className='card'>

        </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProjectCreate
