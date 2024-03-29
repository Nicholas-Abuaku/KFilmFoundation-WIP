import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Stack,
  CssBaseline,
  useTheme,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import KentFilmLogo from "../assets/icons/RamsgateCinema.jpg";
import { NavDrawer } from "./NavDrawer";
import { ManageLoginContext } from "../Contexts/ManageLoginContext";
import { Link } from "react-router-dom";
import NavbarTheme from "../Theme/NavbarTheme";
export const Navigation2 = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(ManageLoginContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={createTheme(NavbarTheme)}>
      <AppBar position="static" elevation={0}>
        <Toolbar
          sx={{ backgroundColor: "#339465", width: "100%", height: "100px" }}
        >
          <IconButton
            component={Link}
            to={"/"}
            sx={{ float: "left" }}
            disableRipple
          >
            <img
              src={KentFilmLogo}
              width={80}
              height={80}
              title="Kent Film Foundation Logo"
              alt="A white seagull flying with a white clapperboard in its mouth "
              loading="eager"
            />
          </IconButton>
          <Stack direction={"column"}>
            <Typography
              sx={{
                flexGrow: "1",
                color: "white",
                fontWeight: "bold",
                flexBasis: "100%",
              }}
              variant="h5"
              component="h1"
            >
              {" "}
              Kent Film Foundation
            </Typography>
            <Typography>Ramsgate Community Cinema</Typography>
          </Stack>
          {isMobile ? (
            <NavDrawer />
          ) : (
            <Stack direction={"row"} spacing={2} sx={{ marginLeft: "auto" }}>
              <Button variant="text" color="inherit" component={Link} to={"/"}>
                Home
              </Button>
              <Button
                variant="text"
                color="inherit"
                component={Link}
                to={"/film-clubs"}
              >
                Film Clubs
              </Button>
              <Button
                variant="text"
                color="inherit"
                component={Link}
                to={"/press"}
              >
                Press
              </Button>
              <Button
                variant="text"
                color="inherit"
                component={Link}
                to={"/about"}
              >
                About
              </Button>
              <Button
                variant="text"
                color="inherit"
                component={Link}
                to={"/contact"}
              >
                Contact Us
              </Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
