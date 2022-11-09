import React from "react";
import { ReactComponent as CartIcon } from "../../../assets/SVG/shopping-cart.svg";

type Props={
    amountOfItems?:number;

}
const Cart:React.FC<Props> = ({amountOfItems}) => {
  return (
    <div className="top__user-box--profile --center-flex">
      <CartIcon className="top__user-box--icon" />
      { amountOfItems!>0 && (
      <div className="top__user-box--badge">
        <p>{amountOfItems}</p>
      </div>
      )}
    </div>
  );
};

export default Cart;
