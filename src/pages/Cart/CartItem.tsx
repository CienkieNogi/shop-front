import React from "react";
import { SingleOrderI, UnitI } from "../../types";
import { ReactComponent as TrashIcon } from "../../assets/SVG/trash.svg";
//DEV ONLY
import samplePhoto from "../../assets/steak_photo.webp";
import samplePhoto2 from "../../assets/steak2_photo.webp";
import samplePhoto3 from "../../assets/lamb_photo.webp";
import { useRemoveSingleOrderMutation } from "../../redux/features/Cart/cartSlice";

const CartItem: React.FC<{ singleOrder: Partial<SingleOrderI> }> = ({
  singleOrder,
}) => {
  const [removeSingleOrder, { isSuccess }] = useRemoveSingleOrderMutation();
  //DEV ONLY
  const photoArr = [samplePhoto, samplePhoto2, samplePhoto3];

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
        src={photoArr[Math.floor(Math.random() * 3)]}
        alt="costam"
      />
      <p className="cart__item--paragraph">{singleOrder.product?.name}</p>
      <p className="cart__item--paragraph">{singleOrder.product?.price}</p>
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
