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
  const { img, heading, description } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMobile ? (
        <Card sx={{ width: "90%", height: "auto", marginLeft: "4%" }}>
          <CardMedia component={"img"} height={"30%"} src={img} />
          <CardContent>
            <Stack spacing={2}>
              <Typography
                textAlign={"center"}
                variant="subtitle1"
                fontWeight={"bold"}
              >
                {heading}
              </Typography>
              <Typography textAlign={"center"} variant="body1">
                {description}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      ) : (
        <Card
          width={"100%"}
          height={"100%"}
          sx={{
            width: "422px",
            height: "50%",
            marginLeft: "0.875rem",
            marginTop: "40px",
          }}
        >
          <CardMedia component={"img"} height={"300px"} src={img} />
          <CardContent>
            <Stack spacing={2}>
              <Typography
                textAlign={"center"}
                variant="subtitle1"
                fontWeight={"bold"}
              >
                {heading}
              </Typography>
              <Typography textAlign={"center"} variant="subtitle2">
                {description}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      )}
    </>
  );
};
