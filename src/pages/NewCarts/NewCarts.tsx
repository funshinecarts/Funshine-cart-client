import React from "react";

import DashboardWrapper from "../../components/DashboardWrapper/DashboardWrapper";
import ProductCard from "../../components/ProductCard/ProductCard";
import FormDialog from "../../components/FormDialog/FormDialog";
import AddProduct from "../../components/AddProduct/AddProduct";

import "./NewCarts.scss";

const NewCarts = () => {
  const [formData, setFormData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  console.log(loading, "loading new cart")

  return (
    <DashboardWrapper>
      <AddProduct
        buttonName="Add New Cart"
        type="new"
        setFormData={setFormData}
        setLoading={setLoading}
      />
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
