import React from 'react';
import { Flex, Progress } from 'antd';
const ProgressCard = () => {
   return (
    <div className='prog-body'>
  <Flex gap="middle" vertical>
   <div style={{display:'flex',gap:"5px", paddingBottom:'10px', color:'#fff'}} >Mon<Progress   percent={20} /> </div> 
    <div style={{display:'flex',gap:"5px", paddingBottom:'10px', color:'#fff'}} >Tues<Progress   percent={60}  /></div>
    <div style={{display:'flex',gap:"5px", paddingBottom:'10px', color:'#fff'}} > wed<Progress   percent={70}  /></div>
    <div style={{display:'flex',gap:"5px", paddingBottom:'10px', color:'#fff'}} >Thu<Progress   percent={100} /></div>
    <div style={{display:'flex',gap:"5px", paddingBottom:'10px', color:'#fff'}} > Fri<Progress   percent={50}  /></div>
    <div style={{display:'flex',gap:"5px", paddingBottom:'10px', color:'#fff'}} >Sat<Progress   percent={50}  /></div>
    <div style={{display:'flex',gap:"5px", paddingBottom:'10px', color:'#fff'}} >Sun<Progress   percent={59}  /></div>
  </Flex>
  </div>
    )
};
export default ProgressCard;