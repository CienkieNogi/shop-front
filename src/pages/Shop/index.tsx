import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../redux/features/Category/categorySlice";
import { useGetProductsQuery } from "../../redux/features/Products/productSlice";
import "./index.scss";
import ShopBody from "./ShopBody";
import ShopHeader from "./ShopHeader";

const Shop = () => {
  const param = useParams();
  const { data, isSuccess, isLoading } = useGetProductsQuery(
    //check if we have any params, if not then show all products
    Object.keys(param).length ? (param.categoryId as string) : ""
  );
  const [select, setSelect] = useState('')
  
  const {data:categories}=useGetAllCategoriesQuery()
  return (
    <div className="shop --padding-hor-4">
      <ShopHeader count={data?.data.count} categories={categories}/>
      <ShopBody data={data} isLoading={isLoading} />
    </div>
  );
};

export default Shop;
