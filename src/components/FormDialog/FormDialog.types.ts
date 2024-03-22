import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import {
  AddProductFieldTypes,
  AddProductFormData,
} from "../AddProduct/AddProduct.types";

export interface FormDialogTypes {
  buttonHeader: string;
  fields: AddProductFieldTypes[];
  errors: FieldErrors<FieldValues>;
  setValue: UseFormSetValue<any>;
  open: boolean;
  register: any;
  loading?: boolean;
  submitFields: () => void;
  setOpen: (open: boolean) => void;
  watch: UseFormWatch<AddProductFormData>;
}
