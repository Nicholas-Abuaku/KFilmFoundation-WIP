import { Icon, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import React from "react";
import { Link } from "react-router-dom";

export const SocialMediaLinks = () => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      alignItems={"center"}
      justifyContent={"center"}
      marginBottom={5}
    >
      <IconButton
        sx={{ backgroundColor: "#339465", color: "white" }}
        component={Link}
        to={"https://www.facebook.com/KentFilmFoundation/"}
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        sx={{ backgroundColor: "#339465", color: "white" }}
        component={Link}
        to={"https://www.instagram.com/ramsgatecinema/"}
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        sx={{ backgroundColor: "#339465", color: "white" }}
        component={Link}
        to={"https://twitter.com/kentfilm_uk?lang=en-GB"}
      >
        <XIcon />
      </IconButton>
    </Stack>
  );
};
