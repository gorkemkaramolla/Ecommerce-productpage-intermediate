import React from "react";
import "./Description.scss";
type Props = {};

const Description = (props: Props) => {
  return (
    <div className="description">
      <h5 className="orange-header">SNAKER COMPANY</h5>
      <h1 className="header">Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
    </div>
  );
};

export default Description;
