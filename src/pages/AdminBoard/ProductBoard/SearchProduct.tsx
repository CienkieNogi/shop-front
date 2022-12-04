import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../../assets/SVG/arrow-bold-left.svg";
import { ReactComponent as ArrowRight } from "../../../assets/SVG/arrow-bold-right.svg";
import Button from "../../../components/ui/Button";
import Table from "../../../components/ui/Table";
import { useGetAllCategoriesQuery } from "../../../redux/features/Category/categorySlice";
import {
    useGetProductByCategoryMutation,
    useGetProductByNameMutation
} from "../../../redux/features/Products/productSlice";
import Spinner from "../../../utils/Spinner";

const SearchProduct = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const [name, setName] = useState("");
  const [searchBy, setSearchBy] = useState(0);

  const [searchProductByName, { data, error, isSuccess, isLoading }] =
    useGetProductByNameMutation();
  const { data: categoriesData, isSuccess: categoriesLoaded } =
    useGetAllCategoriesQuery();
  const [
    searchProductByCategory,
    { data: productData, isSuccess: isByCategorySuccess },
  ] = useGetProductByCategoryMutation();

  const navigate = useNavigate();

  const takeParameter = 5;

  const handleSearchByName = async (e: any) => {
    e.preventDefault();
    if (nameRef?.current) {
      await searchProductByName({
        page: e.target.id || 1,
        name,
      });
    }
  };

  const handleSearchByCategory = async (e: any) => {
    e.preventDefault();
    if (selectRef?.current) {
      await searchProductByCategory({
        category: selectRef.current.value,
        page: e.target.id || 1,
      });
    }
  };

  const handleChangeParameterDecrease = () => {
    setSearchBy((prevState) => (prevState - 1) % 2);
  };

  const handleChangeParameterIncrease = () => {
    setSearchBy((prevState) => (prevState + 1) % 2);
  };

  const handleRedirectToProduct = (id: string) => {
    navigate(`/account/adminboard/product/${id}`);
  };
  const toggledByName=Math.abs(searchBy)===0
  const toggledByCategory=Math.abs(searchBy)===1

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="adminboard__menu--section-input --margin-bottom-4">
      <div className="adminboard--icon-container --margin-bottom-2">
        <ArrowLeft
          className="adminboard--icon-container-arrows"
          onClick={handleChangeParameterDecrease}
        />
        <p className="adminboard--paragraph">change parameter</p>
        <ArrowRight
          className="adminboard--icon-container-arrows"
          onClick={handleChangeParameterIncrease}
        />
      </div>
      {toggledByName && (
        <form onSubmit={handleSearchByName} className="--margin-bottom-4">
          <input
            placeholder="Search Name"
            ref={nameRef}
            onChange={(e) => setName(e.target.value)}
          />
          <Button title="Search" />
        </form>
      )}
      {toggledByCategory && (
        <form onSubmit={handleSearchByCategory} className="--margin-bottom-4">
          {categoriesLoaded && (
            <select ref={selectRef} className="product__select">
              {categoriesData.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.title}
                </option>
              ))}
            </select>
          )}
          <Button title="Search" />
        </form>
      )}
      {isSuccess&& toggledByName && (
        <Table
          result={data?.data.products}
          numberOfPages={data ? data?.data.count / takeParameter : undefined}
          actionOnPageSelect={handleSearchByName}
          actionOnCellSelect={handleRedirectToProduct}
        />
      )}
      {isByCategorySuccess && toggledByCategory && (
        <Table
          result={productData?.data.products}
          numberOfPages={productData ? productData?.data.count / takeParameter : undefined}
          actionOnPageSelect={handleSearchByCategory}
          actionOnCellSelect={handleRedirectToProduct}
        />
      )}
    </div>
  );
};

export default SearchProduct;
