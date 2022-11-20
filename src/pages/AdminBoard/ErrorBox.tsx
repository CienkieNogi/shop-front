import React from "react";
import "./index.scss";
const ErrorBox: React.FC<{ msg?: string }> = ({ msg }) => {
  return (
    <div className="adminboard__menu--section">
      <div className="adminboard__menu--error">
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default ErrorBox;
