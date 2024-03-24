import React, { useEffect, useState } from "react";

import DashboardWrapper from "../../components/DashboardWrapper/DashboardWrapper";
import AddProduct from "../../components/AddProduct/AddProduct";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./UsedCarts.scss";
import { ProductTypes } from "../../components/ProductCard/ProductCard.types";
import axios_instance from "../../services/api";
import { Box, CircularProgress } from "@mui/material";

const UsedCarts = () => {
  const [carts, setCarts] = useState<ProductTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchCarts();
  }, []);

  const fetchCarts = async () => {
    try {
      setLoading(true);
      const { data } = await axios_instance.get("/product/list");
      const usedCarts = data.products.filter(
        (product) => product.condition === "used"
      );
      setCarts(usedCarts);
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
        buttonName="Add Used Cart"
        type="used"
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
            <ProductCard key={index} product={cart} fetchCarts={fetchCarts} type="admin" />
          ))}
        </div>
      )}
    </DashboardWrapper>
  );
};

export default UsedCarts;
