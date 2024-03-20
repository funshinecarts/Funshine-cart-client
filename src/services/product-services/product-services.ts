import { AddProductFormData } from "../../components/AddProduct/AddProduct.types";
import axios_instance from "../api";

export const addProduct = async (formData: FormData) => {
  console.log([...formData.entries()]); // Log FormData entries to check if file data is present
  const response = await axios_instance.post("/product/create", formData);
  console.log(response, "response");
};
