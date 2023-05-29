"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import ProductList from "@/components/ProductList";

const SingleProduct = ({ params }) => {
  const { setCartProducts } = useContext(CartContext);
  const addToCart = (singleProduct) => {
    setCartProducts((prev) => [...prev, singleProduct._id])
  }

  const id = params.id;
  const [product, setProduct] = useState({});
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const response = await fetch(`/api/products/single/${id}`);
      const data = await response.json();
      setProduct(data);
      console.log("Single Product: ", data);
    };

    const fetchRecentProducts = async () => {
      const response = await fetch('/api/products/recent');
      const data = await response.json()
      setRecentProducts(data);
    };
  
    fetchSingleProduct();
    fetchRecentProducts();
  }, [id]);
  return (
    <>
      <div className="flex gap-10 justify-center items-center my-20 w-full ">
        <div className="w-1/5 bg-white p-4 rounded-md shadow-md">
          <Image
            src={product.image}
            width={400}
            height={400}
            alt="Featured Image"
          />
        </div>
        <div className="w-3/5 bg-white p-4 rounded-md shadow-md flex flex-col gap-6">
          <h2 className="font-bold text-2xl">{product.title}</h2>
          <p>{product.description}</p>
          <div className="flex gap-2 items-center">
          <p className="font-semibold text-xl">${product.price}</p>
          <button
            className=" text-white bg-blue-500 px-3 py-1 rounded-md flex gap-1 w-fit"
            onClick={() => addToCart(product)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            Add to cart
          </button>
          </div>
        </div>
      </div>

      <div className="mx-16 my-10">
      <h2 className="text-3xl text-center my-10 font-bold">New Arrivals</h2>
      <ProductList
          products={recentProducts}
        />
      </div>
    </>
  );
};

export default SingleProduct;
