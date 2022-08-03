import React, { useState } from "react";
import { editProduct } from "../../services/apiCall";
import { IProduct } from "../../types";

const EditProduct = ({
  setOpenEdit,
  product,
}: {
  setOpenEdit(value: boolean): void;
  product: IProduct;
}) => {
  const [values, setValues] = useState({
    productId: product._id,
    name: product.name,
    description: product.description,
    quantity: product.quantity,
    price: product.price,
    error: "",
    success: "",
    fileSize: 0,
    formData: new FormData(),
  });
  const { productId, formData, name, price, description, quantity } = values;

  const handleChange = (valueName: string) => (event: any) => {
    const value =
      valueName === "photo" ? event.target.files[0] : event.target.value;
    let imageSize = valueName === "photo" ? event.target.files[0].size : 0;
    formData.set(valueName, value);
    setValues({
      ...values,
      [valueName]: value,
      fileSize: imageSize,
      error: "",
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    editProduct(productId, formData).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="bg-gray-500 bg-opacity-90 overflow-x-hidden flex overflow-y-auto fixed h-modal md:h-full md:inset-0 z-40 justify-center items-center">
      <div className="relative w-full max-w-md px-4 h-full md:h-auto z-50">
        <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
          <div className="flex justify-end p-2">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={() => setOpenEdit(false)}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <form
            className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
            onSubmit={handleSubmit}
          >
            <h3 className="text-lg font-bold text-gray-900 ">Edit Product</h3>
            <div>
              <label className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
                required
                autoFocus
                value={name}
                onChange={handleChange("name")}
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300">
                Description
              </label>
              <textarea
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
                required
                value={description}
                onChange={handleChange("description")}
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300">
                Price
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
                min={0}
                required
                value={price}
                onChange={handleChange("price")}
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-900 block mb-2 dark:text-gray-300">
                Quantity
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
                min={0}
                required
                value={quantity}
                onChange={handleChange("quantity")}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">
                Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                type="file"
                onChange={handleChange("photo")}
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
