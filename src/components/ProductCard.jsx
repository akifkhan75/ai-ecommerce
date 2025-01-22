import React from "react";
import { Link } from "react-router-dom";
// import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <Link to={`/products/${product.id}`} className="view-details-btn">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;