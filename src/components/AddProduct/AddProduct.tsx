import React from "react";
import FormDialog from "../FormDialog/FormDialog";
import {
  AddProductFieldTypes,
  AddProductFormData,
  AddProductTypes,
} from "./AddProduct.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ADD_PRODUCT_SCHEMA } from "../../constants/product/add-product-schema";
import { addProduct } from "../../services/product-services/product-services";
import toast, { Toaster } from "react-hot-toast";

const AddProduct: React.FC<AddProductTypes> = ({
  buttonName,
  type,
  fetchProducts,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
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

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(ADD_PRODUCT_SCHEMA),
  });

  // onSubmit function
  const onSubmit = async (data: AddProductFormData) => {
    const formData = new FormData();

    // Append all form fields except for 'photo'
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    formData.delete("photos");

    const photos_array: any[] = [];

    for (let i = 0; i < data.photos.length; i++) {
      formData.append('photos', data.photos[i]);
    }

    // data.photos.map((photo: any) => {
    //   photos_array.push(photo);
    // });

    // formData.append("photos", photos_array)
    // Append 'condition' field and 'photo' file separately
    formData.append("condition", type);

    // Log to check the file information (will show an empty object after appending to FormData)

    try {
      setLoading && setLoading(true);
      const response = await addProduct(formData);
      toast("Product added successfully", { icon: "🚀" });
      setLoading && setLoading(false);
      setOpen(false);
      fetchProducts && fetchProducts();
    } catch (error) {
      console.error(error);
      setLoading && setLoading(false);
      toast.error("Failed to add product");
    }
  };

  return (
    <>
      <Toaster />
      <FormDialog
        setValue={setValue}
        buttonHeader={buttonName}
        fields={addProductFields}
        open={open}
        loading={loading}
        setOpen={setOpen}
        register={register}
        errors={errors}
        watch={watch}
        submitFields={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default AddProduct;
