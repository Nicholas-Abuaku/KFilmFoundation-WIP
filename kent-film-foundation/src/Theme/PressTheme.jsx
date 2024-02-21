import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let PressTheme = createTheme({
  typography: {
    h3: {
      fontFamily: "'Open Sans', arial, sans-serif",
      color: "#198754",
    },
  },
});
PressTheme = responsiveFontSizes(PressTheme);
export default PressTheme;
