import { TextField, Typography, Stack, Grid, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { ManageLoginContext } from "../../Contexts/ManageLoginContext";
import { Link } from "react-router-dom";
import axios from "axios";

export const LoginPage = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(ManageLoginContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function logIn() {
    setIsLoggedIn(true);
    window.sessionStorage.setItem("isLoggedIn", true);
  }

  const handleLogin = async (event) => {
    try {
      const formData = new FormData();
      formData.append("name", userName);
      formData.append("password", password);
      event.preventDefault();
      const response = await axios.post(
        "http://localhost:8000/api/login",
        formData
      );
      console.log(response.data);
      if (response.data.status === true) {
        logIn();
      } else {
        console.log(response.data.message);
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
    >
      <Grid item xs={12}>
        <form>
          <Stack
            direction="column"
            spacing={2}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="h3">Login</Typography>
            <TextField
              name="username"
              label="username"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              sx={{ width: "50%" }}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              sx={{ width: "50%" }}
            />
            <Button
              variant="contained"
              onClick={handleLogin}
              component={Link}
              to={"/dashboard"}
            >
              Login
            </Button>
            <Typography>{isLoggedIn ? "Sweet" : "Stink"}</Typography>
          </Stack>
        </form>
      </Grid>
    </Grid>
  );
};
