import React from "react";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
// import "./Home.css";

const Home = () => {
  const categories = ["Social", "Marketing", "Video Creator", "Image Creator"];

  return (
    <div className="home">
      <Banner />
      <div className="categories">
        {categories.map((category, index) => (
          <section key={index} className="category">
            <h2>{category}</h2>
            <div className="products">
              {/* Map products dynamically for each category */}
              {[1, 2, 3].map((product) => (
                <ProductCard key={product} product={{ name: `${category} App ${product}`, price: "$10" }} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Home;