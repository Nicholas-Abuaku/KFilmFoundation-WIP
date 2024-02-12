import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export const FilmClubActions = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log(props.id);
  };
  return (
    <>
      <Button
        variant="contained"
        color="warning"
        id="film-clubs-actions-button"
        onClick={handleClick}
        aria-controls={open ? "film-clubs-actions" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={<ArrowDropDownIcon />}
      >
        Actions
      </Button>
      <Menu
        id="film-clubs-actions"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{ "aria-labelledby": "film-clubs-actions-button" }}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </>
  );
};
