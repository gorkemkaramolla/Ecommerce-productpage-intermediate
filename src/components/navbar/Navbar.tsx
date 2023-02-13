import React from "react";
import "./Navbar.scss";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <ul className="nav-list">
        <li className="nav-item">logo</li>
        <li className="nav-item">Collections</li>
        <li className="nav-item">Men</li>
        <li className="nav-item">Women</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">logo-cart</li>
        <li className="nav-item">logo-gay</li>
      </ul>
    </div>
  );
};

export default Navbar;
