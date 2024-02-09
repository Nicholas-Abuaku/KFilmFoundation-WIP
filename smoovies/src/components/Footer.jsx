import React from "react";
import {
  Typography,
  useTheme,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  Grid,
} from "@mui/material";
import { SocialMediaLinks } from "./SocialMediaLinks";
export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const textTheme = createTheme();
  textTheme.typography.h6 = {
    fontSize: "0.1 rem",
    fontFamily: "Open Sans, arial, sans-serif",
    "@media (min-width:600px)": {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
  };
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={4}
    >
      <Grid item xs={12}>
        <SocialMediaLinks />
      </Grid>
      <Grid item xs={12}>
        <ThemeProvider theme={textTheme}>
          <Typography variant="h6" textAlign={"center"}>
            COPYRIGHT © 2024 KENT FILM FOUNDATION - ALL RIGHTS RESERVED.
          </Typography>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};
