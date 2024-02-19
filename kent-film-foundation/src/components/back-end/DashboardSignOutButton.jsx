import {
  Card,
  CardMedia,
  CardContent,
  Stack,
  Typography,
  Icon,
  CardActionArea,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import { ManageLoginContext } from "../../Contexts/ManageLoginContext";
export const DashboardSignOutButton = (props) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(ManageLoginContext);
  function signOut() {
    setIsLoggedIn(false);
    window.sessionStorage.removeItem("isLoggedIn");
  }
  return (
    <CardActionArea
      sx={{ width: "300px", height: "140px" }}
      //   component={Link}
      //   to={"/"}
      onClick={signOut}
    >
      <Card
        sx={{
          width: "300px",
          height: "140px",
          //   background:
          //     "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% );",
          backgroundImage:
            "radial-gradient( circle farthest-corner at 17.1% 22.8%,  rgba(226,24,24,1) 0%, rgba(160,6,6,1) 90% )",
          color: "white",
        }}
      >
        <CardContent>
          <Stack direction={"row"} spacing={1}>
            <Typography variant="h4">Sign Out</Typography>
            <Icon sx={{ height: "40px" }}>
              <ManageHistoryIcon />
            </Icon>
          </Stack>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};
