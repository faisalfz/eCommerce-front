"use client";

import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Image from "next/image";

const Nav = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  // console.log("Card Products: ", cartProducts)
  return (
    <>
      <div className="w-full flex justify-between items-center bg-slate-900 text-white px-10 py-4">
        <Link href={"/"}>
          <Image
            width={40}
            height={40}
            alt="Logo"
            src="/shopping-cart.png"
            className="logo text-2xl font-thin"
          />
        </Link>

        <nav className="flex gap-4 text-xl font-light">
          <Link href={"/"}>Home</Link>
          <Link href={"/shop"}>Shop</Link>
          <Link href={"/categories"}>Categories</Link>
          <Link href={"/account"}>Account</Link>
          <Link href={"/cart"} className="flex items-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            {cartProducts.length>0 && (<div className="leading-none text-center min-w-[20px] min-h-[20px] absolute right-[-14px] top-[-6px] bg-orange-500 rounded-full text-xs text-black font-bold border-white flex items-center justify-center">
              <span>{cartProducts.length}</span>
            </div>)}
            
          </Link>
          {/* <Link href={"/cart"}>Cart({cartProducts.length})</Link> */}
        </nav>
      </div>
    </>
  );
};

export default Nav;
