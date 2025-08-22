import { useState } from "react";
import { CartContext } from "./Contexts";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart}}>
      {children}
    </CartContext.Provider>
  );
}