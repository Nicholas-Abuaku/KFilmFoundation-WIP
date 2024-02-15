import { createTheme, useTheme } from "@mui/material/styles";

const GlobalTheme = createTheme({
  typography: {
    h1: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2.4rem",
      },
    },
    h4: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2.4rem",
      },
    },
    // Add more custom typography styles if needed
  },
});

export default GlobalTheme;
