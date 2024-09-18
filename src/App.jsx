import React from "react";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
