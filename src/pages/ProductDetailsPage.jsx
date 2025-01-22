import React from "react";
import { useParams } from "react-router-dom";

import { useCart } from "../context/CartContext";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = { id, name: `Product ${id}`, price: 20 };

  return (
    <div className="product-details">
      <h1>Product {id} Details</h1>
      <p>Description of the product...</p>
      <div className="packages">
        <h3>Packages</h3>
        <ul>
          <li>Bundle - $20</li>
          <li>Professional - $50</li>
          <li>Enterprise - $100</li>
        </ul>
      </div>
      {/* <button className="buy-now">Buy Now</button> */}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetailsPage;