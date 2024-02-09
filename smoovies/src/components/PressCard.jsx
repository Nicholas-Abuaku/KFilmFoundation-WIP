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
            {props.title}
          </Typography>
          <Typography textAlign={"center"} variant="subtitle2">
            {
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam maxime laboriosam illo voluptates? Corporis aliquam maiores minima reiciendis, officiis ut ducimus odit, autem suscipit blanditiis deleniti deserunt consequatur repellendus dolorem! Ut consectetur illum hic debitis laudantium at pariatur veritatis voluptas!"
            }
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
