import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  Icon,
  Skeleton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { LatestScreeningCard } from "../components/LatestScreeningCard";
import { CardGridPaginated } from "../components/CardGridPaginated";
import axios from "axios";
import { LatestScreeningSkeleton } from "../components/LatestScreeningSkeleton";

export const Home = () => {
  const [latestScreeningData, setLatestScreeningData] = useState([]);
  const [latestScreeningDate, setLatestScreeningDate] = useState(null);
  const [latestScreeningTime, setLatestScreeningTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const textTheme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  textTheme.typography.h4 = {
    fontSize: "1 rem",
    fontWeight: "bold",
    fontFamily: "Open Sans, arial, sans-serif",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
      fontFamily: "Open Sans, arial, sans-serif",
    },
  };
  const API_KEY = "1|rBvmzeUmqwFX0596V1H0XFCRNV6K4QLKkoo51G86f14fc84b";
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  const getScreeningData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/featured-content",
        headers
      );

      setLatestScreeningData(response.data[0]);
      console.log(response.data[0]);
      setIsLoading(true);
      const parsedDate = new Date(response.data[0].date);
      setLatestScreeningDate(parsedDate.toDateString());
      setLatestScreeningTime(parsedDate.toTimeString());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getScreeningData();
  }, []);

  return (
    <Grid
      container
      spacing={0}
      direction={"row"}
      marginTop={0}
      paddingLeft={0}
      paddingRight={0}
    >
      <Grid
        item
        md={12}
        xs={12}
        container
        direction={"column"}
        marginBottom={4}
        marginTop={0}
      >
        {isLoading ? (
          <LatestScreeningCard
            title={latestScreeningData.heading}
            date={latestScreeningDate}
            time={latestScreeningTime}
            img={"http://localhost:8000/storage/" + latestScreeningData.img_Url}
          />
        ) : (
          <LatestScreeningCard
            title={<Skeleton variant="text" animation="wave" />}
            date={<Skeleton variant="text" />}
            img={<Skeleton variant="rectangular" animation="wave" />}
          />
        )}
      </Grid>
      <Grid item>
        <CardGridPaginated />
      </Grid>
      <Grid item xs={12}>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
      </Grid>
      <Grid
        item
        container
        justifyContent={"center"}
        alignItems={"center"}
        spacing={4}
      >
        <Grid item textAlign={"center"} md={12}>
          <ThemeProvider theme={textTheme}>
            <Typography
              variant="h4"
              textAlign={"center"}
              fontFamily={"Open Sans, arial, sans-serif"}
            >
              A HUGE THANKS to our partners
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid
          item
          container
          md={12}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item md={12}>
            {isMobile ? (
              <Stack
                direction={"row"}
                spacing={1}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img
                  src="https://img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/GWF-logo-blue.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true"
                  style={{ width: "60px", height: "60px" }}
                />
                <img
                  src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/Colyer_Ferguson-e0a5fc3.png/:/rs=h:100,cg:true,m"
                  style={{ width: "60px", height: "60px" }}
                />
                <img
                  src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/KCF-Logo-Colour-Web-5b45e2cb5d499%20_sma-14583dc.png/:/rs=h:100,cg:true,m"
                  style={{ width: "60px", height: "60px" }}
                />
                <img
                  src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/SKMBT_C22013070112300.png/:/rs=h:100,cg:true,m"
                  style={{ width: "60px", height: "60px" }}
                />
                <img
                  src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/FHSE.jpg/:/rs=h:100,cg:true,m"
                  style={{ width: "60px", height: "60px" }}
                />
              </Stack>
            ) : (
              <Stack
                direction={"row"}
                spacing={3}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img src="https://img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/GWF-logo-blue.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true" />
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/Colyer_Ferguson-e0a5fc3.png/:/rs=h:100,cg:true,m" />
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/KCF-Logo-Colour-Web-5b45e2cb5d499%20_sma-14583dc.png/:/rs=h:100,cg:true,m" />
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/SKMBT_C22013070112300.png/:/rs=h:100,cg:true,m" />
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/FHSE.jpg/:/rs=h:100,cg:true,m" />
              </Stack>
            )}
          </Grid>
        </Grid>
        <Grid item md={12} textAlign={"center"}>
          <ThemeProvider theme={textTheme}>
            <Typography variant="h4">
              Supporters over the past 24 months
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid
          item
          container
          md={12}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={1}
        >
          <Grid item md={12}>
            {isMobile ? (
              <Stack
                direction={"row"}
                spacing={1}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img
                  src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/rsz_comic-relief.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true"
                  style={{ width: "60px", height: "60px" }}
                />
                <img
                  src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/sslogo.png/:/rs=h:100,cg:true,m"
                  style={{ width: "60px", height: "60px" }}
                />
                <img
                  src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/foyle-foundation.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true"
                  style={{ width: "60px", height: "60px" }}
                />
                <img
                  src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/bfi_logo_transp.png/:/rs=h:100,cg:true,m"
                  style={{ width: "60px", height: "60px" }}
                />
                <img
                  src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/Lottery-black.jpg/:/rs=h:100,cg:true,m"
                  style={{ width: "60px", height: "60px" }}
                />
              </Stack>
            ) : (
              <Stack
                direction={"row"}
                spacing={3}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/rsz_comic-relief.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true" />
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/sslogo.png/:/rs=h:100,cg:true,m" />
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/foyle-foundation.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true" />
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/bfi_logo_transp.png/:/rs=h:100,cg:true,m" />
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/Lottery-black.jpg/:/rs=h:100,cg:true,m" />
              </Stack>
            )}
          </Grid>
          {/* Row 2 of images */}
          <Grid item md={12}>
            {isMobile ? (
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                direction={"row"}
                spacing={1}
              >
                <img
                  src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/logo_2023.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true"
                  style={{ width: "60px", height: "60px" }}
                />
                <img
                  src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/animation%20%20company.png/:/rs=h:100,cg:true,m"
                  style={{ width: "60px", height: "60px" }}
                />
                <img
                  src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/future%20youth.png/:/rs=h:100,cg:true,m"
                  style={{ width: "60px", height: "60px" }}
                />
                <img
                  src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/POW.png/:/rs=h:100,cg:true,m"
                  style={{ width: "60px", height: "60px" }}
                />
              </Stack>
            ) : (
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                direction={"row"}
                spacing={20}
              >
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/logo_2023.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true" />
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/animation%20%20company.png/:/rs=h:100,cg:true,m" />
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/future%20youth.png/:/rs=h:100,cg:true,m" />
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/POW.png/:/rs=h:100,cg:true,m" />
              </Stack>
            )}
          </Grid>
          {/*Row 3 of images */}
          <Grid item md={12}>
            {isMobile ? (
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                direction={"row"}
                spacing={1}
              >
                <img
                  src="//isteam.wsimg.com/ip/c75f83f5-5376-471b-af2d-7c3435beb175/margate%20pride.jpe/:/rs=h:100,cg:true,m"
                  style={{ width: "60px", height: "60px" }}
                />
                <img
                  src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/oasis%202.png/:/rs=h:100,cg:true,m"
                  style={{ width: "60px", height: "60px" }}
                />
                <img
                  src="//isteam.wsimg.com/ip/c75f83f5-5376-471b-af2d-7c3435beb175/DYT.jpe/:/rs=h:100,cg:true,m"
                  style={{ width: "60px", height: "60px" }}
                />
                <img
                  src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/powell.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true"
                  style={{ width: "60px", height: "60px" }}
                />
                <img
                  src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/download%20(1).png/:/rs=h:100,cg:true,m"
                  style={{ width: "60px", height: "60px" }}
                />
              </Stack>
            ) : (
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                direction={"row"}
                spacing={20}
              >
                <img src="//isteam.wsimg.com/ip/c75f83f5-5376-471b-af2d-7c3435beb175/margate%20pride.jpe/:/rs=h:100,cg:true,m" />
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/oasis%202.png/:/rs=h:100,cg:true,m" />
                <img src="//isteam.wsimg.com/ip/c75f83f5-5376-471b-af2d-7c3435beb175/DYT.jpe/:/rs=h:100,cg:true,m" />
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/powell.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true" />
                <img src="//img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/download%20(1).png/:/rs=h:100,cg:true,m" />
              </Stack>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
