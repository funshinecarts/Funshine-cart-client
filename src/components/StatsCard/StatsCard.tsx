import { Box, CardContent, Typography } from "@mui/material";
import React from "react";
import { StatsCardTypes } from "./StatsCard.types";

const StatsCard = ({ title, number, money }: StatsCardTypes) => {
  return (
    <React.Fragment>
      <CardContent
        sx={{
          border: "1px solid rgba(128, 128, 128, 0.342)",
          borderRadius: 2,
          width: 250,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: "600" }}>
          {money? "$" : ""}{number}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
};

export default StatsCard;
