import React, { useEffect, useState } from 'react'
import { Row,   Col,Card } from 'antd'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
import ThemeBtn from './ThemeBtn'
import ThemeCard from './ThemeCard'

const Cards = () => {
  const [cards,setCards]= useState([])
useEffect(()=>{
  const dataFetch=()=>{

 
    const data=  fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then((dat)=>{
     const response = dat
    setCards(response)
     
    })
  }
  dataFetch()
},[])



  
  
  return (
    <div>
    <Row>
      <Col span={6}>
      <ThemeCard name={'makebook'} price = {50000}/></Col>
      <Col span={6}>
      <ThemeCard name={'tab'} price = {3000}/></Col>
     
     
      </Row>
      <Row  gutter={4}>
      {cards.map((elem)=>(
<Col>
  <ThemeCard name={elem.title} price={elem.price}/>
  </Col>
      ))}
      
    </Row>
      </div>
  )
}

export default Cards
