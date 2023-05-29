"use client";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";


const CustomerForm = () => {
  const {cartProducts} = useContext(CartContext)
  console.log('Cart Length: ',cartProducts?.length)
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    postalCode: "",
    address: "",
    country: "",
  });

  const handleCustomer = () => {
    console.log("Handle Customer Called...");
  };

  return (
    <>
      <form onSubmit={handleCustomer}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={customerInfo.name}
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, name: e.target.value })
          }
          required
        />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={customerInfo.email}
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, email: e.target.value })
          }
          required
        />

        <input
          type="phone"
          name="phone"
          id="phone"
          placeholder="Phone"
          value={customerInfo.phone}
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, phone: e.target.value })
          }
          required
        />

        <textarea
          name="address"
          id="address"
          placeholder="Address"
          value={customerInfo.address}
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, address: e.target.value })
          }
          required
        />

        <div className="flex justify-between">
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City"
            value={customerInfo.city}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, city: e.target.value })
            }
            required
            className="w-1/2"
          />

          <input
            type="text"
            name="postalCode"
            id="postalCode"
            placeholder="Postal Code"
            value={customerInfo.postalCode}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, postalCode: e.target.value })
            }
            required
            className="w-1/2"
          />
        </div>

        <input
          type="text"
          name="country"
          id="country"
          placeholder="Country"
          value={customerInfo.country}
          onChange={(e) =>
            setCustomerInfo({ ...customerInfo, country: e.target.value })
          }
          required
        />

        <button
          type="submit"
          className="mt-2 text-white font-[400] bg-black hover:bg-slate-950 rounded-md px-2 py-1 disabled:opacity-40"
          disabled={cartProducts?.length === 0}
        >
          Countinue to payment
        </button>
      </form>
    </>
  );
};

export default CustomerForm;
