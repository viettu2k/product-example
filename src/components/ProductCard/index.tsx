import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types/product";
import ProductImage from "../ProductImage";

const ProductCard = ({ product }: { product: Product }) => {
  const { _id, name, price, quantity, description } = product;

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link
        to={`/product/${_id}`}
        className="block relative h-48 rounded overflow-hidden"
      >
        <ProductImage _id={_id} />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          CATEGORY
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          The Catalyzer
        </h2>
        <p className="mt-1">$16.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
