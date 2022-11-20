import React from "react";
import { SingleOrderI, UnitI } from "../../types";
import { ReactComponent as TrashIcon } from "../../assets/SVG/trash.svg";
import { useRemoveSingleOrderMutation } from "../../redux/features/Cart/cartSlice";

const CartItem: React.FC<{ singleOrder: Partial<SingleOrderI> }> = ({
  singleOrder,
}) => {
  const [removeSingleOrder, { isSuccess }] = useRemoveSingleOrderMutation();

  const handleRemoveSingleOrder = async () => {
    if (!singleOrder.id || !singleOrder.cartId) {
      return;
    }
    await removeSingleOrder({
      id: singleOrder.cartId,
      singleOrderId: singleOrder.id,
    });
  };

  return (
    <div className="cart__item">
      <img
        className="cart__item--photo"
        src={singleOrder.product?.photo}
        alt="costam"
      />
      <p className="cart__item--paragraph">{singleOrder.product?.name}</p>
      <p className="cart__item--paragraph">
        {singleOrder.product?.price}{" "}
        {singleOrder.product?.unit === UnitI.gram ? "zł/kg" : "szt."}
      </p>
      <p className="cart__item--paragraph">
        {singleOrder.amount}{" "}
        {singleOrder.product?.unit === UnitI.gram ? "gram" : "pcs"}
      </p>
      <div className="cart__item--icon" onClick={handleRemoveSingleOrder}>
        <TrashIcon />
      </div>
    </div>
  );
};

export default CartItem;
