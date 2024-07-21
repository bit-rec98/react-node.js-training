import { Grid } from "@mui/material"
import HomeSuggestionCard from "./HomeSuggestionCard";

const HomeSuggestions = () => {
  return (
    <article id="home-suggestions">
      <Grid container spacing={0} sx={{padding: "0"}}>
        <Grid item lg={3}>
          <HomeSuggestionCard></HomeSuggestionCard>
        </Grid>
        <Grid item lg={3}>
          <HomeSuggestionCard></HomeSuggestionCard>
        </Grid>
        <Grid item lg={3}>
          <HomeSuggestionCard></HomeSuggestionCard>
        </Grid>
        <Grid item lg={3}>
          <HomeSuggestionCard></HomeSuggestionCard>
        </Grid>
      </Grid>
    </article>
  );
}

export default HomeSuggestions