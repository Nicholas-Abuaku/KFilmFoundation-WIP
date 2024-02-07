import {
  Card,
  Paper,
  CardMedia,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export const PressCard = (props) => {
  return (
    <Paper
      elevation={4}
      sx={{
        width: "430px",
        height: "100%",
        marginTop: "100px",
        marginBottom: "40px",
        marginLeft: "0.875rem",
      }}
    >
      <Card width={"100%"} height={"100%"}>
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
              {
                "Ramsgate shop being transformed into community cinema by Kent Film Foundation"
              }
            </Typography>
            <Typography textAlign={"center"} variant="subtitle2">
              {props.desc}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Paper>
  );
};
