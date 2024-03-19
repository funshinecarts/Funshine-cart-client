import React from "react";
import FormDialog from "../FormDialog/FormDialog";
import { AddProductFieldTypes } from "./AddProduct.types";

const AddProduct = () => {
  const addProductFields: AddProductFieldTypes[] = [
    {
      field_name: "name",
      label: "Product Name",
      variant: "outlined",
      width: "100%",
      type: "text",
    },
    {
      field_name: "price",
      label: "Product Price",
      variant: "outlined",
      width: "100%",
      type: "number",
    },
    {
      field_name: "stock",
      label: "Product Stock",
      variant: "outlined",
      width: "100%",
      type: "number",
    },
    {
      field_name: "description",
      label: "Product Description",
      variant: "outlined",
      width: "100%",
      type: "text",
    },
  ];
  return (
    <>
      <FormDialog buttonHeader="Add Product" fields={addProductFields}/>
    </>
  );
};

export default AddProduct;
