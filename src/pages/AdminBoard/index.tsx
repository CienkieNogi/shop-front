import React, { useState } from "react";
import Category from "./Category";
import "./index.scss";
import ProductBoard from "./ProductBoard";

const cosik = [];

const AdminBoard = () => {
  const [open, setOpen] = useState({
    first: false,
    second: true,
  });
  return (
    <div className="adminboard adminboard--column --center-flex">
            <div className="adminboard__container">

      <div className="adminboard__nav">
        <div
          onClick={() => setOpen({ first: true, second: false })}
          className={`adminboard__nav--item ${
            open.first ? "--nav-active" : ""
          }`}
        >
          Categories
        </div>
        <div
          onClick={() => setOpen({ first: false, second: true })}
          className={`adminboard__nav--item ${
            open.second ? "--nav-active" : ""
          }`}
        >
          Products
        </div>
      </div>
      {open.first && <Category />}
      {open.second && <ProductBoard />}
            </div>
    </div>
  );
};

export default AdminBoard;
