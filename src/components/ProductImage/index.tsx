import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { API } from "../../config";
import { IProductImage } from "../../types";

const ProductImage = ({ _id, width, height, extendClass }: IProductImage) => {
  const handlerErrorImage = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    (
      e.target as HTMLImageElement
    ).src = `https://dummyimage.com/${width}x${height}`;
  };

  return (
    <LazyLoadImage
      className={`w-[${width}px] h-[${height}px] object-cover object-center ${extendClass}`}
      src={`${API}/photo/${_id}`}
      onError={handlerErrorImage}
    />
  );
};

export default ProductImage;
