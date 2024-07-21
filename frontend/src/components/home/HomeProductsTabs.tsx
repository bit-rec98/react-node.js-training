import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import ProductCard from "./HomeCardProduct";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProductsTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="New Products" {...a11yProps(0)} />
          <Tab label="Best Seller" {...a11yProps(1)} />
          <Tab label="Featured Products" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid container spacing={3}>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          {/* <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid> */}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Grid container spacing={3}>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          {/* <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid>
          <Grid item lg={3}>
            <ProductCard></ProductCard>
          </Grid> */}
        </Grid>
      </CustomTabPanel>
    </Box>
  );
}
