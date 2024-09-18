import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const CartItem = ({ product }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.title} width="100" />
      <h4>{product.title}</h4>
      <p>Price: ${product.price}</p>
      <div className="quantity-control">
        <button onClick={() => decreaseQuantity(product.id)}>-</button>
        <span>{product.quantity}</span>
        <button onClick={() => increaseQuantity(product.id)}>+</button>
      </div>
      <p>Total: ${(product.quantity * product.price).toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
