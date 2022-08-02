import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { API } from "../../config";

const ProductImage = ({ _id }: { _id: string }) => {
  const handlerErrorImage = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    (e.target as HTMLImageElement).src = "https://dummyimage.com/420x260";
  };

  return (
    <LazyLoadImage
      className="w-[420px] h-[260px] object-cover object-center"
      src={`${API}/photo/${_id}`}
      onError={handlerErrorImage}
    />
  );
};

export default ProductImage;
