import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
export const FilmClubDisplayCard = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMobile ? (
        <Card
          sx={{
            width: "100%",
            height: "auto",
            marginLeft: "4%",
            marginBottom: "4px",
          }}
          elevation={12}
        >
          <CardMedia component={"img"} height={"30%"} src={props.img} />
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
      ) : (
        <Card
          elevation={12}
          sx={{
            width: "422px",
            marginLeft: "0.875rem",
            marginTop: "40px",
          }}
        >
          <CardMedia component={"img"} height={"300px"} src={props.img} />
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
    </>
  );
};
