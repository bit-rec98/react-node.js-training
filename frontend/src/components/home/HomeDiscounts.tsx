// import React from 'react'
import HomeCardDiscounts from './HomeCardDiscounts'
import '../../css/components/home/homeDiscounts.css'
import { Grid } from '@mui/material'
const HomeDiscounts = () => {
  return (
    <article id="home-discounts">
      <h2>Discounts up to 50%</h2>
      <Grid container spacing={4}>
        <Grid item lg={3}>
          <HomeCardDiscounts></HomeCardDiscounts>
        </Grid>
        <Grid item lg={3}>
          <HomeCardDiscounts></HomeCardDiscounts>
        </Grid>
        <Grid item lg={3}>
          <HomeCardDiscounts></HomeCardDiscounts>
        </Grid>
        <Grid item lg={3}>
          <HomeCardDiscounts></HomeCardDiscounts>
        </Grid>
      </Grid>
    </article>
  );
}

export default HomeDiscounts