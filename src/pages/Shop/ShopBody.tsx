import React from "react";
import { ShopBodyT } from "../../types";
import Spinner from "../../utils/Spinner";
import "./index.scss";
import Product from "./Product";

const ShopBody: React.FC<ShopBodyT> = ({ data, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="shop__body">
      {data?.data.products.map((product) => (
        <Product
          id={product.id}
          name={product.name}
          price={product.price}
          key={product.id}
          photo={product.photo}
        />
      ))}
    </div>
  );
};

export default ShopBody;
