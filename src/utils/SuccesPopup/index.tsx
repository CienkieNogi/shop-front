import React from "react";
import "./index.scss";

const SuccesPopup =React.forwardRef((props,ref:any) => {
  return (
    <div className="succes-cont">
      <div ref={ref} className="success">
                <p>You have succesfuly added</p>
                <p>to your cart</p>
            </div>
    </div>
  );
});

export default SuccesPopup;
