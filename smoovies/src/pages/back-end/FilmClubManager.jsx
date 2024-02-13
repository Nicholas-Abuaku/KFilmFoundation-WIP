import React, { useContext, useState } from "react";
import { FilmClubTable } from "../../components/back-end/FilmClubTable";
import { ManageTableContext } from "../../Contexts/ManageTableContext";
import { Button, Grid, Stack, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
export const FilmClubManager = () => {
  const [tableUpdate, setTableUpdate] = useState(false);
  return (
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
  );
};
