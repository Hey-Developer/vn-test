// you can add your custom styles for mui here.
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
  },
});

export default theme;
