import React from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/features/Products/productSlice";
import Spinner from "../../utils/Spinner";
import { UnitI } from "../../types";
import { useAddToCartMutation } from "../../redux/features/Cart/cartSlice";
import { AmountButton, Select } from "./QuantityButton";
import SuggestedProduct from "./SuggestedProduct";

const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetProductByIdQuery(id as string);
  console.log(data?.id);
  const [addToCart] = useAddToCartMutation();
  const pricePerUnit = data?.unit === "gram" ? "zł/kg" : "zł/szt.";
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="product-container">
      <div className="product --padding-hor-4">
        <div className="product__img">
          <img src={data?.photo} alt="steak" />
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
      <SuggestedProduct productId={id!} categoryId={data?.categoryId} />
    </div>
  );
};

export default ProductPage;
