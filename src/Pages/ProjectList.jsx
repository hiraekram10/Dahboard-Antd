import React from 'react'
import './Css/project.css'
import { Card, Space,Col,Row } from 'antd';
import { CheckCircleOutlined, InfoCircleOutlined, PieChartOutlined, PlusSquareOutlined } from '@ant-design/icons'

const ProjectList = () => {
  return (
    <div className='projList-main'>
      <Row gutter={[10,20]}>
      <Col  sm={24} md={24} lg={20} xl={24} className='proj-one'>
        <h1>Project List
        </h1>
      </Col>
      <Col sm={24} md={24} lg={20} xl={24} className='proj-two'>
        <Card size="small" className='card' >
          <div className='proj-card'>
            <div className='left'>
              <ul className='list-card'>
                <li><PieChartOutlined /> All</li>
                <li><InfoCircleOutlined /> Doing</li>
                <li><CheckCircleOutlined /> Done</li>
              </ul>
            </div>
            <div className='right'>
              <button><PlusSquareOutlined /> Create New Porject</button>

            </div>
          </div>
        </Card>
      </Col>
      <Col sm={24} md={24} lg={20} xl={24} className='proj-three'>
      <Card className='card'>
        
      </Card>
      </Col>
      </Row>
    </div>
  )
}

export default ProjectList

