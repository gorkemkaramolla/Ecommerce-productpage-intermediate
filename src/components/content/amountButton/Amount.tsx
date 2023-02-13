import React from "react";
import "./Amount.scss";

type Props = {};

const Amount = (props: Props) => {
  return (
    <div>
      <div className="amount-buttons">
        <button className="decrease-button">-</button>

        <button disabled className="item">
          0
        </button>
        <button className="increase-button">+</button>

        <button className="add-card">
          {/* <div className="img-cart"></div> */}
          <img className="img-cart" src="images/icon-cart.svg" alt="" />
          Add to cart{" "}
        </button>
      </div>
    </div>
  );
};

export default Amount;
