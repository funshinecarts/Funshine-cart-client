import React from "react";

import DashboardWrapper from "../../components/DashboardWrapper/DashboardWrapper";
import ProductCard from "../../components/ProductCard/ProductCard";
import FormDialog from "../../components/FormDialog/FormDialog";
import AddProduct from "../../components/AddProduct/AddProduct";

import "./NewCarts.scss";


const NewCarts = () => {
  return (
    <DashboardWrapper>
      <AddProduct />
      <div className="cards">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </DashboardWrapper>
  );
};

export default NewCarts;
