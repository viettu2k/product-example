import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DeleteProduct from "../../components/DeleteProduct";
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
            <div className="flex mt-3 justify-between">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product?.price}
              </span>

              <div className="flex items-center -space-x-4 hover:space-x-1">
                <button
                  className="z-20 block p-4 text-teal-500 transition-all bg-blue-100 border-2 border-white rounded-full active:bg-blue-50 hover:scale-110 focus:outline-none focus:ring"
                  type="button"
                  title="Edit Product"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
                <DeleteProduct productId={productId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
