import { Button, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PaidIcon from "@mui/icons-material/Paid";

export const PayPalDonate = () => {
  return (
    <Button
      endIcon={<PaidIcon />}
      variant="contained"
      sx={{ borderRadius: "20px", backgroundColor: "#339465", float: "right" }}
    >
      Donate
    </Button>
  );
};
