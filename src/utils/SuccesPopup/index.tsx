import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import "./index.scss";

const SuccesPopup = React.forwardRef(
  ({ setAddedToCart }: { setAddedToCart: any }, ref: any) => {
    const navigate = useNavigate();
    const handleClosePopup = () => {
      console.log("HEL", setAddedToCart);
      setAddedToCart(false);
    };
    const handleRedirectToCart = () => {
      navigate("/cart");
    };
    return (
      <div className="succes-cont">
        <div ref={ref} className="success">
          <div className="success__check-cont">
            <p className="success__check">&#10004;</p>
            <p>You have succesfuly added product to your cart</p>
          </div>
          <div className="success-btns">
            <button onClick={handleClosePopup} className="success-btns--single">
              <p>&larr;</p>
              <p>Go back</p>
            </button>
            <button
              onClick={handleRedirectToCart}
              className="success-btns--single"
            >
              <p>Go to cart</p>
              <p>&rarr;</p>
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default SuccesPopup;
