import React from 'react'
import './Css/letterBox.css'
import { Row,Col ,Flex, Card} from 'antd'
import LSidder from '../Components/LSidder'
import {
DeleteOutlined,
DoubleLeftOutlined,
RedoOutlined  
} from '@ant-design/icons';
import EmailCard from '../Components/EmailCard'


const LetterBox = () => {
  return (
    <Flex vertical gap={10} className='lbox-main'>
    <div className='lbox-head'>
      <h1>Letter Box</h1>
      </div>
    <div className='lbox-body'>
      <Row gutter={[10,5]}>
        <Col xs={24} sm={24} md={9} lg={7} xl={7}>
        <LSidder/>
        </Col>
        <Col xs={24} sm={24} md={15} lg={17} xl={17}>
        <Card className='card'>
          <div className='mail-div'>
      <span>
            <h4 style={{borderBottom:'4px solid #006666'}}>Primary</h4>
            {/* <h4>Social</h4>
            <h4>Promotion</h4> */}
            </span>
            <span>
            <DeleteOutlined />
            <DoubleLeftOutlined />
            <RedoOutlined />
            </span>
            </div>
          <EmailCard/>
        </Card>
        </Col>
      </Row>
    </div>
    </Flex>
  )
}

export default LetterBox
