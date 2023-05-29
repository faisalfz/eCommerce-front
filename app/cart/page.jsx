"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import CustomerForm from "@/components/CustomerForm";
import Link from "next/link";

const Cart = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const [products, setProducts] = useState([]);

  const addItem = (productId) => {
      setCartProducts((prev) => [...prev, productId])
  }

  const deleteItem = (productId, length) => {

    if(length>1)
    {
      const index = cartProducts.indexOf(productId);
      const deletedItem = cartProducts.splice(index, 1)
      setCartProducts([...cartProducts])
    }

    return;
  }

  const deleteAll = (productId) => {
    const remaningItems = cartProducts.filter((id) => id !== productId)
    setCartProducts([...remaningItems])
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`/api/products/cart`, {
        method: "GET",
      });

      const data = await response.json();
      const selectedProducts = data.filter((item) =>
        cartProducts.includes(item._id)
      );
      setProducts(selectedProducts);
    };

    // const count = {};

    // for (const element of cartProducts) {
    //   if (count[element]) count[element] += 1;
    //   else count[element] = 1;
    // }

    fetchProducts();
  }, [products]);

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find(p => p._id === productId)?.price || 0;
    total += price;
  }

  return (
    <>
      <div className="my-14 flex justify-center gap-8">
        <div className="bg-white w-3/5 max-w-[800px] p-4 rounded-md shadow-md flex flex-col gap-6 h-fit">
          <h2 className="text-xl font-semibold">Order Information</h2>
          {cartProducts.length? (<table className="table-fixed w-auto border-separate">
            <thead>
              <tr className="text-left border-b border-black">
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <>
                  <tr key={product._id}>
                    <td className="flex flex-col items-start gap-2">
                      <Image
                        src={product.image}
                        alt="Cart Image"
                        width={50}
                        height={60}
                        className="rounded-sm"
                      />
                      <h3 className="text-xl text-center">{product.title.charAt(0).toUpperCase() + product.title.toLowerCase().slice(1)}</h3>
                    </td>
                    <td className="">
                      <button className="px-3 py-1 bg-slate-200 rounded-md" 
                      onClick={()=> {
                        const length = cartProducts.filter(id => id === product._id).length;
                        deleteItem(product._id, length)
                        }} >
                        -
                      </button>
                      <span className="my-2"> {cartProducts.filter(id => id === product._id).length} </span>
                      <button className="px-3 py-1 bg-slate-200 rounded-md" onClick={()=> {addItem(product._id)}}>
                        +
                      </button>
                    </td>
                    <td>${(product.price * cartProducts.filter(id => id === product._id).length).toFixed(2)}</td>
                    
                    <td className="text-center text-red-900">
                      <button onClick={() => {deleteAll(product._id)}}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                      </svg>
                      </button>
                    </td>
                  </tr>
                </>
              ))}
              <tr className="text-[18px] font-semibold my-8">
                <td colSpan={2} className="ml-4">Total</td>
                <td>${total.toFixed(2)}</td>
                <td></td>
              </tr>
            </tbody>
          </table>): (
            <>
            <p>Cart is empty. <Link href={'/all-products'} className="font-bold">Shop Now</Link></p>
            </>
            )}
        </div>
        {cartProducts?.length>0 && (<div className="bg-white w-1/5 rounded-md shadow-md p-3 flex flex-col gap-4 h-fit">
          <h2 className="text-xl font-semibold">Customer Information</h2>
          <CustomerForm/>
        </div>)}
        
      </div>
    </>
  );
};

export default Cart;
