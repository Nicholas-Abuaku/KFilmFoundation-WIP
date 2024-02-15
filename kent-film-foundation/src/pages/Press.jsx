import { Grid, Typography } from "@mui/material";
import { PressCardGrid } from "../components/back-end/PressCardGrid";
import { Helmet } from "react-helmet-async";
const Press = () => {
  return (
    <>
      <Helmet>
        <title>Press</title>
        <meta
          name="description"
          content="Discover Kent Film Foundation's news mentions, articles, and impactful contributions to the film industry. Stay informed about our latest initiatives and partnerships."
        />
        <link rel="canonical" href="http://localhost:5173/press" />
      </Helmet>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            textAlign={"center"}
            component={"h2"}
            sx={{ textDecoration: "underline" }}
          >
            Press
          </Typography>
        </Grid>
        <Grid>
          <PressCardGrid />
        </Grid>
      </Grid>
    </>
  );
};

export default Press;
