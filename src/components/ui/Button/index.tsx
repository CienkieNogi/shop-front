import React from "react";
import "./index.scss";

type ButtonProps={
  title:string,
  actionOnClick?:()=>void
}
const Button: React.FC<ButtonProps> = ({ title,actionOnClick }) => {
  return (
    <button type="submit" className="btn" onClick={actionOnClick?actionOnClick:()=>{}}>
      <p>{title}</p>
    </button>
  );
};

export default Button;
