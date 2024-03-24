import React, { useEffect, useState } from "react";

import DashboardWrapper from "../DashboardWrapper/DashboardWrapper";
import axios_instance from "../../services/api";
import { ProductTypes } from "../ProductCard/ProductCard.types";
import { useLocation } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import StatsCard from "../StatsCard/StatsCard";
import ProductCard from "../ProductCard/ProductCard";

import "./Dashboard.scss";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [carts, setCarts] = useState<ProductTypes[]>([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  console.log(queryParams, "params");
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

  const newCarts = carts.filter((cart) => cart.condition === "new");
  const usedCarts = carts.filter((cart) => cart.condition === "used");

  console.log(newCarts, usedCarts);

  let newCartValuation = 0;
  let usedCartValuation = 0;

  // calculate newCarts valuation
  newCarts.forEach((cart) => (newCartValuation += cart.price * cart.stock));
  usedCarts.forEach((cart) => (usedCartValuation += cart.price * cart.stock));

  return (
    <>
      <DashboardWrapper>
        {loading ? (
          <Box
            sx={{ display: "flex", justifyContent: "center", padding: "50px" }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            <Box sx={{ display: "flex", gap: "20px", flexWrap: "wrap", mt: 2 }}>
              <StatsCard title="New Carts Available" number={newCarts.length} />
              <StatsCard
                title="Used Carts Available"
                number={usedCarts.length}
              />
              <StatsCard
                title="New Carts Valuation"
                number={newCartValuation}
                money
              />
              <StatsCard
                title="Used Carts Valuation"
                number={usedCartValuation}
                money
              />
            </Box>
            <Box sx={{ mt: 5 }}>
              <h3>Featured Carts</h3>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: 4,
                  mt: 2,
                }}
              >
                {carts.slice(0, 5).map((cart, index) => (
                  <ProductCard
                    key={index}
                    product={cart}
                    fetchCarts={fetchCarts}
                    type="admin"
                  />
                ))}
              </Box>
            </Box>
          </>
        )}
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
