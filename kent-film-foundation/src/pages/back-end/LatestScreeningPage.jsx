import { Grid, Typography, Stack, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { EditLatestScreening } from "../../components/back-end/EditLatestScreening";
import { Helmet } from "react-helmet-async";

const LatestScreeningPage = () => {
  return (
    <>
      <Helmet>
        <title>Edit Latest Screening</title>
        <meta name="description" content="Manage Film Clubs" />
        <link
          rel="canonical"
          href="https://kentfilmfoundation.netlify.app/dashboard/edit-latest-screening"
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" textAlign={"center"}>
            {" "}
            Edit Latest Screening
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" spacing={2}>
            <IconButton component={Link} to={"/dashboard"}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h3">Preview</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <EditLatestScreening />
        </Grid>
      </Grid>
    </>
  );
};

export default LatestScreeningPage;
