export interface IProduct {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  photo: File;
}

export interface IProductImage {
  _id?: string;
  width: number;
  height: number;
  extendClass: string;
}
