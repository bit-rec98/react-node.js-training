// import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import productSuggested from "../../assets/illustrations/applewatch.png";

export default function HomeSuggestionCard() {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 0 }}>
      <CardMedia
        sx={{ height: 320 }}
        image={productSuggested}
        title="product-suggested"
      />
      <CardContent sx={{ padding: "2rem" }}>
        <Typography gutterBottom variant="h5" component="div">
          Product suggested
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, pariatur.
        </Typography>
      </CardContent>
      <CardActions sx={{ padding: "2rem" }}>
        <Button variant="outlined">Shop now</Button>
      </CardActions>
    </Card>
  );
}
