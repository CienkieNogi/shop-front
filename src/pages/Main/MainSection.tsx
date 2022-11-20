import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../redux/features/Category/categorySlice";
import { CategoryI } from "../../types";
import "./index.scss";
type TProps = {
  mainTitle: string;
  sectionClassNumber: string;
  category: string;
};
const MainSection: React.FC<TProps> = ({
  mainTitle,
  sectionClassNumber,
  category,
}) => {
  const navigate= useNavigate()
  const { data, isSuccess } = useGetAllCategoriesQuery();
  let categoryResult:CategoryI|undefined;
  if (isSuccess) {
    categoryResult = data?.find((el) => el.title === category);
  }
  
  const handleNavigate=()=>{
    navigate(`/shop/search/${categoryResult?.id}`)
    // console.log('Category',categoryResult?.title);
  }
  return (
    <div className={`collection__item ${sectionClassNumber}`} onClick={handleNavigate}>
      <div className="collection__item--maintitle">
        <p>{mainTitle}</p>
      </div>
      <div className="collection__item--section">
        <p>Shop</p>
      </div>
    </div>
  );
};

export default MainSection;
