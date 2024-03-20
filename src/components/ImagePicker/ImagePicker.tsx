import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { ImagePickerTypes } from "./ImagePicker.types";

const ImagePicker: React.FC<ImagePickerTypes> = ({
  error,
  register,
  fieldName,
  watch,
}) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const files = watch(fieldName); // Get the list of selected files
    if (files && files.length > 0) {
      const file = files[0];
      setImage(URL.createObjectURL(file));
    } else {
      setImage(null); // Reset image state if no file is selected
    }
  }, [watch(fieldName)]);

  return (
    <>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        id="image-picker-input"
        {...register(fieldName)} // Register the field with React Hook Form
      />
      <label htmlFor="image-picker-input">
        <IconButton component="span" color="primary">
          <PhotoCamera />
        </IconButton>
      </label>
      <p style={{
        color: "red",
        fontSize: "0.8rem",
        marginTop: 5,
        marginBottom: 5,
      }}>{error}</p>
      {image && (
        <img
          src={image}
          alt="Selected"
          style={{ maxWidth: "100%", marginTop: 10, borderRadius: 5 }}
        />
      )}
    </>
  );
};

export default ImagePicker;
