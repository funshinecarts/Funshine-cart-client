import React, { useState } from "react";
import "./ProductCard.scss";
import { ProductCardTypes } from "./ProductCard.types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import axios_instance from "../../services/api";
import DeleteDialog from "../DeleteDialog/DeleteDialog";
import StockEditDialog from "../StockEditDialog/StockEditDialog";

const ProductCard: React.FC<ProductCardTypes> = ({ product, fetchCarts }) => {
  const [loading, setLoading] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: "300px", objectFit: "cover" }}
        image={product.photo}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: "5px" }}>
          Price: ${product.price}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: "5px" }}>
          Stock: {product.stock}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: "5px" }}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "15px", pt: 0 }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Button
              size="small"
              variant="outlined"
              color="error"
              onClick={() => setOpenDeleteDialog(true)}
            >
              Delete
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={() => setOpenEditDialog(true)}
            >
              Edit
            </Button>
          </>
        )}
      </CardActions>
      <DeleteDialog
        fetchCarts={fetchCarts}
        loading={loading}
        setLoading={setLoading}
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        product_id={product._id}
      />
      <StockEditDialog
        fetchCarts={fetchCarts}
        loading={loading}
        setLoading={setLoading}
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        product={product}
      />
    </Card>
  );
};

export default ProductCard;
