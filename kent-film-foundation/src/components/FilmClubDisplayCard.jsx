import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import FilmCardTheme from "../Theme/FilmCardTheme";
export const FilmClubDisplayCard = (props) => {
  const isMobile = useMediaQuery(FilmCardTheme.breakpoints.down("md"));
  return (
    <ThemeProvider theme={createTheme(FilmCardTheme)}>
      {isMobile ? (
        <Card
          sx={{
            width: "100%",
            height: "auto",
            marginLeft: "4%",
            marginBottom: "4px",
            backgroundColor: "#339465",
            color: "white",
          }}
          elevation={12}
        >
          <CardMedia
            component={"img"}
            height={"30%"}
            src={props.img}
            alt={props.heading}
            title={props.heading}
            loading="lazy"
          />
          <CardContent>
            <Stack spacing={2}>
              <Typography textAlign={"center"} variant="h6" fontWeight={"bold"}>
                {props.heading}
              </Typography>
              <Typography
                textAlign={"center"}
                variant="subtitle1"
                component={"h4"}
              >
                {props.description}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      ) : (
        <Card
          elevation={12}
          sx={{
            width: "80%",
            marginLeft: "0.875rem",
            marginTop: "40px",
            backgroundColor: "#339465",
            color: "white",
          }}
        >
          <CardMedia
            component={"img"}
            height={"300px"}
            src={props.img}
            alt={props.heading}
            title={props.heading}
            loading="lazy"
          />
          <CardContent>
            <Stack spacing={2}>
              <Typography textAlign={"center"} variant="h6" fontWeight={"bold"}>
                {props.heading}
              </Typography>
              <Typography textAlign={"center"} variant="subtitle1">
                {props.description}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      )}
    </ThemeProvider>
  );
};
