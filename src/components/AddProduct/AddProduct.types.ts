export interface AddProductFieldTypes {
  field_name: string;
  label: string;
  variant: string;
  width: string;
  type: "text" | "number" | "password";
}

export interface AddProductTypes {
  buttonName : string;
  type: "used" | "new";
  fetchProducts?: () => void;
}

export interface AddProductFormData {
  name: string;
  price: number;
  stock: number;
  description: string;
  photos: any;
}