import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductImage from "../../components/ProductImage";
import { getProduct } from "../../services/apiCall";
import { IProduct } from "../../types";

interface IProductId {
  productId?: string;
}

const ProductDetail = () => {
  const [product, setProduct] = useState<IProduct>();
  const { productId }: IProductId = useParams();

  const init = () => {
    getProduct(productId!).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProduct(data);
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
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <ProductImage
            _id={productId}
            width={400}
            height={400}
            extendClass={
              "lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            }
          />
          {/* <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          /> */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              PRODUCT NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">
              {product?.name}
            </h1>
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              DESCRIPTION
            </h2>
            <p className="leading-relaxed">{product?.description}</p>
            <div className="flex mt-3">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product?.price}
              </span>
              <div className="flex-1 flex flex-row">
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Edit
                </button>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
