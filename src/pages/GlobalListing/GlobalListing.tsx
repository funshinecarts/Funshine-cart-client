import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import UserProductCard from "../../components/UserProductCard/UserProductCard";
import axios_instance from "../../services/api";
import { ProductTypes } from "../../components/ProductCard/ProductCard.types";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Box } from "@mui/material";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import { useParams } from "react-router-dom";

const GlobalListing = () => {
  const [loading, setLoading] = useState(false);
  const [carts, setCarts] = useState<ProductTypes[]>([]);
  const { condition } = useParams();

  console.log(condition);

  useEffect(() => {
    fetchCarts();
  }, []);

  const fetchCarts = async () => {
    try {
      setLoading(true);
      const { data } = await axios_instance.get("/product/list");
      if (condition) {
        const filteredProducts = data?.products.filter(
          (product) => product.condition === condition
        );
        setCarts(filteredProducts);
      } else {
        setCarts(data?.products);
      }
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
      {condition ? (
        <p
          style={{
            padding: "20px",
            fontSize: "20px",
            fontWeight: "600",
            marginTop: "20px",
          }}
        >
          Condition: {condition.charAt(0).toUpperCase() + condition.slice(1)}
        </p>
      ) : (
        <p
          style={{
            padding: "20px",
            fontSize: "20px",
            fontWeight: "600",
            marginTop: "20px",
          }}
        >
          Showing All Listings
        </p>
      )}

      <ProductsSection products={carts} type="user" />
    </>
  );
};

export default GlobalListing;
