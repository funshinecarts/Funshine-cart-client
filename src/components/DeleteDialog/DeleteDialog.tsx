import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DeleteDialogTypes } from "./DeleteDialog.type";
import axios_instance from "../../services/api";
import { CircularProgress } from "@mui/material";

const DeleteDialog: React.FC<DeleteDialogTypes> = ({
  open,
  setOpen,
  loading,
  product_id,
  setLoading,
  fetchCarts,
}) => {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProductDelete = async () => {
    try {
      setLoading(true);
      const { data } = await axios_instance.delete(
        `/product/action/${product_id}`
      );
      setLoading(false);
      fetchCarts && fetchCarts();
      setOpen(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do You Really Want To Delete This?"}
        </DialogTitle>
        <DialogContent>
          If You Click Yes Then It Will Be Permanently Delete From The Database
        </DialogContent>
        <DialogActions>
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <Button onClick={handleClose}>No</Button>
              <Button onClick={handleProductDelete} autoFocus>
                Yes
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteDialog;
