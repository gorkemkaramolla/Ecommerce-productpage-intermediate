import React from "react";
import "./Navbar.scss";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="aligner">
      <div className="nav-parent">
        <ul className="nav-list">
          <li className="nav-item brand">
            <img src="images/logo.svg" alt="" />
          </li>
          <li className="nav-item">Collections</li>
          <li className="nav-item">Men</li>
          <li className="nav-item">Women</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact</li>

          <div className="right-side nav-item ">
            <li className="nav-item">
              <img className="nav-img-cart" src="images/icon-cart.svg" alt="" />
            </li>
            <li className="nav-item">
              <img className="avatar" src="images/image-avatar.png" alt="" />
            </li>
          </div>
        </ul>
      </div>
      <hr
        style={{
          alignSelf: "center",
          width: "100%",
          margin: 36,
        }}
      />
    </div>
  );
};

export default Navbar;
