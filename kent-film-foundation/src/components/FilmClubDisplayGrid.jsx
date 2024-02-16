import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FilmClubDisplayCard } from "./FilmClubDisplayCard";
import axios from "axios";
export const FilmClubDisplayGrid = () => {
  const [filmClubData, setFilmClubData] = useState([]);

  const fetchFilmClubData = async () => {
    try {
      axios.get("http://localhost:8000/api/film-clubs").then((res) => {
        console.log(res.data);
        setFilmClubData(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFilmClubData();
  }, []);
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">Film Clubs</Typography>
        </Grid>
        {filmClubData.map((club) => (
          <Grid item md={6} xs={11} xl={3} key={club.id}>
            <FilmClubDisplayCard
              heading={club.heading}
              img={"http://localhost:8000/storage/" + club.img_Url}
              description={club.description}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
