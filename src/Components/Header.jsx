import { Col, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { MdOutlineDarkMode } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import React from 'react'
import { Flex ,Row} from 'antd'
import './comp.css'



const CustomHeader = () => {

  return (
    <Row gutter={[10, 16]}>
      <Col className='' xs={24} sm={24} md={24} lg={8} xl={12}> 
      <div className='header-text'>
                  <h4>Welcome Hira <img src="https://admin.pixelstrap.net/riho/assets/images/hand.gif" width={30} style={{ verticalAlign: 'text-bottom' }} alt="" /></h4>
                  <p>Here's what's happening with your store today.</p>
                </div></Col>
      <Col className='headerhide'  xs={24} sm={24} md={8} lg={8} xl={6}>
        <input
          placeholder="Search"
          className='head-inp'
        />
      </Col>
      <Col className='headerhide side-icons'  xs={24} sm={24} md={8} lg={8} xl={6} >
        <div className='dark-icon'>
          <MdOutlineDarkMode  style={{color:'#737476', }}/>
        </div>
        <div className='star-icon'>
          <FaRegStar style={{color:'#737476', }} />
        </div>
        <div className='noti-icon'>
          <IoMdNotifications  style={{color:'#737476', }}/>
        </div>
        <div className='user-icon'>
        <FaRegUser style={{color:'#737476', }} />
        </div>
      </Col>




    </Row>
  )
}

export default CustomHeader
