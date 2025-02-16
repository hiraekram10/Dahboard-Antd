import { createContext, useState } from "react";

const CartContext = createContext(null)


const CartProvider =({children})=>{
  const [items,setItems] = useState([])

  return(
<CartContext.Provider value={{items,setItems}}>
   {children}
</CartContext.Provider>
  )
}
export {CartContext,CartProvider}


