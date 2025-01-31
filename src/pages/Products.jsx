import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
// import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Social AI", price: "$10", category: "Social" },
    { id: 2, name: "Marketing Pro", price: "$15", category: "Marketing" },
  ]);

  return (
    <div className="products-page">
      <Filter />
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;