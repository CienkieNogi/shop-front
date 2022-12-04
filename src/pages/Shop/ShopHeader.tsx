import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import useMediaQuery from "../../hooks/useMediaQuery";
import { ShopHeaderT } from "../../types";
import "./index.scss";

const ShopHeader: React.FC<ShopHeaderT> = ({ count, categories }) => {
  const navigate = useNavigate();
  const selectRef = useRef<HTMLSelectElement>(null);
  const matches = useMediaQuery("(min-width:768px)");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (selectRef.current?.value.length === 0) {
      navigate(`/shop`);
    } else {
      navigate(`/shop/search/${selectRef.current?.value}`);
    }
  };

  return (
    <div className="shop__header">
      <div className="shop__header--left">{`${count ?? 0} products`}</div>
      <form className="shop__header--center" onSubmit={(e) => handleSubmit(e)}>
        {matches && <p>Search by category</p>}
        <select
          defaultValue={""}
          ref={selectRef}
          className="shop__header--select"
        >
          <option value={""}>All</option>
          {categories?.map((el) => (
            <option key={el.id} value={el.id}>
              {el.title}
            </option>
          ))}
        </select>
        <Button title="Search" />
      </form>
      {matches && <div className="shop__header--right">Alphabetically</div>}
    </div>
  );
};

export default ShopHeader;
