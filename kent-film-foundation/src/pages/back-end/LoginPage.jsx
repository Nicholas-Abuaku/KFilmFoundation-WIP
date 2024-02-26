import { TextField, Typography, Stack, Grid, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { ManageLoginContext } from "../../Contexts/ManageLoginContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const LoginPage = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(ManageLoginContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function logIn() {
    setIsLoggedIn(true);
    window.sessionStorage.setItem("isLoggedIn", true);

    navigate("/dashboard");
  }

  const handleLogin = async (event) => {
    try {
      const formData = new FormData();
      formData.append("name", userName);
      formData.append("password", password);
      event.preventDefault();
      const response = await axios.post(
        "https://kentfilm.up.railway.app/api/login",
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
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login" />
        <link
          rel="canonical"
          href="https://kentfilmfoundation.netlify.app/login"
        />
        <meta name="robots" content="noindex" />
      </Helmet>
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
            </Stack>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;
