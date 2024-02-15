import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { ButtonGrid } from "../../components/back-end/ButtonGrid";
import { DashboardAnalytics } from "../../components/back-end/DashboardAnalytics";

const Dashboard = () => {
  const todayDate = new Date();
  return (
    <Grid container>
      <Grid item xs={12} sx={{ backgroundColor: "grey" }}>
        <Typography variant="h3">Dashboard</Typography>
        <Typography>Welcome!</Typography>
      </Grid>
      <Grid item xs={3}>
        <ButtonGrid />
      </Grid>
      <Grid item xs={12}>
        <DashboardAnalytics />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
