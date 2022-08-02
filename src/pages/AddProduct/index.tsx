import React, { useState } from "react";
import { addProduct } from "../../services/apiCall";
import "./style.css";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    quantity: 0,
    price: 0,
    error: "",
    success: "",
    fileSize: 0,
    formData: new FormData(),
  });

  const { name, description, quantity, price, error, fileSize, formData } =
    values;

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
    addProduct(formData).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="mx-auto add-product relative min-h-screen flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover items-center">
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-5 text-3xl font-bold text-gray-900">Add Product</h2>
        </div>
        <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Name
            </label>
            <input
              autoFocus
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type="text"
              value={name}
              onChange={handleChange("name")}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Description
            </label>
            <textarea
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              value={description}
              onChange={handleChange("description")}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Quantity
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type="number"
              value={quantity}
              onChange={handleChange("quantity")}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Price
            </label>
            <input
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              type="number"
              value={price}
              onChange={handleChange("price")}
            />
          </div>
          <div className="grid grid-cols-1 space-y-2">
            <label className="text-sm font-bold text-gray-500 tracking-wide">
              Upload photo
            </label>
            <input
              onChange={handleChange("photo")}
              className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              id="file_input"
              type="file"
              accept="image/*"
            />
          </div>

          <div>
            <button
              type="submit"
              className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
