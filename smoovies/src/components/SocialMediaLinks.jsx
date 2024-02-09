import { Icon, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import React from "react";

export const SocialMediaLinks = () => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      alignItems={"center"}
      justifyContent={"center"}
      marginBottom={5}
    >
      <IconButton sx={{ backgroundColor: "#339465", color: "white" }}>
        <FacebookIcon />
      </IconButton>
      <IconButton sx={{ backgroundColor: "#339465", color: "white" }}>
        <InstagramIcon />
      </IconButton>
      <IconButton sx={{ backgroundColor: "#339465", color: "white" }}>
        <XIcon />
      </IconButton>
    </Stack>
  );
};
