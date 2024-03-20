export interface ProductTypes {
  photo: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  condition: "used" | "new";
}

export interface ProductCardTypes {
  product: ProductTypes;
}
