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

export const About = () => {
  const theme = useTheme();
  const textTheme = createTheme();
  theme.typography.h6 = {
    fontSize: "1 rem",
    fontFamily: "Open Sans, arial, sans-serif",
    "@media (min-width:600px)": {
      fontSize: "0.6rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  };

  theme.typography.body1 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
  };
  return (
    <Grid container spacing={1} justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={12} justifyContent={"center"} alignItems={"center"}>
        <img src="https://img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/ff5ef498a6974abbf9f8cbb269fac47a628a60a5.jpg" />
      </Grid>
      <Grid
        item
        container
        xs={12}
        marginLeft={0}
        direction={"row"}
        spacing={4}
        marginTop={3}
      >
        <Grid item>
          <ThemeProvider theme={textTheme}>
            <Typography color={"green"} variant="h6">
              HISTORY - HOW IT ALL BEGAN
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item>
          <Typography fontFamily={"Open Sans, arial, sans-serif"}>
            Kent Film Foundation began as a non-for-profit arm of a film
            production company based in Thanet , Kent an area of high
            deprivation where young people suffer from "Poverty of Opportunity".
          </Typography>
        </Grid>
        <Grid item>
          <Typography fontFamily={"Open Sans, arial, sans-serif"}>
            A local group of filmmakers attached training elements for young
            people to a series of feature film shoots. This successfully led
            talented young people into entry level film industry jobs, film
            schools, universities and drama schools for those interested in
            careers in media.{" "}
          </Typography>
        </Grid>
        <Grid item>
          <Typography fontFamily={"Open Sans, arial, sans-serif"}>
            This inspired one of the filmmakers who had also grown up in poverty
            herself, to create the Kent Film Foundation, an organisation with
            charitable status in the hope of hiring professional filmmakers to
            mentor young people in film workshops that would be FREE to every
            participant.
          </Typography>
        </Grid>
        <Grid item paddingBottom={10}>
          <Typography fontFamily={"Open Sans, arial, sans-serif"}>
            Since its inception in 2010 the charity has an excellent track
            record in achieving its outcomes. It recently received a prestigious
            nomination in the Colyer Fergusson 50th Anniversary Awards in the
            category "Unlocking Opportunities"
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
