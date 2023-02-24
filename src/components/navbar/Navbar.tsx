import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import { useEffect } from "react";
import Cart from "../cart/Cart";
import { useCart } from "../contexts/CartContext";
type Props = {};
const arry = ["Collections", "Men", "Women", "About", "Contact"];
const Navbar = (props: Props) => {
  let { products } = useCart();
  const [activeItem, setActiveItem] = useState<Number>(-1);
  const [cartActive, setCartActive] = useState<string>("");
  const toggleCart = () => {
    cartActive === "" ? setCartActive("active") : setCartActive("");
  };
  useEffect(() => {}, [cartActive]);
  return (
    <div className="aligner">
      <div className="nav-parent">
        <ul className="nav-list">
          <li className="nav-item brand">
            <img src="images/logo.svg" alt="" />
          </li>
          {arry.map((item, i) => (
            <li
              key={i}
              onClick={() => {
                setActiveItem(i);
              }}
              className="nav-item"
            >
              <a
                href="#"
                className="nav-link"
                style={activeItem === i ? { color: "var(--Black)" } : {}}
              >
                {item}
                {i === activeItem ? (
                  <div id="active-line" className={`activeLine active`}></div>
                ) : (
                  <div id="active-line" className={`activeLine }`}></div>
                )}
              </a>
            </li>
          ))}
          <div className="right-side nav-item ">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "300px",
              }}
            >
              <li className="nav-item" onClick={toggleCart}>
                <img
                  className={`nav-img-cart ${cartActive}`}
                  src="images/icon-cart.svg"
                  alt=""
                />
                <span className="cart-length">{products.length}</span>
              </li>

              <li className="nav-item">
                <img className="avatar" src="images/image-avatar.png" alt="" />
              </li>
            </div>
          </div>
        </ul>
      </div>

      <hr
        style={{
          alignSelf: "center",
          width: "100%",
          margin: 36,
          marginBottom: "90px",
        }}
      />
      {cartActive === "active" && <Cart></Cart>}
    </div>
  );
};

export default Navbar;
