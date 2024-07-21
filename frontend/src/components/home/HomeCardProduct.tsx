import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import product from "../../assets/illustrations/iphone-14-pro.png";

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 420 }}>
      <CardMedia sx={{ height: 280 }} image={product} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Iphone
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="small">
          $12345
        </Typography>
      </CardContent>
      <CardActions sx={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", padding: "2rem 1rem", gap: "0.5rem"}}>
        <Button variant="contained">Shop now</Button>
        <Button>
            <FavoriteBorderIcon></FavoriteBorderIcon>
        </Button>
      </CardActions>
    </Card>
  );
}
