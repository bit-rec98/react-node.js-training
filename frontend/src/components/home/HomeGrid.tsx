import { Box, Grid } from "@mui/material";
import playStationIllustration from "../../assets/illustrations/PlayStation.png";
import airpodsPro from "../../assets/illustrations/headphones.png";
import appleVisionPro from "../../assets/illustrations/vr.png";
import macBookPro from "../../assets/illustrations/macbook-pro-14.png";

import '../../css/components/home/homeGrid.css';

const HomeGrid = () => {
  return (
    <article id="home-grid">
      <Grid container spacing={0}>
        <Grid container spacing={0} lg={6}>
          <Grid item lg={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <img src={playStationIllustration} alt="playstation" />
              <Box>
                <h2>PlayStation</h2>
                <p>
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                  will redefine your PlayStation experience.
                </p>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <img src={airpodsPro} alt="airpods" />
              <Box>
                <h2>Airpods Pro</h2>
                <p>Computational audio. Listen, it's powerful</p>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            lg={6}
            sx={{ backgroundColor: "#121212", color: "#D2D2D2" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem"
              }}
            >
              <img src={appleVisionPro} alt="apple vision pro" />
              <Box>
                <h2>Apple Vision Pro</h2>
                <p>An immersive way to experience entertainment</p>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <Box>
              <h2>MacBook Pro</h2>
              <p>
                The new 15‑inch MacBook Air makes room for more of what you love
                with a spacious Liquid Retina display.
              </p>
            </Box>
            <img src={macBookPro} alt="macbook" />
          </Box>
        </Grid>
      </Grid>
    </article>
  );
};

export default HomeGrid;
