import React, { useEffect, useState } from "react";
import "./index.scss";
import { useGetSuggestedProductsMutation } from "../../redux/features/Products/productSlice";
import { ProductI, UnitI } from "../../types";
import { useNavigate } from "react-router-dom";

type TProps = {
  categoryId: string | undefined;
  productId: string;
};
const SuggestedProduct: React.FC<TProps> = ({ categoryId, productId }) => {
  const [getSuggestedProducts, { data }] = useGetSuggestedProductsMutation();
  const navigate = useNavigate();
  const [prodId, setProdId] = useState("");
  //array with diffrent products than main product
  let prodArray: ProductI[] = [];
  let finalArr: ProductI[] = [];
  data?.data.filter((el) => {
    if (el.id !== productId) {
      prodArray.push(el);
    }
    return prodArray;
  });

    //We choose only 3 products for suggestions or less
  if (prodArray.length >= 3) {
    for (let i = 0; i < 3; i++) {
      var random_int = Math.round(Math.random() * (prodArray.length - 1));
      finalArr.push(prodArray[random_int]);
      prodArray.splice(random_int, 1);
    }
  } else {
    finalArr = [...prodArray];
  }

  useEffect(() => {
    getSuggestedProducts({ category: categoryId! });
  }, [categoryId, getSuggestedProducts, prodId]);

  const handleClick = (id: string) => {
    setProdId(id);
    navigate(`/shop/product/${id}`);
  };

  return (
    <div className="suggested">
      <p className="suggested--title">You may also like</p>
      <div className="suggested__container">
        {finalArr.map((el) => (
          <div
            onClick={() => handleClick(el.id)}
            key={el.id}
            className="suggested__container--product"
          >
            <img src={el.photo} alt={el.name} />
            <div>
              <p>{el.name}</p>
              <p>
                {el.price} {el.unit === UnitI.gram ? "zł/kg" : "zł/pcs"}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedProduct;
