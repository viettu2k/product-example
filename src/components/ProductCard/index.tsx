import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../types";
import ProductImage from "../ProductImage";

const ProductCard = ({ product }: { product: IProduct }) => {
  const { _id, name, price, description } = product;

  return (
    <li className="col-span-full sm:col-span-2 lg:col-span-1 group relative">
      <Link to={`/product/${_id}`} className="w-full h-full flex flex-col">
        <div className="relative">
          <div className="aspect-w-1 aspect-h-1 shadow-sm rounded-lg overflow-hidden group-hover:shadow-md">
            <ProductImage width={420} height={260} _id={_id} extendClass="" />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-800 via-transparent opacity-70 group-hover:from-transparent" />
          </div>
          <span className="z-20 absolute bottom-3 right-5 px-0.5 rounded-md text-2xl text-white font-semibold antialiased group-hover:text-gray-700 group-hover:bg-white group-hover:bg-opacity-70">{`$${price}`}</span>
        </div>
        <div className="flex-grow mt-2 px-3 h-full">
          <div className="relative flex flex-col">
            <h3 className="text-base text-gray-800 font-semibold">{name}</h3>
            <p className="mt-1 text-sm text-gray-500 font-medium">
              {description.length < 96
                ? description
                : description.substring(0, 96).concat("...")}
            </p>
            <button className="mt-4 py-1.5 w-full rounded-md bg-gray-200 text-sm text-gray-600 font-semibold tracking-wide hover:bg-gray-300 hover:text-gray-800">
              View details
            </button>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
