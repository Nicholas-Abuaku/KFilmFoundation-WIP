import React, { useEffect, useState } from "react";
import { Grid, useTheme, createTheme, Skeleton } from "@mui/material";
import { LatestScreeningCard } from "../components/LatestScreeningCard";
import { CardGridPaginated } from "../components/CardGridPaginated";
import axios from "axios";

export const Home = () => {
  const [latestScreeningData, setLatestScreeningData] = useState([]);
  const [latestScreeningDate, setLatestScreeningDate] = useState(null);
  const [latestScreeningTime, setLatestScreeningTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const textTheme = createTheme();
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
      // console.log(response.data[0]);
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
    </Grid>
  );
};
