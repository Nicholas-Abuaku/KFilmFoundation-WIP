import {
  Box,
  Grid,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
const About = () => {
  const theme = useTheme();
  const textTheme = createTheme();
  return (
    <>
      <Grid
        container
        spacing={1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <img
            src="https://img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/ff5ef498a6974abbf9f8cbb269fac47a628a60a5.jpg"
            style={{ minWidth: "400px", minHeight: "360px" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" sx={{ textDecoration: "underline" }}>
            About
          </Typography>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={6}>
            <Stack spacing={2}>
              <Typography>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
              <Typography>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
              <Typography>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} marginTop={60}>
            <img
              src="https://img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/The_ParalympicsGB_Sports_Fest_has_been_a_great.jpg"
              style={{
                borderRadius: "50%",
                maxHeight: "300px",
              }}
            />
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              possimus saepe sunt alias provident quidem fuga quod unde vel
              corrupti! Libero assumenda voluptates porro natus eaque voluptate
              tempore tempora quas!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
