import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import GlobalCssPriority from "../MUI/GlobalCssPriority";
import PlainCssPriority from "../MUI/PlainCssPriority";
import theme from "../../theme/theme";
import {
  COLORS,
  FONT_SIZES,
  SPACING,
  FONT_WEIGHT,
  FONT_FAMILY,
} from "../../theme/commonStyles";

const myTheme = {
  ...theme,
  colors: COLORS,
  fontSizes: FONT_SIZES,
  sizes: SPACING,
  fontWeight: FONT_WEIGHT,
  fontFamily: FONT_FAMILY,
};

const AllContextProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={myTheme}>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <GlobalCssPriority>
          <PlainCssPriority>{children}</PlainCssPriority>
        </GlobalCssPriority>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default AllContextProvider;
