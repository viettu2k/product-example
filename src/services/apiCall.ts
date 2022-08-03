import { API } from "./../config";

export const getProducts = () => {
  return fetch(`${API}/get-products`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
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
    },
    body: product,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getProduct = (productId: string) => {
  return fetch(`${API}/get-product/${productId}`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteProduct = (productId: string) => {
  return fetch(`${API}/delete-product/${productId}`, {
    method: "DELETE",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const editProduct = (productId: string, product: FormData) => {
  return fetch(`${API}/edit-product/${productId}`, {
    method: "PUT",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: product,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
