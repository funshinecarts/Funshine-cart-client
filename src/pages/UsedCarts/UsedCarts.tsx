import React from "react";

import DashboardWrapper from "../../components/DashboardWrapper/DashboardWrapper";
import AddProduct from "../../components/AddProduct/AddProduct";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./UsedCarts.scss";

const UsedCarts = () => {
  const [formData, setFormData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  console.log(loading, "loading used cart")


  return (
    <DashboardWrapper>
      <AddProduct
        buttonName="Add Used Cart"
        type="used"
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

export default UsedCarts;
