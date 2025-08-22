import { useContext } from "react";
import { ProductContext } from "../context/Contexts";

export function useProducts() {
  return useContext(ProductContext);
}
