import React, { useRef } from "react";
import Button from "../../components/ui/Button";

type Props = {
  id: string;
  addToCart?: any;
};

export const AmountButton: React.FC<Props> = ({ addToCart, id }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const add = async (e: any) => {
    e.preventDefault();
    await addToCart({ id, amount: Number(inputRef.current?.value) });
  };
  return (
    <form className="quantity-button" onSubmit={add}>
      <div className="quantity-button-input --margin-bottom-2">
        <input defaultValue={1} ref={inputRef} type="text" />
      </div>
      <div className="quantity-button-select">
        <Button title="Add to cart" />
      </div>
    </form>
  );
};

export const Select: React.FC<Props> = ({ addToCart, id }) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const add = async (e: any) => {
    e.preventDefault();
    await addToCart({
      id,
      amount: Number(selectRef.current?.value),
      multiplier: Number(inputRef.current?.value),
    });
  };
  return (
    <form className="quantity-button" onSubmit={add}>
      <div className="quantity-button-input --margin-bottom-2">
        <select ref={selectRef}>
          <option value={200}>200g</option>
          <option value={400}>400g</option>
          <option value={500}>500g</option>
        </select>
        <input defaultValue={1} type="number" ref={inputRef} />
      </div>
      <div className="quantity-button-select">
        {/* <button>add to cart</button> */}
        <Button title="Add to cart" />
      </div>
    </form>
  );
};
