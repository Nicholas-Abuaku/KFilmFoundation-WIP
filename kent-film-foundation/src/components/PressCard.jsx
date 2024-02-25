import {
  Card,
  Paper,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";
import PressCardTheme from "../Theme/PressCardTheme";
import { Link } from "react-router-dom";
export const PressCard = (props) => {
  const { newsSource, articleTitle, articleUrl, image } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={createTheme(PressCardTheme)}>
      {isMobile ? (
        <Card
          width={"100%"}
          sx={{
            backgroundColor: "#339465",
            height: "auto",
            width: "90%",
            color: "white",
            marginLeft: "10px",
            marginBottom: "30px",
            borderRadius: "0px",
          }}
        >
          <CardMedia
            component={"img"}
            height={"300px"}
            src={image}
            loading="eager"
            title={props.articleTitle}
            alt={"News coverage from " + props.newsSource}
          />
          <CardContent>
            <Stack spacing={0}>
              <Typography
                textAlign={"center"}
                fontWeight={"bold"}
                variant="subtitle1"
                component={"h3"}
              >
                {newsSource}
              </Typography>
              <Typography textAlign={"center"} variant="body1">
                {articleTitle}
              </Typography>
            </Stack>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              marginTop={2}
            >
              <Button
                variant="outlined"
                color="inherit"
                component={Link}
                to={articleUrl}
              >
                Learn More
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ) : (
        <Card
          elevation={24}
          width={"100%"}
          sx={{
            backgroundColor: "#339465",
            height: "500px",
            maxWidth: "550px",
            width: "100%",
            color: "white",
            marginBottom: "10px",
            display: "flex",
            flexDirection: "column",
            // borderRadius: "0px",
          }}
        >
          <CardMedia
            component={"img"}
            height={"70%"}
            src={image}
            loading="eager"
            title={props.articleTitle}
            alt={"News coverage from " + props.newsSource}
          />
          <CardContent height={"100%"}>
            <Stack spacing={0}>
              <Typography
                textAlign={"center"}
                fontWeight={"bold"}
                variant="subtitle1"
                component={"h3"}
              >
                {newsSource}
              </Typography>
              <Typography textAlign={"center"} variant="body1">
                {articleTitle}
              </Typography>
            </Stack>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              marginTop={2}
            >
              <Button
                variant="outlined"
                color="inherit"
                component={Link}
                to={articleUrl}
              >
                Learn More
              </Button>
            </Stack>
          </CardContent>
        </Card>
      )}
    </ThemeProvider>
  );
};
