import React from "react";
import "./ProductCard.scss"

const ProductCard = () => {
  return (
    <a href="" className="card">
      <img
        src="https://i.imgur.com/oYiTqum.jpg"
        className="card__image"
        alt=""
      />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <div className="card__header-text">
            <h3 className="card__title">Voyager PIONEER</h3>
            <p className="card__price">Price: $300</p>
            <p className="card__stock">Stock: 120</p>
          </div>
        </div>
        <p className="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          blanditiis?
        </p>
      </div>
    </a>
  );
};

export default ProductCard;
