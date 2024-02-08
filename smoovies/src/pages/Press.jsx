import React from "react";
import { Skeleton, Stack, Grid, Typography } from "@mui/material";
import { PressCard } from "../components/PressCard";
import { PressCardGrid } from "../components/back-end/PressCardGrid";
const Press = () => {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          textAlign={"center"}
          sx={{ textDecoration: "underline" }}
        >
          Press
        </Typography>
      </Grid>
      <Grid>
        <PressCardGrid />
      </Grid>
    </Grid>
  );
};

export default Press;
