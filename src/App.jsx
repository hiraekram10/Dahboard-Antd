import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppLayout from './Components/Layout'
import Dashboard from './Pages/Dashboard'
import AppRouter from './router'
import  {CartProvider}  from './Context/CartContext'







function App() {




  return (
    <>
  
   <CartProvider>
   <AppRouter/>
   </CartProvider>
   
   
   
    </>
  )
}

export default App
