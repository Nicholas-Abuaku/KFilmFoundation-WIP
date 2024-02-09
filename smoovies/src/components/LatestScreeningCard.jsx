import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { LatestScreeningSkeleton } from "./LatestScreeningSkeleton";
import {
  Box,
  CardActionArea,
  CardHeader,
  Typography,
  useTheme,
  useMediaQuery,
  createTheme,
  Skeleton,
  Button,
  Stack,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
export const LatestScreeningCard = (props) => {
  const theme = useTheme();
  const textTheme = createTheme();
  const [isLoading, setIsLoading] = useState(false);
  textTheme.typography.h1 = {
    fontSize: "0.9rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  textTheme.typography.h4 = {
    fontSize: "0.8rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return isMobile ? (
    <>
      <Card
        sx={{
          display: "inline",
          width: "100%",
          minHeight: "464.2px",
          maxHeight: "682px",
          borderRadius: "0px",
        }}
      >
        <Box>
          <CardMedia
            component={"img"}
            width={"900px"}
            height={"100%"}
            src={
              props.edit
                ? props.img
                : "http://localhost:8000/storage/" + props.img
            }
            sx={{ objectFit: "objectFit", marginRight: "0px" }}
          />
        </Box>
        <CardContent
          sx={{
            backgroundColor: "#1A1A1A",
            color: "white",
            wordBreak: "break-word",
          }}
        >
          <Stack direction={"column"} alignItems={"center"} spacing={2}>
            <ThemeProvider theme={textTheme}>
              <Typography textAlign={"center"} variant="h1">
                {props.title}
              </Typography>

              <Typography
                color={"white"}
                paddingBottom={4}
                textAlign={"center"}
                variant="h4"
              >
                {props.date}
              </Typography>
              <Typography textAlign={"center"}>{props.description}</Typography>
              <Button
                variant="contained"
                color="inherit"
                sx={{
                  borderRadius: "20px",
                  color: "black",
                  height: "50px",
                  width: "160px",
                }}
              >
                Tickets
              </Button>
            </ThemeProvider>
          </Stack>
        </CardContent>
      </Card>
    </>
  ) : (
    <Card
      sx={{ display: "flex", minHeight: "682px" }}
      width={"900px"}
      height={"63.49vh"}
    >
      <Box maxHeight={"500px"} maxWidth={"974px"}>
        {props.img && typeof props.img === "object" ? (
          // Render something different when props.img is an object
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={962}
            height={465}
          />
        ) : (
          // Render the regular image when props.img is not an object
          <CardMedia
            component={"img"}
            width={"900px"}
            height={"100%"}
            src={
              props.edit
                ? props.img
                : "http://localhost:8000/storage/" + props.img
            }
            sx={{
              objectFit: "cover",
              marginRight: "0px",
              minWidth: "900px",
              minHeight: "682px",
            }}
          />
        )}
      </Box>
      <CardContent
        sx={{
          backgroundColor: "#1A1A1A",
          color: "white",
          wordBreak: "break-word",
          minWidth: "50%",
        }}
      >
        <Stack direction={"column"} alignItems={"center"} spacing={2}>
          <Typography textAlign={"center"} variant="h1">
            {props.title}
          </Typography>
          <Typography
            color={"white"}
            paddingBottom={4}
            textAlign={"center"}
            variant="h4"
          >
            {props.date}
          </Typography>
          <Typography textAlign={"center"}>{props.description}</Typography>
          <Button
            variant="contained"
            color="inherit"
            sx={{
              borderRadius: "20px",
              color: "black",
              height: "50px",
              width: "160px",
            }}
          >
            Tickets
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
