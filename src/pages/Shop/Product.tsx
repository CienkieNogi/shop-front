import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const Product: React.FC<{
  id: string;
  name: string;
  price: number;
  photo: any;
}> = ({ id, name, price, photo }) => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/shop/product/${id}`);
  };
  return (
    <div className="shop__body--product" onClick={redirect}>
      <div className="shop__body--product-img --margin-bottom-2">
        <img src={photo} alt="" />
      </div>
      <div className="shop__body--product-content">
        <p className="shop__body--product-name --margin-bottom-1">{name}</p>
        <div className="shop__body--product-price">
          <p className="part1">from </p>
          <p className="part2">$ {price} </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
