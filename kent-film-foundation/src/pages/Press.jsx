import {
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { PressCardGrid } from "../components/back-end/PressCardGrid";
import { Helmet } from "react-helmet-async";
import PressTheme from "../Theme/PressTheme";
const Press = () => {
  const isMobile = useMediaQuery(PressTheme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={createTheme(PressTheme)}>
      <Helmet>
        <title>
          Kent Film Foundation Cinema: News, Events & Press Releases
        </title>
        <meta
          name="description"
          content="Discover Kent Film Foundation's news mentions, articles, and impactful contributions to the film industry. Stay informed about our latest initiatives and partnerships."
        />
        <link rel="canonical" href="http://localhost:5173/press" />
      </Helmet>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item md={12} xs={12} marginBottom={0}>
          <Typography variant="h3" textAlign={"center"} component={"h2"}>
            Kent Film Foundation in the Press
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <PressCardGrid />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Press;
