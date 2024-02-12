import React, { useState, useReducer } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
export const FilmClubActions = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openSnack, setOpenSnack] = useState();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log(props.id);
  };

  const API_KEY = import.meta.env.VITE_Laravel_API_KEY;
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "multipart/form-data",
  };

  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:8000/api/film-clubs/" + props.id,
        { headers }
      );
      setOpenSnack(true);
      window.location.reload();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Snackbar
        open={openSnack}
        autoHideDuration={200000}
        onClose={() => console.log("Close")}
        message="Film Club Deleted"
      />
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
        <MenuItem
          onClick={handleClose}
          component={Link}
          to={"/dashboard/film-clubs/edit/" + props.id}
        >
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};
