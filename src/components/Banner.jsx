import React from "react";
// import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <h1>Top Selling AI Apps</h1>
      <p>Transform your business with our cutting-edge AI tools!</p>
      <form className="optin-form">
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Banner;