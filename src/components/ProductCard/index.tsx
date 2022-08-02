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
        <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">
          {name}
        </h3>
        <p className="mt-1">{description.substring(0, 96).concat("...")}</p>
      </div>
    </div>
  );
};

export default ProductCard;
