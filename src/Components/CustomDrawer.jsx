import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
const CustomDrawer = () => {
    const cart = useContext(CartContext)
    const total = cart.items.reduce((a,b)=> a +b.price,0)

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
     CART
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
     <ul>
        {cart && cart.items.map((item,i)=>(
    <li key={i}>{item.name}  <span>{item.price}</span> </li>
        ))}
     </ul>
     <p>total {total}</p>
      </Drawer>
    </>
  );
};
export default CustomDrawer;