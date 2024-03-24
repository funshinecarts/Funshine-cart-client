import { Box } from "@mui/material";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ProductsSectionTypes } from "./ProductsSection.types";

const ProductsSection: React.FC<ProductsSectionTypes> = ({
  products,
  type,
}) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 4,
        padding: "20px",
       
      }}
    >
      {products.map((cart, index) => (
        <ProductCard key={index} product={cart} type={type} />
      ))}
    </Box>
  );
};

export default ProductsSection;
