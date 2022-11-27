import React, { LegacyRef, useRef, useState } from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../redux/features/Products/productSlice";
import Spinner from "../../utils/Spinner";
import { UnitI } from "../../types";
import { useAddToCartMutation } from "../../redux/features/Cart/cartSlice";
import { AmountButton, Select } from "./QuantityButton";
import SuggestedProduct from "./SuggestedProduct";
import SuccesPopup from "../../utils/SuccesPopup";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const ProductPage = () => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetProductByIdQuery(id as string);
  const [addToCart,{isLoading:addProductLoading}] = useAddToCartMutation();
// const ref=useRef<any>()
    const ref= React.createRef()
useOnClickOutside(ref,()=>setAddedToCart(false))

  const pricePerUnit = data?.unit === "gram" ? "zł/kg" : "zł/szt.";
 
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="product-container product__anchor">
                        {addedToCart && (
                <div >

                <SuccesPopup ref={ref}/>
                </div>
            )}
      <div className="product --padding-hor-4 ">
        <div className="product__img ">
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
          <div className="product__attribute --margin-bottom-2 ">
            <p className="product__paragraph --margin-bottom-1">Quantity</p>
            {data?.unit === UnitI.gram ? (

              <Select
                setAddedToCart={setAddedToCart}
                addToCart={addToCart}
                id={id!}
              />
            ) : (
              <AmountButton
                setAddedToCart={setAddedToCart}
                addToCart={addToCart}
                id={id!}
              />
            )}
            <div className="product__info--description">
              <p>Description</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                voluptatum totam sed, aliquam cum laudantium. Labore quia
                consequuntur excepturi? Neque!
              </p>
            </div>
          </div>
        </div>
      </div>
      <SuggestedProduct productId={id!} categoryId={data?.categoryId} />
    </div>
  );
};

export default ProductPage;
