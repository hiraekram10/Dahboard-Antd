import React from 'react'
import './Css/project.css'
import { Card, Space, Col, Row } from 'antd';
import { CheckCircleOutlined, InfoCircleOutlined, PieChartOutlined, PlusSquareOutlined } from '@ant-design/icons'
import UserProCard from '../Components/UserProCard';

const ProjectList = () => {

  // userprojects data
  const cardsData = [
    {
      id: 1,
      img:'https://admin.pixelstrap.net/riho/assets/images/user/3.jpg',
      title: "Endless admin Design",
      company: "Themeforest, Australia",
      description: "Endless Admin is a full-featured, multipurpose, premium bootstrap admin template.",
      issues: 12,
      resolved: 5,
      comments: 7,
      progress: 70,
      status: "Doing",
    },
    {
      id: 2,
      title: "Universal admin Design",
      img:'https://admin.pixelstrap.net/riho/assets/images/user/3.jpg',
      company: "Envato, Australia",
      description: "Universal Admin is a full-featured, multipurpose, premium bootstrap admin template.",
      issues: 24,
      resolved: 24,
      comments: 40,
      progress: 100,
      status: "Done",
    },
    {
      id: 3,
      title: "Poco admin Design",
      company: "Envato, Australia",
      img:'https://admin.pixelstrap.net/riho/assets/images/user/3.jpg',
      description: "Poco Admin is a full-featured, multipurpose, premium bootstrap admin template.",
      issues: 10,
      resolved: 10,
      comments: 15,
      progress: 100,
      status: "Done",
    },
    {
      id: 4,
      title: "Material admin Design",
      company: "Themeforest, Australia",
      img:'https://admin.pixelstrap.net/riho/assets/images/user/3.jpg',
      description: "Material Admin is a full-featured, multipurpose,  bootstrap admin template.",
      issues: 8,
      resolved: 6,
      comments: 9,
      progress: 80,
      status: "Doing",
    },
    {
      id: 5,
      title: "Modern admin Design",
      company: "Envato, Australia",
      img:'https://admin.pixelstrap.net/riho/assets/images/user/3.jpg',
      description: "Modern Admin is a full-featured, multipurpose,  bootstrap admin template.",
      issues: 15,
      resolved: 15,
      comments: 20,
      progress: 100,
      status: "Done",
    },
    {
      id: 6,
      title: "Angular admin Design",
      company: "Themeforest, Australia",
      img:'https://admin.pixelstrap.net/riho/assets/images/user/3.jpg',
      description: "Angular Admin is a full-featured, multipurpose, bootstrap admin template.",
      issues: 5,
      resolved: 3,
      comments: 4,
      progress: 60,
      status: "Doing",
    },
  ];
  return (
    <div className='projList-main'>
      <Row gutter={[10, 20]}>
        <Col sm={24} md={24} lg={20} xl={24} className='proj-one'>
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
           {/* cards inner portion */}
            <Row className='user-cards' gutter={[10,10]}>
            
              {cardsData.map((v, i) => (
                <UserProCard key={i}  title={v.title} company={v.company} 
                description={v.description} comments={v.comments} resolved={v.resolved} issues={v.issues} 
                progress={v.progress} status={v.status} img={v.img}/>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProjectList

