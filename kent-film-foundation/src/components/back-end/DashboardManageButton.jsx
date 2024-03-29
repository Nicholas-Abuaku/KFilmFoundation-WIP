import {
  Card,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  Icon,
  CardActionArea,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
export const DashboardManageButton = (props) => {
  return (
    <CardActionArea
      sx={{ width: "300px", height: "140px" }}
      component={Link}
      to={"/dashboard/film-clubs"}
    >
      <Card
        sx={{
          width: "300px",
          height: "140px",
          background:
            "linear-gradient(90deg, rgba(0,36,4,1) 0%, rgba(43,125,74,1) 50%)",
          color: "white",
        }}
      >
        <CardContent>
          <Stack direction={"row"} spacing={1}>
            <Typography variant="h4">Manage Film Clubs</Typography>
            <Icon sx={{ height: "40px" }}>
              <ManageHistoryIcon />
            </Icon>
          </Stack>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};
