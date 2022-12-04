import { useParams } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../redux/features/Category/categorySlice";
import { useGetProductsQuery } from "../../redux/features/Products/productSlice";
import Footer from "../Main/Footer";
import "./index.scss";
import ShopBody from "./ShopBody";
import ShopHeader from "./ShopHeader";

const Shop = () => {
  const param = useParams();
  const { data, isLoading } = useGetProductsQuery(
    //check if we have any params, if not then show all products
    Object.keys(param).length ? (param.categoryId as string) : ""
  );
  
  const {data:categories}=useGetAllCategoriesQuery()
  return (
    <div className="shop ">
      <ShopHeader count={data?.data.count} categories={categories}/>
      <ShopBody data={data} isLoading={isLoading} />
            <Footer/>
    </div>
  );
};

export default Shop;
