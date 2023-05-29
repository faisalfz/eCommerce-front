'use client'

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductCard = ({ product }) => {
  const {setCartProducts} = useContext(CartContext)

  const addToCart = (singleProduct) => {
    setCartProducts((prev) => [...prev, singleProduct._id])
  }
  return (
        <div className="w-full bg-white rounded-lg shadow-2xl h-fit">
          <Link href={`/shop/${product?._id}`} className="w-full">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className="product-image rounded-t-md"
            />
          </Link>
          <div className="p-2 flex flex-col gap-2 justify-between">
          <div className="flex justify-between items-center">
          <Link href={`/shop/${product?._id}`}><h3 className="text-lg">{product.title}</h3></Link>
          <button onClick={()=> {}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:font-bold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          </button>

          </div>
            <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">${product.price}</h3>
            <button className=" text-white bg-blue-500 px-3 py-1 rounded-md flex gap-1" onClick={()=> addToCart(product) }>
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg> */}
                Add to cart
              </button>
            
            </div>
          </div>
        </div>
  );
};

export default ProductCard;
