import { createTheme, responsiveFontSizes } from "@mui/material";

let LatestScreeningTheme = createTheme({
  typography: {
    fontFamily: "'Open Sans', arial, sans-serif",
  },
});

LatestScreeningTheme = responsiveFontSizes(LatestScreeningTheme);
export default LatestScreeningTheme;
