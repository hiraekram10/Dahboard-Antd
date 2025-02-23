import React from 'react'
import './Css/letterBox.css'
import { Row,Col ,Flex, Card} from 'antd'
import LSidder from '../Components/LSidder'
import TransactionCard from '../Components/TransactionCard'
import EmailCard from '../Components/EmailCard'


const LetterBox = () => {
  return (
    <Flex vertical gap={10} className='lbox-main'>
    <div className='lbox-head'>
      <h1>Letter Box</h1>
      </div>
    <div className='lbox-body'>
      <Row gutter={[10,5]}>
        <Col xl={7}>
        <LSidder/>
        </Col>
        <Col xl={17}>
        <Card className='card'>
          <EmailCard/>
        </Card>
        </Col>
      </Row>
    </div>
    </Flex>
  )
}

export default LetterBox
