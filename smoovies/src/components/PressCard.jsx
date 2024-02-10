import {
  Card,
  Paper,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

export const PressCard = (props) => {
  return (
    <Card
      width={"100%"}
      sx={{
        backgroundColor: "#339465",
        minHeight: "462px",
        width: "369.5px",
        color: "white",
        marginLeft: "10px",
        marginBottom: "30px",
        borderRadius: "0px",
      }}
    >
      <CardMedia
        component={"img"}
        height={"300px"}
        src={
          "https://theisleofthanetnews.com/wp-content/uploads/2023/12/kffshop.jpg"
        }
      />
      <CardContent>
        <Stack spacing={0}>
          <Typography
            textAlign={"center"}
            fontWeight={"bold"}
            variant="subtitle1"
          >
            {"The Isle of Thanet News"}
          </Typography>
          <Typography textAlign={"center"} variant="body1">
            Ramsgate shop being transformed into community cinema by Kent Film
            Foundation
          </Typography>
        </Stack>
        <Stack alignItems={"center"} justifyContent={"center"} marginTop={2}>
          <Button variant="outlined" color="inherit">
            Learn More
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
