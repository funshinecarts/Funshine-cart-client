import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { FormDialogTypes } from "./FormDialog.types";

import "./FormDialog.scss";
import { Box, TextField } from "@mui/material";

export const FormDialog: React.FC<FormDialogTypes> = ({
  buttonHeader,
  fields,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <DialogTitle id="alert-dialog-title">
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
                id={field.field_name}
                label={field.label}
                variant={"outlined"}
                type={field.type}
                sx={{ width: "100%" }}
              />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default FormDialog;
