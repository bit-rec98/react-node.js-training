// import React from 'react'

import { Box, Button, Typography } from "@mui/material";
import "../../css/components/home/homeSale.css";

import watch from "../../assets/illustrations/watch.png";
import tablet1 from "../../assets/illustrations/table1.png";
import tablet2 from "../../assets/illustrations/tablet.png";
import phone from "../../assets/illustrations/phone.png";
import laptop from "../../assets/illustrations/laptop.png";

const HomeSale = () => {
  return (
    <article id="home-sale">
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
        }}
      >
        <img id="laptop-img" src={laptop} alt="laptop" />
        <img id="tablet1-img" src={tablet1} alt="tablet1" />
        <img id="tablet2-img" src={tablet2} alt="tablet2" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: "2rem",
        }}
      >
        <Typography variant="h1" fontSize={"4rem"}>
          Summer sale
        </Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
          tenetur!
        </Typography>
        <Button variant="contained" color="primary">
          Shop now
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
        }}
      >
        <img id="phone-img" src={phone} alt="phone" />
        <img id="watch-img" src={watch} alt="watch" />
      </Box>
    </article>
  );
};

export default HomeSale;
