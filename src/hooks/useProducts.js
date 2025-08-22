import { useContext } from "react";
import { ProductContext } from "../context/ProductContextDefinition";

export function useProducts() {
  return useContext(ProductContext);
}
