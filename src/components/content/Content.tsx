import React from "react";
import "./Content.scss";
import Amount from "./amountButton/Amount";
import Description from "./description/Description";
import Prices from "./prices/Prices";
import { useState, useEffect } from "react";
import Cart from "../cart/Cart";
type Props = {};

const Content = (props: Props) => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    if (windowSize[0] < 501) {
      setImageMode(false);
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  const [activeProduct, setActiveProduct] = useState<number>(0);
  const [imageMode, setImageMode] = useState<boolean>(false);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);
  useEffect(() => {
    console.log(activeProduct);
  }, [activeProduct]);
  useEffect(() => {
    let content = document.getElementById("content");
    if (imageMode) {
      if (windowSize[0] > 500) content?.classList.add("image-mode");
    } else {
      content?.classList.remove("image-mode");
    }
  }, [imageMode]);
  const setActive = (current: number) => {
    console.log(current);
    setActiveProduct(current);
  };
  const showProductImage = () => {
    if (windowSize[0] > 500) setImageMode(true);
  };
  const imageModeClose = () => {
    setImageMode(false);
  };
  const rightButton = () => {
    activeProduct < thumbNails.length - 1 &&
      setActiveProduct(activeProduct + 1);
  };
  const leftButton = () => {
    activeProduct > 0 && setActiveProduct(activeProduct - 1);
  };
  let thumbNails = [
    "images/image-product-1-thumbnail.jpg",
    "images/image-product-2-thumbnail.jpg",
    "images/image-product-3-thumbnail.jpg",
    "images/image-product-4-thumbnail.jpg",
  ];

  return (
    <div
      id={"content"}
      style={imageMode ? { gridTemplateColumns: "100%" } : {}}
    >
      <div className={"grid"}>
        {imageMode && (
          <div className="prog-btn-holder">
            <button className="prog-btn close" onClick={imageModeClose}>
              <img
                className="prog-svg close"
                src="images/icon-close.svg"
                alt=""
              />
            </button>

            <div className="nav-btn">
              <button className="prog-btn left" onClick={leftButton}>
                <img
                  className="prog-svg "
                  src="images/icon-previous.svg"
                  alt=""
                />
              </button>
              <button className="prog-btn right" onClick={rightButton}>
                <img className="prog-svg" src="images/icon-next.svg" alt="" />
              </button>
            </div>
          </div>
        )}

        <div className="product-shoe-holder">
          <div className="nav-btn smaller">
            <button className="prog-btn left" onClick={leftButton}>
              <img
                className="prog-svg "
                src="images/icon-previous.svg"
                alt=""
              />
            </button>
            <button className="prog-btn right" onClick={rightButton}>
              <img className="prog-svg" src="images/icon-next.svg" alt="" />
            </button>
          </div>
          <img
            className="productShoe"
            onClick={showProductImage}
            src={`images/image-product-${activeProduct + 1}.jpg`}
            alt=""
          />
        </div>
        <div className="otherImagesGroup">
          {thumbNails.map((item, i) => (
            <img
              key={i}
              src={item}
              alt=""
              className={
                activeProduct === i ? `otherImage active` : `otherImage`
              }
              onClick={() => {
                setActive(i);
              }}
            />
          ))}
        </div>
      </div>
      {!imageMode && (
        <div className="grid">
          <div className="grid-2-container">
            <Description />
            <Prices />
            <Amount />
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
