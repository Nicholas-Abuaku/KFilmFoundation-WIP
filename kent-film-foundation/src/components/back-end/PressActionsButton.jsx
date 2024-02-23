import { Button, Menu, MenuItem, Snackbar } from "@mui/material";
import React, { useState, useContext } from "react";
import { ManageTableContext } from "../../Contexts/ManageTableContext";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
import { Link } from "react-router-dom";
export const PressActionsButton = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSnack, setOpenSnack] = useState(false);
  const { tableUpdate, setTableUpdate } = useContext(ManageTableContext);
  const open = Boolean(anchorEl);
  const API_KEY = import.meta.env.VITE_Laravel_API_KEY;
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "multipart/form-data",
  };

  function handleClose() {
    setAnchorEl(null);
    console.log(props.id);
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        "https://kentfilm.up.railway.app/api/press/" + props.id,
        { headers }
      );
      setOpenSnack(true);
      setTableUpdate(true);
      console.log(response);
      props.onDelete();
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
        id="press-actions-button"
        onClick={handleClick}
        aria-controls={open ? "press-actions" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={<ArrowDropDownIcon />}
      >
        Actions
      </Button>
      <Menu
        id="presss-actions"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{ "aria-labelledby": "press-actions-button" }}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          component={Link}
          to={"/dashboard/press/edit/" + props.id}
        >
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};
