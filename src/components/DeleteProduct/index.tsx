import React, { useEffect, useState } from "react";
import { deleteProduct } from "../../services/apiCall";

interface IProps {
  productId?: string;
  navigate?: any;
  setMessage(message: string): void;
  setIsSuccess(isSuccess: boolean): void;
}

const DeleteProduct = ({
  productId,
  navigate,
  setMessage,
  setIsSuccess,
}: IProps) => {
  const [redirect, setRedirect] = useState(false);

  const removeProduct = () => {
    deleteProduct(productId!).then((data) => {
      if (data.error) {
        setMessage(data.error);
        setIsSuccess(false);
      } else {
        setMessage(data.message + ". You will be redirected to the home page.");
        setIsSuccess(true);
        setTimeout(() => {
          setRedirect(true);
        }, 3000);
      }
    });
  };

  const deleteConfirmed = () => {
    let answer = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (answer) {
      removeProduct();
    }
  };

  useEffect(() => {
    if (redirect) {
      return navigate("/");
    }
  }, [navigate, redirect]);

  return (
    <>
      {!redirect ? (
        <>
          <button
            className="z-30 block p-4 text-red-700 transition-all bg-red-100 border-2 border-white rounded-full hover:scale-110 focus:outline-none focus:ring active:bg-red-50"
            type="button"
            onClick={deleteConfirmed}
            title="Delete Product"
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </>
      ) : null}
    </>
  );
};

export default DeleteProduct;
