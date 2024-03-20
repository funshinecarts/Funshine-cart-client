import { FieldError, FieldErrorsImpl, Merge, UseFormWatch } from "react-hook-form";
import { AddProductFormData } from "../AddProduct/AddProduct.types";

export interface ImagePickerTypes {
  error: string
  register: any;
  fieldName: string;
  watch : any
}