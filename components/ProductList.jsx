import Link from "next/link";
import React from "react";
import RemoveBtn from "./removeBtn";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

export default async function ProductList() {
  const { products } = await getProducts();

  return (
    <>
      <section className="max-w-[87rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="container mt-5">
          <Link className="py-3 px-4 ml-3 mb-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm" href="/addProduct">
            Add New Product
          </Link>
          {products.length !== 0 ? (
            <div class="flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
              <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Availability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {products?.map((item) => {
                  return (
                    <>
                      <tr key={item._id} className="">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{item.productName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item.description}</td>
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{item.price}</td>
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">{`${item.quantity > 0 ? 'In stock': 'Out of stock'} `}</td>
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          <Link
                            className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                            href={`/editProduct/${item._id}`} 
                          >
                            Edit
                          </Link>
                          <RemoveBtn id={item._id} />
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            </div></div></div></div>
          ) : (
            <p>No Product added Yet</p>
          )}
        </div>
      </section>
    </>
  );
}
