import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import { useEffect, useRef } from "react";
import Cart from "../cart/Cart";
import { useCart } from "../contexts/CartContext";
type Props = {};
const arry = ["Collections", "Men", "Women", "About", "Contact"];
const Navbar = (props: Props) => {
  let { products } = useCart();
  const [activeItem, setActiveItem] = useState<Number>(-1);
  const [cartActive, setCartActive] = useState<string>("");
  const [profileActive, setProfileActive] = useState<string>("");

  const toggleCart = () => {
    cartActive === "" ? setCartActive("active") : setCartActive("");
  };
  useEffect(() => {}, [cartActive]);
  const openSideMenu = () => {
    document.querySelector(".side-menu")?.classList.add("active");
  };
  const closeSideMenu = () => {
    document.querySelector(".side-menu")?.classList.remove("active");
    document.getElementById("content")?.classList.remove("disabled");
  };
  const toggleProfile = () => {
    if (cartActive) setCartActive("");
    profileActive === "active"
      ? setProfileActive("")
      : setProfileActive("active");
  };

  return (
    <div className="aligner">
      <div className="nav-parent">
        <ul className="nav-list">
          <div className="left-side">
            <div className="side-menu">
              <div className="item" onClick={closeSideMenu}>
                <img src="images/icon-close.svg" alt="" />
              </div>
              {arry.map((item, i) => (
                <div key={i} className="item">
                  {item}
                </div>
              ))}
            </div>
            <li className="burger-menu" onClick={openSideMenu}>
              <img src="images/icon-menu.svg" alt="" />
            </li>
            <li className="nav-item brand">
              <img src="images/logo.svg" alt="" />
            </li>
            {arry.map((item, i) => (
              <li
                key={i}
                onClick={() => {
                  setActiveItem(i);
                }}
                className="nav-item nav-content"
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
          </div>
          <div className="right-side nav-item ">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <li
                className="nav-item"
                style={{ margin: 0 }}
                onClick={toggleCart}
              >
                <img
                  className={`nav-img-cart ${cartActive}`}
                  src="images/icon-cart.svg"
                  alt=""
                />

                <span className="cart-length">{products.length}</span>
              </li>

              <li className="nav-item" onClick={toggleProfile}>
                <img
                  className={`avatar ${profileActive}`}
                  src="images/image-avatar.png"
                  alt=""
                />
              </li>
            </div>
          </div>
        </ul>
      </div>

      <hr
        className="nav-hr"
        style={{
          alignSelf: "center",
          width: "100%",
          marginTop: "36px",
          marginBottom: "90px",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          height: "0px",
          backgroundColor: "red",
          marginLeft: "100px",
        }}
      >
        <div>{cartActive === "active" && <Cart></Cart>}</div>
      </div>
    </div>
  );
};

export default Navbar;
