import React, { useRef, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/features/Products/productSlice";
import Spinner from "../../utils/Spinner";
import sample_photo from "../../assets/steak_photo.webp";
// import QuantityButton from "./QuantityButton";
import { UnitI } from "../../types";
import { useAddToCartMutation } from "../../redux/features/Cart/cartSlice";
import { AmountButton, Select } from "./QuantityButton";
const ProductPage = () => {
  const { id } = useParams();

  const { data, isError, isLoading, isFetching } = useGetProductByIdQuery(
    id as string
  );
  const [addToCart, { data: addToCartData, isSuccess }] =
    useAddToCartMutation();

  const pricePerUnit = data?.unit === "gram" ? "zł/kg" : "zł/szt.";

  if (isLoading || isFetching) {
    return <Spinner />;
  }
  if (isSuccess) {
    console.log("SUCCESS", addToCartData);
  }
  return (
    <div className="product --padding-hor-4">
      <div className="product__img">
        <img src={sample_photo} alt="steak" />
      </div>
      <div className="product__info">
        <div className="product__title --margin-bottom-4">{data?.name}</div>
        <div className="product__attribute --margin-bottom-2">
          <p className="product__paragraph --margin-bottom-1">Price</p>
          <p className="product__paragraph--text">
            {data?.price} {pricePerUnit}
          </p>
        </div>
        <div className="product__attribute --margin-bottom-2">
          <p className="product__paragraph --margin-bottom-1">Quantity</p>

          {data?.unit === UnitI.gram ? (
            <Select addToCart={addToCart} id={id!} />
          ) : (
            <AmountButton addToCart={addToCart} id={id!} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
