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
  photo: yup
    .mixed()
    .required("Photo is required")
    .test("fileType", "Invalid file type", (value: any) => {
      if (!value.length) return false;
      return (
        value[0].type === "image/jpeg" ||
        value[0].type === "image/png" ||
        value[0].type === "image/gif"
      );
    }),
});