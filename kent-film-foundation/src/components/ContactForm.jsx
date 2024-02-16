import {
  Box,
  Button,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
  useTheme,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";

export const ContactForm = () => {
  const theme = useTheme();
  const textTheme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  theme.typography.h4 = {
    fontSize: "0.5 rem",
    fontFamily: "Open Sans, arial, sans-serif",
    "@media (min-width:600px)": {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
  };

  theme.typography.body = {
    fontSize: "0.5 rem",
    fontFamily: "Open Sans, arial, sans-serif",
    "@media (min-width:600px)": {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "0.5rem",
    },
  };
  theme.typography.h6 = {
    fontSize: "1 rem",
    fontFamily: "Open Sans, arial, sans-serif",
    "@media (min-width:600px)": {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
  };

  return (
    <>
      {isMobile ? (
        <Box width={"90%"}>
          <form style={{ width: "100%" }}>
            <Typography
              textAlign={"left"}
              variant="h6"
              component={"h2"}
              color={"#339465"}
            >
              Contact Us
            </Typography>
            <Stack direction={"column"} spacing={2}>
              <TextField type="text" name="Name" label="Name" required />
              <TextField type="email" name="Email" label="Email" required />
              <TextField
                type="text"
                name="mesasge"
                label="Message"
                multiline
                rows={8}
                required
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#339465",
                  borderRadius: "0px",
                  width: "10px",
                  alignSelf: "center",
                }}
                type="submit"
              >
                Send
              </Button>
            </Stack>
            <Stack spacing={3} marginTop={"40px"}>
              <ThemeProvider theme={textTheme}>
                <Typography
                  textAlign={"center"}
                  color={"#339465"}
                  variant="body1"
                  component={"h3"}
                >
                  PLEASE NOTE KENT FILM FOUNDATION HAS NO FULL TIME STAFF SO
                  PLEASE BE PATIENT WITH US.
                </Typography>
              </ThemeProvider>
              <Typography textAlign={"center"} variant="body1" component={"h4"}>
                ALL OUR PROFESSIONAL FILM MENTORS UNDERTAKE AN ENHANCED DBS
                CHECK
              </Typography>
              <Typography
                textAlign={"center"}
                color={"#339465"}
                variant="h6"
                component={"h5"}
              >
                KENT FILM FOUNDATION
              </Typography>
              <Typography textAlign={"center"} variant="body1" component={"h6"}>
                Ramsgate Youth Centre, High St, St Lawrence Ramsgate, CT11 0QG
              </Typography>
            </Stack>
          </form>
        </Box>
      ) : (
        <Box
          width={"800px"}
          justifyContent={"center"}
          alignItems={"center"}
          margin={"auto"}
        >
          <form>
            <Typography
              textAlign={"left"}
              variant="h6"
              component="h2"
              color={"#339465"}
            >
              Contact Us
            </Typography>
            <Stack direction={"column"} spacing={2}>
              <TextField type="text" name="Name" label="Name" required />
              <TextField type="email" name="Email" label="Email" required />
              <TextField
                type="text"
                name="Mesasge"
                label="Message"
                multiline
                rows={8}
                required
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#339465",
                  borderRadius: "0px",
                  width: "10px",
                  alignSelf: "center",
                }}
                type="submit"
              >
                Send
              </Button>
            </Stack>
            <Stack spacing={3} marginTop={"40px"}>
              <Typography
                textAlign={"center"}
                color={"#339465"}
                variant="h6"
                component={"h3"}
              >
                PLEASE NOTE KENT FILM FOUNDATION HAS NO FULL TIME STAFF SO
                PLEASE BE PATIENT WITH US.
              </Typography>
              <Typography textAlign={"center"}>
                ALL OUR PROFESSIONAL FILM MENTORS UNDERTAKE AN ENHANCED DBS
                CHECK
              </Typography>
              <Typography textAlign={"center"} color={"#339465"}>
                KENT FILM FOUNDATION
              </Typography>
              <Typography textAlign={"center"} marginBottom={4}>
                Ramsgate Youth Centre, High St, St Lawrence Ramsgate, CT11 0QG
              </Typography>
            </Stack>
          </form>
        </Box>
      )}
    </>
  );
};
