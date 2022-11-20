import React, { useEffect } from "react";
import {
  useGetUsersCartQuery,
  useRemoveAllItemsFromCartMutation,
} from "../../redux/features/Cart/cartSlice";
import { ReactComponent as TrashIcon } from "../../assets/SVG/trash.svg";
import Spinner from "../../utils/Spinner";
import CartItem from "./CartItem";
import "./index.scss";
import { UseGetCart } from "../../hooks/useCartHook";

const Cart = () => {
  const cartResult = UseGetCart();
  const { items, isSuccess, isLoading, cart, orders } = cartResult;
  const [removeAllItemsFromCart, { isSuccess: isRemoveAllSuccess }] =
    useRemoveAllItemsFromCartMutation();
  const cartId = cart?.data.id;
  const clearCart = async () => {
    if (!cartId) {
      return;
    }
    await removeAllItemsFromCart({ id: cartId });
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="cart --center-flex">
      <div className="cart__header --margin-bottom-4">
        <div className="cart__header-title">{`Cart (${items})`}</div>
        <p className="cart__header-paragraph">{`Summary: ${cart?.data?.summary}`}</p>
        <div className="cart__header-clear" onClick={clearCart}>
          <TrashIcon />
          Clear Cart
        </div>
      </div>
      <div className="cart__items--container">
        {isSuccess && items && items > 0 ? (
          orders?.map((order) => (
            <CartItem key={order.id} singleOrder={order} />
          ))
        ) : (
          <div className="cart__item --center-flex">
            <p>Cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
