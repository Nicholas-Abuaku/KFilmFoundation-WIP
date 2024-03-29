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
import MCardTheme from "../Theme/MCardTheme";
export const MCard = (props) => {
  function handleClick() {
    console.log(props.link);
  }
  const isMobile = useMediaQuery(MCardTheme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={createTheme(MCardTheme)}>
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
                <Typography
                  fontWeight={"bold"}
                  variant="h5"
                  component="h3"
                  fontFamily={"Open Sans, arial, sans-serif"}
                >
                  {props.title}
                </Typography>
              </Stack>

              <Typography fontWeight={"bold"} variant="h6" component={"h4"}>
                {props.date + " " + props.time}
              </Typography>

              <Typography sx={{ marginTop: "10px" }}>
                {props.description}
              </Typography>
            </Box>
          </Card>
        ) : (
          <Card
            sx={{
              width: "29.59vw",
              height: "250px",
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
                width: "200px",
                height: "auto",
                // minHeight: "100%",
                // maxHeight: "29vh",
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
              <Typography
                fontWeight={"bold"}
                variant="subtitle1"
                component="h4"
              >
                {props.date + " " + props.time}
              </Typography>

              <Typography sx={{ marginTop: "10px" }}>
                {props.description}
              </Typography>
            </Box>
          </Card>
        )}
      </CardActionArea>
    </ThemeProvider>
  );
};
