import { useContext } from "react";
import { CartContext } from "../context/Contexts";

export function useCart() {
  return useContext(CartContext);
}