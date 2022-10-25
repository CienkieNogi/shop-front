import React, {  useRef, useState } from "react";
import Button from "../../../components/ui/Button";
import { ReactComponent as ArrowLeft } from "../../../assets/SVG/arrow-bold-left.svg";
import { ReactComponent as ArrowRight } from "../../../assets/SVG/arrow-bold-right.svg";
import { useGetProductByNameMutation } from "../../../redux/features/Products/productSlice";
import Table from "../../../components/ui/Table";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../utils/Spinner";
const SearchProduct = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState('')
  const [searchProduct, { data, error, isSuccess,isLoading }] =
    useGetProductByNameMutation();


  const navigate = useNavigate();
  
  const takeParameter = 5;
  const handleSearch = async (e: any) => {
    e.preventDefault();
    console.log("AAA", e.target.id);
    if (nameRef?.current) {
      await searchProduct({
        page: e.target.id || 1,
        // name: nameRef.current?.value,
        name
      });
    }
  };

  const handleRedirectToProduct = (id: string) => {
    navigate(`/account/adminboard/product/${id}`);
  };
  if(isLoading){
    return (
      <Spinner/>
    )
  }
  return (
    <div className="adminboard__menu--section-input --margin-bottom-4">
      <div className="adminboard--icon-container --margin-bottom-2">
        <ArrowLeft className="adminboard--icon-container-arrows" />
        <p className="adminboard--paragraph">change parameter</p>
        <ArrowRight className="adminboard--icon-container-arrows" />
      </div>
      <form onSubmit={handleSearch} className="--margin-bottom-4">
        <input placeholder="Search Name" ref={nameRef} onChange={(e)=>setName(e.target.value)}/>
        <Button title="Search" />
      </form>
      {isSuccess && (
        <Table
          result={data?.data.products}
          numberOfPages={data ? data?.data.count / takeParameter : undefined}
          actionOnPageSelect={handleSearch}
          actionOnCellSelect={handleRedirectToProduct}
        />
      )}
    </div>
  );
};

export default SearchProduct;
