import React from "react";
import { ProductI, ServerResponseWithCount } from "../../types";
import Spinner from "../../utils/Spinner";
import "./index.scss";
import Product from "./Product";
//DEV ONLY
import samplePhoto from "../../assets/steak_photo.webp";
import samplePhoto2 from "../../assets/steak2_photo.webp";
import samplePhoto3 from "../../assets/lamb_photo.webp";

type Props = {
  data: ServerResponseWithCount<ProductI[]> | undefined;
  isLoading: boolean;
};
const ShopBody: React.FC<Props> = ({ data, isLoading }) => {

  const photoArr = [samplePhoto, samplePhoto2, samplePhoto3];

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
          photo={photoArr[Math.floor(Math.random() * 3)]}
        />
      ))}
    </div>
  );
};

export default ShopBody;
