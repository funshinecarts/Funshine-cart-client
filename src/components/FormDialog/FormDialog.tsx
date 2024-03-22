import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { FormDialogTypes } from "./FormDialog.types";

import "./FormDialog.scss";
import { Box, CircularProgress, TextField } from "@mui/material";
import ImagePicker from "../ImagePicker/ImagePicker";
import { useForm } from "react-hook-form";

export const FormDialog: React.FC<FormDialogTypes> = ({
  buttonHeader,
  fields,
  open,
  setOpen,
  register,
  submitFields,
  errors,
  watch,
  loading,
  setValue
}) => {

  const [selectedFiles, setSelectedFiles] = React.useState<any>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  };


  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className="dialog__button"
      >
        {buttonHeader}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          variant="h6"
          sx={{ fontWeight: 600 }}
        >
          Add Product To The System
        </DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{ width: 500, paddingY: "10px" }}
            className="dialog__form"
            noValidate
            autoComplete="off"
          >
            {fields.map((field, index) => (
              <TextField
                {...register(field.field_name as string)}
                key={index}
                id={field.field_name}
                label={field.label}
                variant={"outlined"}
                type={field.type}
                sx={{ width: "100%" }}
                error={errors[field.field_name as string] ? true : false}
                helperText={errors[field.field_name as string]?.message}
              />
            ))}

            <ImagePicker
              handleFileInputChange={handleFileInputChange}
              error={errors["photos"]?.message as string}
              fieldName={"photos"}
              register={register}
              watch={watch}
            />
          </Box>
        </DialogContent>
        {loading ? (
          <Box
            sx={{
              padding: "20px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <DialogActions sx={{ marginBottom: "10px", marginRight: "15px" }}>
            <Button onClick={handleClose} variant="outlined" color="error">
              Cancel
            </Button>
            <Button onClick={submitFields} variant="contained" autoFocus>
              Add Product
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </React.Fragment>
  );
};

export default FormDialog;
