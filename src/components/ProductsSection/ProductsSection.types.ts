import { ProductTypes } from "../ProductCard/ProductCard.types";

export interface ProductsSectionTypes {
  products: ProductTypes[],
  type: "user" | "admin"
}