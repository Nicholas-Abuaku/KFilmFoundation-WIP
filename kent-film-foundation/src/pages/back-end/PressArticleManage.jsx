import { IconButton, Stack, Typography, Grid, Button } from "@mui/material";
import { ManageTableContext } from "../../Contexts/ManageTableContext";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PressArticleTable } from "../../components/back-end/PressArticleTable";
import { Link } from "react-router-dom";
const PressArticleManage = () => {
  const [tableUpdate, setTableUpdate] = useState(false);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Stack direction={"row"} spacing={2}>
          <IconButton component={Link} to={"/dashboard"}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h3">Press Articles</Typography>
        </Stack>
        <Button
          variant="contained"
          color="success"
          sx={{ float: "right" }}
          component={Link}
          to={"/dashboard/press/new"}
        >
          Add
        </Button>
      </Grid>
      <Grid item xs={12}>
        <ManageTableContext.Provider value={{ tableUpdate, setTableUpdate }}>
          <PressArticleTable />
        </ManageTableContext.Provider>
      </Grid>
    </Grid>
  );
};

export default PressArticleManage;
