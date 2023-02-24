import React from "react";
import "./Prices.scss";

type Props = {};

const Prices = (props: Props) => {
  return (
    <div className="prices">
      <div className="price-discount-amount">
        <h2>$125.00</h2>
        <h4 className="orange-header percent">50%</h4>
      </div>
      <h4 className="discount">$250.00</h4>
    </div>
  );
};

export default Prices;
