import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Icon,
  CardActionArea,
  Skeleton,
  useTheme,
  useMediaQuery,
  createTheme,
} from "@mui/material";
import PGIcon from "../assets/icons/bbfc-pg-certificate-uk-seeklogo.svg";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
export const MCard = (props) => {
  function handleClick() {
    console.log(props.link);
  }
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const textTheme = createTheme();

  textTheme.typography.h5 = {
    fontSize: "0.9rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };
  textTheme.typography.h6 = {
    fontSize: "0.9rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  return (
    <CardActionArea component={Link} to={props.link}>
      {isMobile ? (
        <Card
          sx={{
            width: "35vw",
            height: "29vh",
            display: "flex",
            backgroundColor: "#F0F0ED ",
            color: "black",
          }}
          elevation={10}
        >
          <CardMedia
            component="img"
            image={props.img}
            title={props.title}
            alt={"Movie poster for " + props.title}
            loading="lazy"
            sx={{
              maxWidth: "8.5vw",
              minHeight: "29vh",
              maxHeight: "29vh",
              objectFit: "scale-down",
              marginRight: "5px",
            }}
          />
          {/* <Skeleton variant='rectangular' width={400} height={274.05}/> */}
          <Box sx={{ wordWrap: "break-word", overflow: "auto" }}>
            <Stack direction={"row"} spacing={2}>
              <ThemeProvider theme={textTheme}>
                <Typography
                  fontWeight={"bold"}
                  variant="h5"
                  component="h3"
                  fontFamily={"Open Sans, arial, sans-serif"}
                >
                  {props.title}
                </Typography>
              </ThemeProvider>
            </Stack>
            <ThemeProvider theme={textTheme}>
              <Typography fontWeight={"bold"} variant="h6" component={"h4"}>
                {props.date + " " + props.time}
              </Typography>
            </ThemeProvider>
            <Typography sx={{ marginTop: "10px" }}>
              {props.description}
            </Typography>
          </Box>
        </Card>
      ) : (
        <Card
          sx={{
            width: "29.59vw",
            height: "32vh",
            // height: "29vh",
            display: "flex",
            backgroundColor: "#F0F0ED ",
            color: "black",
          }}
          elevation={10}
        >
          <CardMedia
            component="img"
            image={props.img}
            title={props.title}
            sx={{
              maxWidth: "8.5vw",
              minHeight: "29vh",
              maxHeight: "29vh",
              objectFit: "contain",
              marginRight: "5px",
            }}
            alt="Latest screening poster"
            loading="lazy"
          />
          {/* <Skeleton variant='rectangular' width={400} height={274.05}/> */}
          <Box sx={{ wordWrap: "break-word", overflow: "auto" }}>
            <Stack direction={"row"} spacing={10}>
              <Typography
                fontWeight={"bold"}
                variant="h6"
                component="h3"
                fontFamily={"Open Sans, arial, sans-serif"}
              >
                {props.title}
              </Typography>
            </Stack>
            <Typography fontWeight={"bold"} variant="subtitle1" component="h4">
              {props.date + " " + props.time}
            </Typography>

            <Typography sx={{ marginTop: "10px" }}>
              {props.description}
            </Typography>
          </Box>
        </Card>
      )}
    </CardActionArea>
  );
};
