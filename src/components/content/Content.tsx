import React from "react";
import "./Content.scss";
import Amount from "./amountButton/Amount";
import Description from "./description/Description";
import Prices from "./prices/Prices";
type Props = {};

const Content = (props: Props) => {
  return (
    <div className="content">
      <div className="grid">
        <img className="productShoe" src="images/image-product-1.jpg" alt="" />
        <div className="otherImagesGroup">
          <img
            src="images/image-product-1-thumbnail.jpg"
            alt=""
            className="otherImage"
          />
          <img
            src="images/image-product-2-thumbnail.jpg"
            alt=""
            className="otherImage"
          />
          <img
            src="images/image-product-3-thumbnail.jpg"
            alt=""
            className="otherImage"
          />
          <img
            src="images/image-product-4-thumbnail.jpg"
            alt=""
            className="otherImage"
          />
        </div>
      </div>
      <div className="grid">
        <div className="grid-2-container">
          <Description />
          <Prices />
          <Amount />
        </div>
      </div>
    </div>
  );
};

export default Content;
