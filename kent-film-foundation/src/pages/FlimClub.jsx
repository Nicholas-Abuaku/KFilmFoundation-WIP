import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Icon,
  Paper,
  Grid,
  useTheme,
  useMediaQuery,
  useThemeProps,
  createTheme,
} from "@mui/material";
import { FilmClubDisplayCard } from "../components/FilmClubDisplayCard";

const FilmClub = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid
        container
        spacing={1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          item
          xs={12}
          md={12}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {isMobile ? (
            <Card
              width={"64.16vw"}
              height={"65.18vh"}
              sx={{
                backgroundColor: "#88A79A",
                width: "90%",
                height: "100%",
                margin: "auto",
                marginTop: "40px",
                marginBottom: "80px",
              }}
            >
              <CardMedia
                component={"img"}
                height={"100%"}
                src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/Girls%20film%20club%201.jpg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1240,h:620,cg:true"
              />
              <CardContent>
                <Stack spacing={2}>
                  <Typography textAlign={"center"} variant="h5" color={"white"}>
                    FREE YOUTH FILM CLUBS EVERY MONDAY (term time only) 6-8pm
                  </Typography>
                  <Typography textAlign={"center"} color={"white"}>
                    For more information contact: kentfilmfoundation@gmail.com{" "}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          ) : (
            <Card
              height={"65.18vh"}
              sx={{
                backgroundColor: "#88A79A",
                margin: "auto",
                marginTop: "40px",
                marginBottom: "80px",
                maxWidth: "80%",
              }}
              elevation={24}
            >
              <CardMedia
                component={"img"}
                height={"50%"}
                src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/Girls%20film%20club%201.jpg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:1240,h:620,cg:true"
              />
              <CardContent>
                <Stack spacing={2}>
                  <Typography textAlign={"center"} variant="h5" color={"white"}>
                    FREE YOUTH FILM CLUBS EVERY MONDAY (term time only) 6-8pm
                  </Typography>
                  <Typography textAlign={"center"} color={"white"}>
                    For more information contact: kentfilmfoundation@gmail.com{" "}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          )}
        </Grid>

        <Grid item xs={12} md={6}>
          <FilmClubDisplayCard
            img={
              "//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/36017984913_a367a47e19_b.jpg/:/cr=t:7.16%25,l:0%25,w:100%25,h:85.68%25/rs=w:600,h:300,cg:true"
            }
            heading={"ARE YOU INTERESTED IN MAKING WILDLIFE/NATURE FILMS?"}
            description={"No"}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FilmClubDisplayCard
            img={
              "//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/2-275845-Main-600x450-7.jpg/:/cr=t:16.67%25,l:0%25,w:100%25,h:66.67%25/rs=w:600,h:300,cg:true"
            }
            heading={"A fun experience with filmmakers"}
            description={
              "Our award-winning film mentors are from professional arts and media backgrounds. We also invite guest speakers from the world of film and television. Guest speakers have included OSCAR and BAFTA winning Actors, Directors, Producers Propmakes, Make Up Artists and Screenwriters."
            }
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FilmClubDisplayCard
            img={
              "//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/ff5ef498a6974abbf9f8cbb269fac47a628a60a5.jpg/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"
            }
            heading={" We offer a range of film clubs"}
            description={"Girl's Film Club (ages 13-19)"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FilmClub;
