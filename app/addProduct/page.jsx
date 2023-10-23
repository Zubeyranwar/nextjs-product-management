"use client"

import { useRouter } from "next/navigation";
import React from "react";

import { useState } from "react";
import Link from "next/link";
const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity , setQuantity ] = useState(0);

  const router = useRouter();

  const submitForm = async (e) => {
    e.preventDefault();

    if (!productName || !description || !price || !quantity ) {
      alert("Please provide required information");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ productName, description, price, quantity }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-wrap mt-3 sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
        <div className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <form onSubmit={submitForm}>
          <div className="">
           
            <label htmlFor="Name" className="block text-sm font-medium mb-2 dark:text-white">
              Name
            </label>
            <input
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              name="name"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
            />
          </div>
          <div className="">
            <label htmlFor="description" className="block text-sm font-medium mb-2 dark:text-white">
              Description
            </label>
            <input
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div className="">
            <label htmlFor="price" className="block text-sm font-medium mb-2 dark:text-white">
              Price
            </label>
            <input
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
          <div className="">
            <label htmlFor="quantity" className="block text-sm font-medium mb-2 dark:text-white">
              Quantity
            </label>
            <input
              type="text"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              name="phone"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />
          </div>
          <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
            Submit
          </button>
          <Link type="submit" className="py-3 px-4 ml-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href='/'>
            Cancel
          </Link>
        </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
