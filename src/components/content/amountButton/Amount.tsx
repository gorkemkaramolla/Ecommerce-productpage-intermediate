import React from "react";
import "./Amount.scss";

type Props = {};

const Amount = (props: Props) => {
  return (
    <div>
      <div className="amount-buttons">
        <button className="increase-button">+</button>
        <button disabled className="item">
          0
        </button>
        <button className="decrease-button">-</button>
        <button className="add-card">Add to cart </button>
      </div>
    </div>
  );
};

export default Amount;
