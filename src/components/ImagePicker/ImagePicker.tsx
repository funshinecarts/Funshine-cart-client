import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { ImagePickerTypes } from "./ImagePicker.types";

const ImagePicker: React.FC<ImagePickerTypes> = ({
  error,
  register,
  fieldName,
  watch,
  handleFileInputChange
}) => {

  return (
    <>
      <input
        type="file"
        accept="image/*"
        multiple
        {...register(fieldName, { multiple: true })}
        style={{ display: "none" }}
        id="image-picker-input"
      />
      <label htmlFor="image-picker-input">
        <IconButton component="span" color="primary">
          <PhotoCamera />
        </IconButton>
      </label>
      <p
        style={{
          color: "red",
          fontSize: "0.8rem",
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        {error}
      </p>
      {/* {images.length > 0 && (
        <div>
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Selected ${index}`}
              style={{ maxWidth: "100%", marginTop: 10, borderRadius: 5 }}
            />
          ))}
        </div>
      )} */}
    </>
  );
};

export default ImagePicker;
