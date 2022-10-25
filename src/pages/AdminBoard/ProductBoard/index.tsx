/* eslint-disable react/style-prop-object */
import React, { useRef, useState } from "react";
import CreateProduct from "./CreateProduct";
import { ReactComponent as ArrowDown } from "../../../assets/SVG/chevron-small-down.svg";
import { ReactComponent as ArrowUp } from "../../../assets/SVG/chevron-small-up.svg";
import SearchProduct from "./SearchProduct";

const ProductBoard: React.FC = () => {
  const [expand, setExpand] = useState({
    search:false,
    create: false,
  });

  return (
    <div className="adminboard__menu">
      <h2 className="adminboard--title --margin-bottom-4">Manage Products</h2>
      <div className="adminboard__menu--section">
        <div
          className={`adminboard__menu--section-nav --margin-bottom-4 ${!expand.search?'--underline':''}`}
          onClick={() => setExpand({ ...expand, search: !expand.search })}
        >
          <p className="adminboard--paragraph">Search Product</p>
          {expand.search ? <ArrowDown /> : <ArrowUp />}
        </div>
        <SearchProduct />
        <div
          className={`adminboard__menu--section-nav --margin-bottom-4 ${!expand.create?'--underline':''}`}
          onClick={() => setExpand({ ...expand, create: !expand.create })}
        >
          <p className="adminboard--paragraph">Create Product</p>
          {expand.create ? <ArrowDown /> : <ArrowUp />}
        </div>
        {expand.create && <CreateProduct />}
      </div>
    </div>
  );
};

export default ProductBoard;
