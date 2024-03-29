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
import { Partners } from "../components/Partners";
import AboutTheme from "../Theme/AboutTheme";
const About = () => {
  const isMobile = useMediaQuery(AboutTheme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={createTheme(AboutTheme)}>
      <Helmet>
        <title>Kent Film Foundation: About Us & Our Impact</title>
        <meta
          name="description"
          content="Discover the stories behind Kent Film Foundation, a non-profit organization igniting a passion for film & nurturing the next generation of filmmakers in Kent."
        />
        <link
          rel="canonical"
          href="https://kentfilmfoundation.netlify.app/about"
        />
      </Helmet>
      <Grid
        container
        spacing={1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* <Grid item xs={12} md={12}>
          <Box width={"100%"} height={200} sx={{ backgroundColor: "black" }}>
            <Typography variant="h1" color="red" textAlign={"center"}>
              {" "}
              Image Placeholder
            </Typography>
          </Box>
        </Grid> */}
        <Grid item container>
          <Grid item xs={7} md={7} marginRight={0}>
            <Typography variant="h3" component={"h2"} marginLeft={4}>
              About
            </Typography>
            <hr style={{ width: "300px" }} />
            {isMobile ? (
              <Stack direction={"column"} spacing={2} width={200}>
                <Typography variant="body1" component={"h3"}>
                  Kent Film Foundation began as a non-for-profit arm of a film
                  production company based in Thanet , Kent an area of high
                  deprivation where young people suffer from "Poverty of
                  Opportunity".
                </Typography>
                <Typography variant="body1" component={"h4"}>
                  A local group of filmmakers attached training elements for
                  young people to a series of feature film shoots. This
                  successfully led talented young people into entry level film
                  industry jobs, film schools, universities and drama schools
                  for those interested in careers in media.
                </Typography>
                <Typography variant="body1">
                  This inspired one of the filmmakers who had also grown up in
                  poverty herself, to create the Kent Film Foundation, an
                  organisation with charitable status in the hope of hiring
                  professional filmmakers to mentor young people in film
                  workshops that would be FREE to every participant.
                </Typography>
                <Typography variant="body1">
                  Since its inception in 2010 the charity has an excellent track
                  record in achieving its outcomes. It recently received a
                  prestigious nomination in the Colyer Fergusson 50th
                  Anniversary Awards in the category "Unlocking Opportunities"
                </Typography>
              </Stack>
            ) : (
              <Stack
                direction={"column"}
                spacing={2}
                width={900}
                marginLeft={4}
              >
                <Typography
                  variant="h5"
                  component={"h3"}
                  fontFamily={"'Open Sans', arial, sans-serif"}
                >
                  Kent Film Foundation began as a non-for-profit arm of a film
                  production company based in Thanet , Kent an area of high
                  deprivation where young people suffer from "Poverty of
                  Opportunity".
                </Typography>
                <Typography variant="h5" component={"h4"}>
                  A local group of filmmakers attached training elements for
                  young people to a series of feature film shoots. This
                  successfully led talented young people into entry level film
                  industry jobs, film schools, universities and drama schools
                  for those interested in careers in media.
                </Typography>
                <Typography variant="h5">
                  This inspired one of the filmmakers who had also grown up in
                  poverty herself, to create the Kent Film Foundation, an
                  organisation with charitable status in the hope of hiring
                  professional filmmakers to mentor young people in film
                  workshops that would be FREE to every participant.
                </Typography>
                <Typography variant="h5">
                  Since its inception in 2010 the charity has an excellent track
                  record in achieving its outcomes. It recently received a
                  prestigious nomination in the Colyer Fergusson 50th
                  Anniversary Awards in the category "Unlocking Opportunities"
                </Typography>
              </Stack>
            )}
          </Grid>
          <Grid item xs={5} md={5} marginTop={20} marginLeft={0}>
            {isMobile ? (
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                width={150}
              >
                <img
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    marginBottom: "10px",
                  }}
                  alt="'Aiming High' is a film made by our young filmmakers about Ian Payne a wheelchair tennis player."
                  title="Ian Payne"
                  loading="eager"
                  src="https://img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/The_ParalympicsGB_Sports_Fest_has_been_a_great.jpg/:/cr=t:0%25,l:14.5%25,w:71%25,h:100%25/rs=w:400,h:400,cg:true"
                />
                <Typography variant="caption">
                  "Aiming High" is a film made by our young filmmakers about Ian
                  Payne a wheelchair tennis player.
                </Typography>
              </Stack>
            ) : (
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                width={400}
              >
                <img
                  style={{
                    borderRadius: "50%",
                    width: "300px",
                    marginBottom: "10px",
                  }}
                  alt="'Aiming High' is a film made by our young filmmakers about Ian Payne a wheelchair tennis player."
                  title="Ian Payne"
                  loading="eager"
                  src="https://img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/The_ParalympicsGB_Sports_Fest_has_been_a_great.jpg/:/cr=t:0%25,l:14.5%25,w:71%25,h:100%25/rs=w:400,h:400,cg:true"
                />
                <Typography variant="caption" fontSize={15}>
                  "Aiming High" is a film made by our young filmmakers about Ian
                  Payne a wheelchair tennis player.
                </Typography>
              </Stack>
            )}
          </Grid>
          <Grid item xs={12} marginTop={10}>
            <Partners />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default About;
