import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import UserProductCard from "../../components/UserProductCard/UserProductCard";
import axios_instance from "../../services/api";
import { ProductTypes } from "../../components/ProductCard/ProductCard.types";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Box } from "@mui/material";
import ProductsSection from "../../components/ProductsSection/ProductsSection";

const GlobalListing = () => {
  const [loading, setLoading] = useState(false);
  const [carts, setCarts] = useState<ProductTypes[]>([]);
  useEffect(() => {
    fetchCarts();
  }, []);

  const fetchCarts = async () => {
    try {
      setLoading(true);
      const { data } = await axios_instance.get("/product/list");
      setCarts(data?.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      window.alert("Failed To Fetch Products");
    }
  };

  return (
    <>
      <Navbar />
      <ProductsSection products={carts} type="user"/>
    </>
  );
};

export default GlobalListing;
