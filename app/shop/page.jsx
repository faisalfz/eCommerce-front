'use client'

import ProductList from "@/components/ProductList"
import { useState, useEffect } from "react";

const Shop = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products/GETproducts');
      const data = await response.json();
      setProducts(data);
      console.log("Products: ",products)
    };
    console.log("UseEffect Called...")
    // if (session?.user.id) 
    fetchProducts();
    
  },[products]);

  return (
    <>
      <div className="mx-8 my-10">
      <ProductList
          products={products}
        />
      </div>
    </>
  )
}

export default Shop