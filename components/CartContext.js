"use client";

import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cartProducts');
    if(storedCart)
    setCartProducts(JSON.parse(storedCart));
  }, [])

  useEffect(()=> {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
  },[cartProducts])



  return (
    
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartContext.Provider>
    
  );
};

export default CartContextProvider;
