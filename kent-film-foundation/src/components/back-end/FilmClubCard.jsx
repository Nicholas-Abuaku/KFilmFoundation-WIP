import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Paper,
  CardContent,
  Stack,
  Typography,
  Alert,
} from "@mui/material";
import React from "react";

export const FilmClubCard = (props) => {
  const { desc, heading, img } = props;
  const renderDescription = () => {
    const descriptionText = desc || ""; // Use an empty string if desc is undefined
    return descriptionText.split("\n").map((paragraph, index) => (
      <Typography key={index} textAlign={"center"} variant="subtitle2">
        {paragraph}
      </Typography>
    ));
  };
  return (
    <Paper
      elevation={4}
      sx={{
        width: "430px",
        height: "100%",
        marginTop: "0px",
        marginBottom: "40px",
        marginLeft: "0.875rem",
      }}
    >
      <Card width={"100%"} height={"100%"}>
        <CardMedia component={"img"} height={"300px"} src={img} />
        <CardContent>
          <Stack spacing={0}>
            <Typography
              textAlign={"center"}
              fontWeight={"bold"}
              variant="subtitle1"
            >
              {heading}
            </Typography>
            {renderDescription()}
          </Stack>
        </CardContent>
      </Card>
    </Paper>
  );
};
