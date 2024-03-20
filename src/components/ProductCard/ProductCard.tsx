import React from "react";
import "./ProductCard.scss";
import { ProductCardTypes } from "./ProductCard.types";

const ProductCard: React.FC<ProductCardTypes> = ({ product }) => {
  return (
    <a href="" className="card">
      <img src={product.photo} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <div className="card__header-text">
            <h3 className="card__title">{product.name}</h3>
            <p className="card__price">Price: ${product.price}</p>
            <p className="card__stock">Stock: {product.stock}</p>
          </div>
        </div>
        <p className="card__description">{product.description}</p>
      </div>
    </a>
  );
};

export default ProductCard;
