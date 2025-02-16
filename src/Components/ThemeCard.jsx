import React from 'react'
import { Row,   Col,Card } from 'antd'
import ThemeBtn from './ThemeBtn'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const ThemeCard = ({name,price}) => {
 const cart = useContext(CartContext)
     console.log(cart);
    
     
  return (
    <Card
    title="Card title"
    bordered={false}
    style={{
      width: 300,
    }}
  >
    <p>{name}</p>
    <p>{price}</p>
    <button onClick={()=>(
        cart.setItems([...cart.items,{name:name,price:price}])
    )}>click</button>
    
   
  </Card>
  )
}

export default ThemeCard
