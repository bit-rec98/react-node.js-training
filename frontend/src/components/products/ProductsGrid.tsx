// import React from "react";
import { Grid } from "@mui/material";
import Product from "./Product";

const ProductsGrid = () => {
  return (
    <Grid container spacing={4}>
      <Grid lg={4} sx={{ background: "#f5f5f5", border: "1px solid purple", margin: "0.5rem" }}>
        <Product />
      </Grid>
      <Grid lg={4} sx={{ background: "#f5f5f5", border: "1px solid purple", margin: "0.5rem" }}>
        <Product />
      </Grid>
      <Grid lg={4} sx={{ background: "#f5f5f5", border: "1px solid purple", margin: "0.5rem" }}>
        <Product />
      </Grid>
      <Grid lg={4} sx={{ background: "#f5f5f5", border: "1px solid purple", margin: "0.5rem" }}>
        <Product />
      </Grid>
      <Grid lg={4} sx={{ background: "#f5f5f5", border: "1px solid purple", margin: "0.5rem" }}>
        <Product />
      </Grid>
      <Grid lg={4} sx={{ background: "#f5f5f5", border: "1px solid purple", margin: "0.5rem" }}>
        <Product />
      </Grid>
      <Grid lg={4} sx={{ background: "#f5f5f5", border: "1px solid purple", margin: "0.5rem" }}>
        <Product />
      </Grid>
      <Grid lg={4} sx={{ background: "#f5f5f5", border: "1px solid purple", margin: "0.5rem" }}>
        <Product />
      </Grid>
      <Grid lg={4} sx={{ background: "#f5f5f5", border: "1px solid purple", margin: "0.5rem" }}>
        <Product />
      </Grid>
      <Grid lg={4} sx={{ background: "#f5f5f5", border: "1px solid purple", margin: "0.5rem" }}>
        <Product />
      </Grid>
    </Grid>
  );
};

export default ProductsGrid;
