import React from "react";
import "./index.scss";

type ButtonProps = {
  title: string;
  actionOnClick?: () => void;
  color?: string;
};
const Button: React.FC<ButtonProps> = ({
  title,
  actionOnClick,
  color = "main",
}) => {
  return (
    <button
      type="submit"
      className="btn"
      data-color={color}
      onClick={actionOnClick ? actionOnClick : () => {}}
    >
      <p>{title}</p>
    </button>
  );
};

export default Button;
