import React from 'react'
import '../Components/content.css'
import { Flex, Row, Col, Button } from 'antd';
import DemoLine from '../Components/PlotChart';
import { CiMenuKebab } from "react-icons/ci";
import ProductsCard from '../Components/productsCard';
import UsersCard from '../Components/UsersCard';
import TransactionCard from '../Components/TransactionCard';
import ProgressCard from '../Components/ProgressCard';
import {RightOutlined } from '@ant-design/icons'
import FixedSideCard from '../Components/FixedSideCard';
import '../Components/utls.css'
import '../Components/responsive.css'

const Home = () => {
  return (
    <div className='home-container'>
      <FixedSideCard />
      <Flex className='home-sec-one'>
        <div>
          <h1 style={{ padding: '10px', color: '#fff' }}> Flow Charts</h1>
        </div>
      </Flex>
      <Row gutter={[12, 16]} className='home-sec-two'>

        <Col span={15} xs={24} sm={24} md={12} lg={15} xl={15} className='hom-col-one'>
          <div >
            <div className='first-card'>
              <span>
                <h2>Revenue Growth</h2>
                <p> &#9679;Marketing Sale</p>
              </span>
              <DemoLine />
            </div>
          </div></Col>
        <Col span={9} xs={24} sm={24} md={12} lg={9} xl={9} className='hom-col-two'>
          <div className='two-card'>
            <div className='onee'>
              <h1>Boost up your care...</h1>
              <p>By upgrading your carer</p>

              <Button ghost >
                Outlined
              </Button>
            </div>
            <div className='twoo'>
              <div className='twoo-one'>
                <div><span className='head'>Delivaries</span>
                  <span className='head'><CiMenuKebab /></span>
                </div>
                <div>
                  <span className='text'>
                    Particular</span>
                  <span className='text'> Total Amont</span>
                </div>

              </div>
              <div className='twoo-two'>
                <div>
                  <span className='text1'>
                    OnTime Delivery</span>
                  <span className='text1'> $45,452.23</span>
                </div>
                <div>
                  <span className='text1'>
                    Delayed Delivery</span>
                  <span className='text1'> $45,452.23</span>
                </div>
              </div>
            </div>
          </div></Col>





        <Col span={12} xs={24} sm={24} md={12} lg={12} xl={12} className='hom-col-3'>
          <ProductsCard />
        </Col>



        <Col xs={24} sm={24} md={12} lg={12} xl={12} className='hom-col-4'>

          <UsersCard />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className='hom-col-5'>

          <TransactionCard />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className='hom-col-6'>
          <div className='prog-main'>
            <div className='prog-head'>
              <h1> User Visits by Day</h1>
            </div>
            <ProgressCard />
            <div className='prog-footer'>
              <div className='prog-foot-right'>
                <h5>Most Visited Day</h5>
                <p>Total 59.6k visits on Sunday</p>
              </div>
              <div className='prog-foot-left'>
              <RightOutlined />
                

              </div>
            </div>
          </div>
        </Col>



      </Row>



    </div>
  )
}

export default Home
