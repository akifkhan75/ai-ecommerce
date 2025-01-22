import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
// import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Shop now</Link>.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${calculateTotal().toFixed(2)}</h3>
          <button onClick={clearCart}>Clear Cart</button>
          <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
        </>
      )}
    </div>
  );
};

export default Cart;