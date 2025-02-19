import React from 'react'
import { Button, } from 'antd';
import './btn.css'
const Redbtn = ({title,themeclass,children}) => {
  return (
    <Button className={themeclass} size={'large'}>
    {children}{title}
  </Button>
  )
}

export default Redbtn
