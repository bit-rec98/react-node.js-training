import { Box, Button, Grid, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { NavLink } from "react-router-dom";
import "../../css/components/home/homeCategories.css";

import PhoneAndroidSharpIcon from "@mui/icons-material/PhoneAndroidSharp";


const HomeCategories = () => {
  return (
    <article id="home-categories">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Explore our categories:</h2>
        <Box>
          <Button>
            <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
          </Button>
          <Button>
            <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
          </Button>
        </Box>
      </Box>
      <Grid container spacing={3} sx={{padding: "2rem 0"}}>
        <Grid item xs={1} md={4} lg={2}>
          <NavLink to="/products">
            <Button
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "1rem",
              }}
            >
              <PhoneAndroidSharpIcon></PhoneAndroidSharpIcon>
              <Typography>Mobile phones</Typography>
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={1} md={4} lg={2}>
          <NavLink to="/products">
            <Button
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "1rem",
              }}
            >
              <PhoneAndroidSharpIcon></PhoneAndroidSharpIcon>
              <Typography>Mobile phones</Typography>
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={1} md={4} lg={2}>
          <NavLink to="/products">
            <Button
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "1rem",
              }}
            >
              <PhoneAndroidSharpIcon></PhoneAndroidSharpIcon>
              <Typography>Mobile phones</Typography>
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={1} md={4} lg={2}>
          <NavLink to="/products">
            <Button
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "1rem",
              }}
            >
              <PhoneAndroidSharpIcon></PhoneAndroidSharpIcon>
              <Typography>Mobile phones</Typography>
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={1} md={4} lg={2}>
          <NavLink to="/products">
            <Button
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "1rem",
              }}
            >
              <PhoneAndroidSharpIcon></PhoneAndroidSharpIcon>
              <Typography>Mobile phones</Typography>
            </Button>
          </NavLink>
        </Grid>
        <Grid item xs={1} md={4} lg={2}>
          <NavLink to="/products">
            <Button
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "1rem",
              }}
            >
              <PhoneAndroidSharpIcon></PhoneAndroidSharpIcon>
              <Typography>Mobile phones</Typography>
            </Button>
          </NavLink>
        </Grid>
      </Grid>
    </article>
  );
};

export default HomeCategories;
