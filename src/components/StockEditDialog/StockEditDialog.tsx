import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios_instance from "../../services/api";
import { Box, CircularProgress } from "@mui/material";
import { StockEditDialogTypes } from "./StockEditDialog.types";

const StockEditDialog: React.FC<StockEditDialogTypes> = ({
  open,
  setOpen,
  loading,
  product,
  setLoading,
  fetchCarts,
}) => {
  const [stock, setStock] = React.useState(product.stock);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProductDelete = async () => {
    try {
      setLoading(true);
      const { data } = await axios_instance.put(
        `/product/action/${product._id}`,
        { stock: stock },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
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
          {"Update The Product Stock"}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Button variant="contained" onClick={() => setStock(stock - 1)}>
              -
            </Button>
            <p>{stock}</p>
            <Button variant="contained" onClick={() => setStock(stock + 1)}>
              +
            </Button>
          </Box>
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

export default StockEditDialog;
