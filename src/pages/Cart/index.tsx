import { useEffect } from "react";
import { ReactComponent as TrashIcon } from "../../assets/SVG/trash.svg";
import Button from "../../components/ui/Button";
import { UseGetCart } from "../../hooks/useCartHook";
import {
    useCheckoutMutation, useRemoveAllItemsFromCartMutation
} from "../../redux/features/Cart/cartSlice";
import Spinner from "../../utils/Spinner";
import CartItem from "./CartItem";
import "./index.scss";

const Cart = () => {
  const cartResult = UseGetCart();
  const { items, isSuccess, isLoading, cart, orders } = cartResult;
  const [removeAllItemsFromCart] = useRemoveAllItemsFromCartMutation();
  const [checkout, { data, isSuccess: checkoutSuccess }] =
    useCheckoutMutation();

  const cartId = cart?.data.id;
  const redirectUrl = data?.data.url;

  useEffect(() => {
    if (checkoutSuccess) {
      window.location.href = `${redirectUrl}`;
    }
  }, [checkoutSuccess, redirectUrl]);

  const clearCart = async () => {
    if (!cartId) {
      return;
    }
    await removeAllItemsFromCart({ id: cartId });
  };

  const handleCheckout = async (e: any) => {
    e.preventDefault();
    await checkout();
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="cart --center-flex">
      <div className="cart__header --margin-bottom-4">
        <div className="cart__header-title">{`Cart (${items})`}</div>
        <p className="cart__header-paragraph">{`Summary: ${cart?.data?.summary} $`}</p>
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
      {isSuccess && items && items > 0 && (
        <form className="cart__checkout" onSubmit={handleCheckout}>
          <Button title="Payment" />
        </form>
      )}
    </div>
  );
};

export default Cart;
