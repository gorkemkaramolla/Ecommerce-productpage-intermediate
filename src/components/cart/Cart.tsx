import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

import "./Cart.scss";

type Props = {};

const Cart = (props: Props) => {
  const cartContext = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <ul className="cart-items">
        {cartContext.products.map((product, i) => (
          <li className="cart-item" key={i}>
            <div className="cart-items-container">
              <img
                className="product-icon"
                style={{ width: "45px", height: "45px" }}
                src={`images/${product.productIcon}`}
                alt=""
              />
              <div className="product-informations">
                <div className="product-name">{product.name}</div>
                <div className="price-holder">
                  <div className="product-price">
                    {product.currency}
                    {product.price.toFixed(2)}
                  </div>

                  <div className="product-amount">
                    &nbsp;x {product.amount}
                    &nbsp;
                  </div>
                  <div className="total-price">
                    {product.currency}
                    {(product.price * product.amount).toFixed(2)}
                  </div>
                  <div className="trash-btn">
                    <img
                      className="trash-icon"
                      src="images/icon-delete.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <button className="checkout"> Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
