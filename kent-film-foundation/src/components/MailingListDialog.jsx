import React, { useEffect, useState } from "react";
import { Button, useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, Icon, Stack } from "@mui/material";
import KentFilmLogo from "../assets/icons/RamsgateCinema.jpg";
import { Link } from "react-router-dom";
import Close from "@mui/icons-material/Close";
import MailingDialogTheme from "../Theme/MailingDialogTheme";
export const MailingListDialog = (props) => {
  const closedPopUp = window.sessionStorage.getItem("closedMailingPopUp");
  const [open, setOpen] = useState(closedPopUp !== "true");
  const isMobile = useMediaQuery(MailingDialogTheme.breakpoints.down("md"));
  const handleClose = () => {
    window.sessionStorage.setItem("closedMailingPopUp", "true");
    setOpen(false);
  };

  const styles = {
    backgroundColor: "#339465",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    xs: {
      width: "100%",
      height: "auto",
    },
    md: {
      width: "31.25vw",
      height: "64.72491909385113vh",
    },
  };

  useEffect(() => {
    const closedPopUp = window.sessionStorage.getItem("closedMailingPopUp");
    if (closedPopUp == true) {
      setOpen(false);
    }
  }, []);

  return (
    <ThemeProvider theme={createTheme(MailingDialogTheme)}>
      {isMobile ? (
        <Dialog onClose={handleClose} open={open}>
          <Box sx={{ styles }}>
            <DialogTitle textAlign={"center"}>
              <img src={KentFilmLogo} width={128} height={128} />
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Stack direction={"column"} spacing={2} marginBottom={10}>
                <Typography textAlign={"center"}>
                  Never miss a screening again!
                </Typography>
                <Typography textAlign={"center"} variant="h4">
                  Subscribe to our Mailing List
                </Typography>
              </Stack>
              <Typography
                sx={{
                  display: "block",
                  margin: "auto",
                  textAlign: "center",
                  color: "white",
                  textDecoration: "none",
                }}
                component={Link}
                to={"https://forms.gle/wLES8Bm7or54U58RA"}
              >
                Click Here!
              </Typography>

              <Typography
                textAlign={"center"}
                color={"white"}
                marginTop={20}
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={handleClose}
              >
                No Thanks
              </Typography>
            </DialogContent>
          </Box>
        </Dialog>
      ) : (
        <Dialog onClose={handleClose} open={open}>
          <Box
            width={"31.25vw"}
            height={"64.72491909385113vh"}
            sx={{
              backgroundColor: "#339465",
              color: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DialogTitle textAlign={"center"}>
              <img src={KentFilmLogo} width={128} height={128} />
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Stack direction={"column"} spacing={2} marginBottom={10}>
                <Typography textAlign={"center"}>
                  Never miss a screening again!
                </Typography>
                <Typography textAlign={"center"} variant="h4">
                  Subscribe to our Mailing List
                </Typography>
              </Stack>
              <Typography
                sx={{
                  display: "block",
                  margin: "auto",
                  textAlign: "center",
                  color: "white",
                  textDecoration: "none",
                }}
                component={Link}
                to={"https://forms.gle/wLES8Bm7or54U58RA"}
              >
                Click Here!
              </Typography>

              <Typography
                textAlign={"center"}
                color={"white"}
                marginTop={20}
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={handleClose}
              >
                No Thanks
              </Typography>
            </DialogContent>
          </Box>
        </Dialog>
      )}
    </ThemeProvider>
  );
};
