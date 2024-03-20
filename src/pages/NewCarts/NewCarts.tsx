import React, { useEffect, useState } from "react";

import DashboardWrapper from "../../components/DashboardWrapper/DashboardWrapper";
import ProductCard from "../../components/ProductCard/ProductCard";
import FormDialog from "../../components/FormDialog/FormDialog";
import AddProduct from "../../components/AddProduct/AddProduct";

import "./NewCarts.scss";
import axios_instance from "../../services/api";
import { ProductTypes } from "../../components/ProductCard/ProductCard.types";
import { Box, CircularProgress } from "@mui/material";

const NewCarts = () => {
  const [carts, setCarts] = useState<ProductTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchCarts();
  }, []);

  const fetchCarts = async () => {
    try {
      setLoading(true);
      const { data } = await axios_instance.get("/product/list");
      const newCarts = data.products.filter(
        (product) => product.condition === "new"
      );
      setCarts(newCarts);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      window.alert("Failed To Fetch Products");
    }
  };

  return (
    <DashboardWrapper>
      <AddProduct
        buttonName="Add New Cart"
        type="new"
        fetchProducts={fetchCarts}
      />
      {loading ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "50px" }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className="cards">
          {carts.map((cart, index) => (
            <ProductCard key={index} product={cart} fetchCarts={fetchCarts} />
          ))}
        </div>
      )}
    </DashboardWrapper>
  );
};

export default NewCarts;
