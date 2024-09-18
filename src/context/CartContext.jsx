import React, { createContext, useReducer } from "react";

// Create the CartContext
const CartContext = createContext();

// Cart reducer to manage state updates
const cartReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case "DECREASE":
      return state.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    default:
      return state;
  }
};

// CartProvider component to provide state and actions
export const CartProvider = ({ children }) => {
  // Initial products data
  const initialState = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      quantity: 1,
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      quantity: 1,
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      quantity: 1,
    },
    // More products can be added here as per the data
  ];

  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  // Function to increase item quantity
  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE", payload: { id } });
  };

  // Function to decrease item quantity
  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE", payload: { id } });
  };

  // Calculate total quantity and price
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
