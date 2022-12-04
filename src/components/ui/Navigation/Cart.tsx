import React from "react";
import { ReactComponent as CartIcon } from "../../../assets/SVG/shopping-cart.svg";
import {CartNav} from "../../../types";

const Cart: React.FC<CartNav> = ({ amountOfItems }) => {
  return (
    <div className="top__user-box--profile --center-flex">
      <CartIcon className="top__user-box--icon" />
      {amountOfItems! > 0 && (
        <div className={`top__user-box--badge${amountOfItems!>10?'--bigger':''}`}>
          <p>{amountOfItems}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
