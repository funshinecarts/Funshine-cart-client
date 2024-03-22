import * as yup from "yup";

export const ADD_PRODUCT_SCHEMA = yup.object().shape({
  name: yup.string().required("Name is required"),
  stock: yup
    .number()
    .typeError("Enter Valid Stock")
    .required("Stock is required"),
  price: yup
    .number()
    .typeError("Enter Valid Price")
    .required("Product Id is required"),
  description: yup.string().required("Description is required"),
  // photos: yup
  //   .array()
  //   .min(1, "At least one photo is required")
  //   .required("Photo is required")
  //   .test("fileTypes", "Invalid file types", (value: any) => {
  //     if (!value || value.length === 0) return false;
  //     return value.every(
  //       (file: any) =>
  //         file && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif")
  //     );
  //   }),
});
