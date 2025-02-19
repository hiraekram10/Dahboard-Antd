import React, { useState, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  AppstoreOutlined,
  ProfileOutlined,
  ProjectOutlined,
  MailOutlined ,
  CaretRightOutlined 
} from '@ant-design/icons';
import logo from '../assets/logo.png'
import './comp.css'
import { Button, Layout, Menu, theme, Flex, } from 'antd';
import CustomHeader from './Header';
import { useNavigate } from 'react-router-dom';
import CustomDrawer from './CustomDrawer';
import ProjectTree from './PorjectTree';


const { Header, Sider, Content, Footer } = Layout;


const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate()
  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 1002);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
  };

  return (
    <Layout style={{ height: 'auto', backgroundColor:'#1A1C23'}}>
      <Sider style={siderStyle} trigger={null} className='sider' collapsedWidth={80} collapsed={collapsed} collapsible width={280} height={'auto'} >
        {!collapsed && (
          <div className="demo-logo-vertical">
            <img src={logo} alt="Logo" />
          </div>
        )}

        <Menu
          theme='dark'
          style={{ backgroundColor: '#22242B' }}
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '/',
              icon: <UserOutlined />,
              label: 'Home',
            },
            {
              key: 'projects-menu',
              icon: <ProjectOutlined/>,
              label: 'Projects',
              children: [
                {
                  key: '/projects/list',
                  label: 'Project List',
                  icon:<CaretRightOutlined />
                },
                {
                  key: '/projects/create',
                  label: 'Project Create',
                  icon:<CaretRightOutlined />
                },
              ],
            },
            {
              key: '/letterbox',
              icon: <MailOutlined />,
              label: 'Letter Box',
            },
            {
              key: '/dashboard',
              icon: <VideoCameraOutlined />,
              label: 'Dashboard',
            },
            {
              key: '/about',
              icon: <UploadOutlined />,
              label: 'About',
            },
            {
              key: '/profile',
              icon: <ProfileOutlined />,
              label: 'Profile',
            },

          ]}
          onClick={(data) => navigate(data.key)}
        />

      </Sider>
      <Layout style={{ backgroundColor: "#1A1C23" }}>
        <Header
          className='header-start'
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            padding: 0,
            // borderBottom:'1px solid grey'

            // width: '100%'
          }}
        >
          <div>

            <Flex style={{
              backgroundColor: "#1A1C23",


            }}
              className='header-flex'

            // justify={'flex-center'}
            // align={'end'}

            >
              <Button className='menuicon'
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />

              <div style={{

                width: '100%',
                // backgroundColor:'red',
                display: 'flex',
                alignItems: "end",
                justifyContent: "center",


                // backgroundColor:"red"




              }}>
                <CustomHeader />
                {/* <CustomDrawer/> */}
              </div>
            </Flex>

          </div>

        </Header>
        <Content
          style={{

            margin: '10px 0px',
            padding: 20,
            minHeight: 'auto',
            background: '#1A1C23',
            backgroundColor: '#1A1C23',

          }}
        >

          {children}

        </Content>
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor: "#22242B",
            color: "#fff"
          }}
        >
          Riho 2024© Created by Hira Ekram
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AppLayout;