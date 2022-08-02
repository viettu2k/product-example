import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import ProductCard from "../../components/ProductCard";
import { getProducts } from "../../services/apiCall";
import { Product } from "../../types/product";

const Home = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

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
        <div className="flex flex-wrap -m-4">
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
        <div className="mx-auto mt-5">
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default Home;
