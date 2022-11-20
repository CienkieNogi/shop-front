import React from "react";
import { ProductI, ServerResponseWithCount } from "../../types";
import Spinner from "../../utils/Spinner";
import "./index.scss";
import Product from "./Product";

type Props = {
  data: ServerResponseWithCount<ProductI[]> | undefined;
  isLoading: boolean;
};
const ShopBody: React.FC<Props> = ({ data, isLoading }) => {

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
          photo={ product.photo}
        />
      ))}
    </div>
  );
};

export default ShopBody;
