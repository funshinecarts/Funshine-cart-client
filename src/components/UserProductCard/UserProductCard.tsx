import React from "react";

import "./UserProductCard.scss"

const UserProductCard = () => {
  return (
    <div className="product__card-wrapper">
      <div className="product-img">
        <img src="https://picsum.photos/250"/>
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>Harvest Vase</h1>
          <h2>by studio and friends</h2>
          <p>asdh</p>
        </div>
        <div className="product-price-btn">
          <p>
            <span>78</span>$
          </p>
          <button type="button">buy now</button>
        </div>
      </div>
    </div>
  );
};

export default UserProductCard;
