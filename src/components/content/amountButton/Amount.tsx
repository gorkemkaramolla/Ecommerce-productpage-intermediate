import React from "react";
import "./Amount.scss";
import { Product, useCart } from "../../contexts/CartContext";
import { useState, useEffect, useContext } from "react";
type Props = {};

const Amount = (props: Props) => {
  const { products, setProducts } = useCart();

  const stock = 20;
  const [amount, setAmount] = useState<number>(0);
  const sampleProduct = {
    id: 1,
    name: "Fall Limited Edition Snakers",
    amount,
    price: 125.0,
    currency: "$",
    productIcon: "image-product-1-thumbnail.jpg",
  };
  useEffect(() => {
    console.log(products);
  }, [products]);

  const changeAmount = (addedAmount: number) => {
    if (addedAmount === -1) {
      if (amount > 0) setAmount((amount) => amount + addedAmount);
    } else {
      if (amount < stock) setAmount((amount) => amount + addedAmount);
    }
  };
  const addItemsToCart = () => {
    const productExist = products.some(
      (product) => product.id === sampleProduct.id
    );
    if (!productExist && amount > 0)
      setProducts((prevProducts) => [...prevProducts, sampleProduct]);
    else {
      const idx = products.findIndex(
        (product) => product.id === sampleProduct.id
      );
      const updatedProducts = [...products];
      updatedProducts[idx].amount = updatedProducts[idx].amount + amount;
      setProducts(updatedProducts);
    }
    setAmount(0);
  };

  return (
    <div className="cart-control">
      <div className="amount-buttons">
        <button className="decrease-button" onClick={() => changeAmount(-1)}>
          <img src="images/icon-minus.svg" alt="" />
        </button>

        <button disabled className="item">
          {amount}
        </button>
        <button className="increase-button" onClick={() => changeAmount(1)}>
          <img src="images/icon-plus.svg" alt="" />
        </button>
      </div>
      <div className="add-card-container">
        <button className="add-card" onClick={addItemsToCart}>
          {/* <div className="img-cart"></div> */}
          <img className="img-cart" src="images/icon-cart.svg" alt="" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Amount;
