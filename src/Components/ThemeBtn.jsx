import React from 'react'
import { Button } from 'antd'
import { useContext } from 'react'


const ThemeBtn = ({value}) => {
   
  return (
    <Button type='primary' >{value}</Button>
  )
}

export default ThemeBtn
