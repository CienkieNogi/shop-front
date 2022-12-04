import React from "react";
import { ProductI, UnitI } from "../../../types";
import "./index.scss";
type Props = {
  result: ProductI[] | undefined;
  numberOfPages: number | undefined;
  actionOnPageSelect?: (e: any) => Promise<void>;
  actionOnCellSelect?: any;
};

const Table: React.FC<Props> = ({
  result,
  numberOfPages = 1,
  actionOnPageSelect,
  actionOnCellSelect,
}) => {
  //@ts-ignore
  const newArray = Array(Math.ceil(numberOfPages)).fill();
  console.log({ newArray });
  return (
    <div className="table">
      <div className="table__head --center-flex">
        <div className="table__row--attribute">Nazwa</div>
        <div className="table__row--attribute">Plu</div>
        <div className="table__row--attribute">Price</div>
      </div>
      <div className="table__container">
        {result &&
          result.map((el) => (
            <div
              key={el.id}
              className="table__row"
              onClick={
                actionOnCellSelect ? () => actionOnCellSelect(el.id) : () => {}
              }
            >
              <div className="table__row--attribute">{el.name}</div>
              <div className="table__row--attribute">{el.plu}</div>
              <div className="table__row--attribute">
                {el.price} {el.unit === UnitI.gram ? "$/kg" : "$/szt"}
              </div>
            </div>
          ))}
      </div>
      <div className="table__pagination">
        {newArray.map((el, index) => (
          <div
            onClick={actionOnPageSelect ? actionOnPageSelect : () => {}}
            key={index}
            id={(index + 1).toString()}
            className="table__pagination--page"
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
