export interface ProductTypes {
  _id: string;
  photos: [string];
  name: string;
  price: number;
  stock: number;
  description: string;
  createdAt: string;
  condition: "used" | "new";
}

export interface ProductCardTypes {
  product: ProductTypes;
  type: "user" | "admin";
  fetchCarts?: () => void;
}
