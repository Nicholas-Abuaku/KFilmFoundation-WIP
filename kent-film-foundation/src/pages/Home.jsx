import React, { useEffect, useState, useContext } from "react";
import {
  Grid,
  useTheme,
  createTheme,
  Skeleton,
  Button,
  Typography,
} from "@mui/material";
import { LatestScreeningCard } from "../components/LatestScreeningCard";
import { CardGridPaginated } from "../components/CardGridPaginated";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { PayPalDonate } from "../components/PayPalDonate";
import { ManageLoginContext } from "../Contexts/ManageLoginContext";
export const Home = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(ManageLoginContext);
  const [latestScreeningData, setLatestScreeningData] = useState([
    {
      heading: "Hello",
    },
  ]);
  const [latestScreeningDate, setLatestScreeningDate] = useState(null);
  const [latestScreeningTime, setLatestScreeningTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const textTheme = createTheme();
  const API_KEY = import.meta.env.VITE_Laravel_API_KEY;
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
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Explore films at Ramsgate Community Cinema. Check this month's screenings, enjoy events, and connect on social media. Your cinematic journey begins here!"
        />
        <link rel="canonical" href="http://localhost:5173/" />
        <meta property="og:title" content="Kent Film Foundation" />
        <meta
          property="og:description"
          content="Kent Film Foundation Home | What's On"
        />
        <meta
          property="og:image"
          content="https://img1.wsimg.com/isteam/ip/c75f83f5-5376-471b-af2d-7c3435beb175/logo/c5a56d23-b292-4dd3-b3fa-06fdeadebab1.jpg/:/rs=h:80,cg:true,m/qt=q:95"
        />
        <meta property="og:url" content="http://localhost:5173/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Kent Film Foundation" />
        <meta
          name="twitter:description"
          content="Explore films at Ramsgate Community Cinema. Check this month's screenings, enjoy events, and connect on social media. Your cinematic journey begins here!"
        />
        {/* <meta name="twitter:image" content="URL to your image for Twitter" /> */}
      </Helmet>
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
          marginBottom={6}
          marginTop={0}
        >
          {isLoading ? (
            <LatestScreeningCard
              title={latestScreeningData.heading}
              date={latestScreeningDate}
              time={latestScreeningTime}
              description={latestScreeningData.description}
              img={latestScreeningData.img_Url}
              url={latestScreeningData.eventUrl}
              edit={false}
            />
          ) : (
            <LatestScreeningCard
              title={
                <>
                  <Skeleton variant="text" animation="wave" width={900} />
                  <Skeleton variant="text" animation="wave" width={900} />
                </>
              }
              date={<Skeleton variant="text" width={300} />}
              img={<Skeleton variant="rectangular" animation="wave" />}
            />
          )}
        </Grid>
        <Grid item>
          <CardGridPaginated />
        </Grid>
        <Grid item>
          <PayPalDonate />
          <Typography>{isLoggedIn ? "In" : "Out"}</Typography>
        </Grid>
      </Grid>
    </>
  );
};
