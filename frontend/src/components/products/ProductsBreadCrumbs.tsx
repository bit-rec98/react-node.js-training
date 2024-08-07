// import React from 'react'

import { Breadcrumbs, Link, Typography } from "@mui/material";

const ProductsBreadCrumbs = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ margin: "2rem" }}>
      {/* Fix href to use react router */}
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/">
        Categories
      </Link>
      <Typography color="text.primary">Breadcrumbs</Typography>
    </Breadcrumbs>
  );
};

export default ProductsBreadCrumbs;
