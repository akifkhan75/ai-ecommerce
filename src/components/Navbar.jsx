import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">AI Store</div>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;