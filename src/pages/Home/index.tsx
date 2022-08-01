import React from "react";
import Pagination from "../../components/Pagination";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const products: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col mx-auto px-5 py-24">
        <div className="flex flex-wrap -m-4">
          {products.map((index) => (
            <ProductCard id={index} key={index} />
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
