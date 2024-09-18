import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, totalQuantity, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}

      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
