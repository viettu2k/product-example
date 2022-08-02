import { API } from "./../config";
import { Product } from "./../types/product";

export const getProducts = () => {
  return fetch(`${API}/get-products`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const addProduct = (product: FormData) => {
  return fetch(`${API}/add-product`, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      // Accept: "form-data",
      // "Content-Type": "form-data",
    },
    body: product,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
