import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
// import "./Checkout.css";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: "", email: "", address: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed:", { ...formData, cart });
    clearCart();
    navigate("/"); // Redirect to the homepage after checkout
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;