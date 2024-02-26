import React, { useContext, useState } from "react";
import { FilmClubTable } from "../../components/back-end/FilmClubTable";
import { ManageTableContext } from "../../Contexts/ManageTableContext";
import { Button, Grid, Stack, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const FilmClubManager = () => {
  const [tableUpdate, setTableUpdate] = useState(false);
  return (
    <>
      <Helmet>
        <title>Film Clubs</title>
        <meta name="description" content="Manage Film Clubs" />
        <link
          rel="canonical"
          href="https://kentfilmfoundation.netlify.app/dashboard/film-clubs"
        />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Grid container>
        <Grid item xs={12}>
          <Stack direction={"row"} spacing={2}>
            <IconButton component={Link} to={"/dashboard"}>
              <ArrowBackIcon />
            </IconButton>
            <h1>Film Clubs</h1>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <ManageTableContext.Provider value={{ tableUpdate, setTableUpdate }}>
            <FilmClubTable />
          </ManageTableContext.Provider>
        </Grid>
      </Grid>
    </>
  );
};
export default FilmClubManager;
