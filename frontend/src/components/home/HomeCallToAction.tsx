import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";

import iphoneIllustration from "../../assets/illustrations/iphone.png";
import "../../css/components/home/homeCallToAction.css";
const HomeCallToAction = () => {
  return (
    <article id="home-cta">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "space-evenly",
          gap: "1rem",
        }}
      >
        <p>¡Disponible!</p>
        <h1>iPhone 14 Pro</h1>
        <p>Creado para cambiar todo para mejor. Para todos</p>
        <NavLink to="/products">
          <Button variant="outlined">Shop Now</Button>
        </NavLink>
      </Box>
      <img src={iphoneIllustration} alt="iphone" />
    </article>
  );
};

export default HomeCallToAction;
