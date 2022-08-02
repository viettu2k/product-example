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
      <div className="container flex flex-col mx-auto px-5 py-24">
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
