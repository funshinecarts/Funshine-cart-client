export interface AddProductFieldTypes {
  field_name: string;
  label: string;
  variant: string;
  width: string;
  type: "text" | "number" | "password";
}

export interface AddProductTypes {
  buttonName : string;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  type: "used" | "new";
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AddProductFormData {
  name: string;
  price: number;
  stock: number;
  description: string;
  photo: any;
}