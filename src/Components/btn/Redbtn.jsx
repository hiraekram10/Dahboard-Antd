import React from 'react'
import { Button, } from 'antd';
import './btn.css'
const Redbtn = ({title,themeclass}) => {
  return (
    <Button className={themeclass} size={'large'}>
    {title}
  </Button>
  )
}

export default Redbtn
