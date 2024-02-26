import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Grid
      container
      justifyContent={"left"}
      alignItems={"left"}
      textAlign={"left"}
      spacing={11}
    >
      <Grid item xs={12}>
        <Typography variant="h3">
          Sorry, this page does not exist
          <Typography variant="h4">The page could not be found</Typography>
          <Typography variant="h5" component={Link} to={"/"}>
            Click here to return Home
          </Typography>
        </Typography>
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={12} marginBottom={"15%"}></Grid>
    </Grid>
  );
};
