import React, { useState } from 'react';
import {
 
  InboxOutlined ,
  PieChartOutlined,
  PlusOutlined,
  SendOutlined,
  StarOutlined,
  WechatWorkOutlined ,
  DeleteOutlined,
  FormOutlined,
  StrikethroughOutlined 
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import '../Pages/Css/letterBox.css'
import Redbtn from './btn/Redbtn'
import LetterModal from './LetterModal';

const items = [
  {
    key: '1',
    icon: <InboxOutlined />,
    label: 'Inbox',
  },
  {
    key: '2',
    icon: <SendOutlined />,
    label: 'Sent',
  },
  {
    key: '3',
    icon: <StarOutlined />,
    label: 'Starred ',
  },
  {
    key: '4',
    icon: <WechatWorkOutlined />,
    label: 'Draft ',
  },
  {
    key: '5',
    icon: <DeleteOutlined />,
    label: 'Trash',
  },
  {
    key: '6',
    icon: <FormOutlined />,
    label: 'Work',
  },
  {
    key: '7',
    icon: <StrikethroughOutlined />,
    label: 'Support',
  },
  
 
];
const LSidder = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      style={{
        // width: 256,
      }}
      className='lsider'
    >
      {/* <Button
        // type="primary"
        onClick={toggleCollapsed}
        
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined  /> : <MenuFoldOutlined />}
      </Button> */}
      <div style={{textAlign:'center',margin:'10px'}}><LetterModal title={'Compose Email'}><PlusOutlined /></LetterModal> </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        className='lmen'
        inlineCollapsed={collapsed}
        theme="transparent"
       
        items={items}
     />

    
    </div>
  );
};
export default LSidder;