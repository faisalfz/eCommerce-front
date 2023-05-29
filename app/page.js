'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import ProductList from "@/components/ProductList";
import { CartContext } from "@/components/CartContext";

const Home = () => {
  const {setCartProducts} = useContext(CartContext);

  const addFeatured = () => {

  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchRecentProducts = async () => {
      const response = await fetch('/api/products/recent');
      const data = await response.json()
      setProducts(data);
    };
  
    fetchRecentProducts();
    
  });
  return (
    <>
      <div className="flex justify-between items-center gap-4 mb-4 px-16 py-20 bg-slate-950">
        <div className="max-w-md flex flex-col gap-4 text-white">
          <h1 className="text-4xl">Citrine Stone</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting
          </p>
          <div className="flex gap-4 items-center">
            <Link href={"/"}>
              <button className="border border-slate-50 text-white bg-transparent px-3 py-1 rounded-md">
                Read more
              </button>
            </Link>
              <button className=" text-white bg-blue-500 px-3 py-1 rounded-md flex gap-1" onClick={() => {addFeatured()}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
                Add to cart
              </button>
          </div>
        </div>

        <Image
          src={"/Citrine.png"}
          alt="Banner Image"
          width={500}
          height={500}
        />
      </div>

      <div className="mx-16 my-10">
      <h2 className="text-3xl text-center my-10 font-bold">New Arrivals</h2>
      <ProductList
          products={products}
        />
      </div>
    </>
  );
};

export default Home;
