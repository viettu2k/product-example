import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import ProductCard from "../../components/ProductCard";
import { getProducts } from "../../services/apiCall";
import { IProduct } from "../../types";

const Home = () => {
  const [products, setProducts] = useState<Array<IProduct>>([]);

  const init = () => {
    getProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(
    () => {
      init();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col mx-auto mt-5 mb-24">
        <div className="w-full">
          <form className="flex mb-5 w-1/2 mx-auto">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-teal-400 block w-full pl-10 p-2.5  dark:bg-gray-700"
                placeholder="Search"
                autoFocus
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-teal-700 rounded-lg border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </form>
        </div>
        {!products.length ? (
          <h2 className="text-4xl font-bold leading-none text-gray-400 select-none lg:text-6xl text-center">
            There are no products available
          </h2>
        ) : (
          <>
            <ul className="grid grid-cols-4 gap-10">
              {products.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </ul>
            <div className="mx-auto mt-5">
              <Pagination />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
