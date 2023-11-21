import React from "react";
import "@fontsource/poppins";
import "@fontsource/raleway";
import "@fontsource/pacifico";
import { createTheme } from "@mui/material";

const theme = createTheme();

const BACKGROUND_LIGHT = "#F2F5F9";
const BACKGROUND_DARK = "#000000";

const BACKGROUND_BOX_LIGHT = "#FFF";
const BACKGROUND_BOX_DARK = "#1D1D1D";

//Topbar
const BACKGROUND_TOPBAR_LIGHT = "#F2F7FC";
const BACKGROUND_TOPBAR_DARK = "#2e2e2e";

const BORDER_TOPBAR_LIGHT = "#cfd3d7";
const BORDER_TOPBAR_DARK = "#3a3838";

//Sidebar
const BACKGROUND_SIDEBAR_SVGBOX_LIGHT = "#F2F7FC";
const BACKGROUND_SIDEBAR_SVGBOX_DARK = "#F2F7FC";

const BACKGROUND_SIDEBAR_INFOBOX_LIGHT = "#F2F5F9";
const BACKGROUND_SIDEBAR_INFOBOX_DARK = "#F2F5F9";

const LAYOUT_A_LIGHT = "#EC1B09";

const GRADIENT_ONE_LIGHT = "#FF9C1A";

const FONT_COLOR_LIGHT = "#7D8EA3";

export const lightTheme = {
  palette: {
    mode: "light",
    background: {
      default: BACKGROUND_LIGHT,
      layoutA: LAYOUT_A_LIGHT,
      topbar: BACKGROUND_TOPBAR_LIGHT,
      sidebarSvgBox: BACKGROUND_SIDEBAR_SVGBOX_LIGHT,
      sidebarInfoBox: BACKGROUND_SIDEBAR_INFOBOX_LIGHT,
      gradientOne: GRADIENT_ONE_LIGHT,
      paperBox: BACKGROUND_BOX_LIGHT,
      test: "cornsilk",
    },
    border: {
      topbar: BORDER_TOPBAR_LIGHT,
    },
    primary: {
      main: "#1976d2",
      fontColor: FONT_COLOR_LIGHT,
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "Raleway",
      "Pacifico",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h5: {
      fontFamily: "Pacifico",
      fontWeight: 500,
    },
    body1: {
      fontFamily: "Poppins",
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
        contained: {},
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  shadows: ["0px 0px 2px 1px rgba(207,211,215,0.68)", ...theme.shadows],
};

export const darkTheme = {
  palette: {
    mode: "dark",
    background: {
      default: BACKGROUND_DARK,
      layoutA: LAYOUT_A_LIGHT,
      topbar: BACKGROUND_TOPBAR_DARK,
      sidebarSvgBox: BACKGROUND_SIDEBAR_SVGBOX_DARK,
      sidebarInfoBox: BACKGROUND_SIDEBAR_INFOBOX_DARK,
      gradientOne: GRADIENT_ONE_LIGHT,
      paperBox: BACKGROUND_BOX_DARK,
      test: "tomato",
    },
    border: {
      topbar: BORDER_TOPBAR_DARK,
    },
    primary: {
      main: "#1976d2",
      fontColor: FONT_COLOR_LIGHT,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {},
        contained: {},
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  shadows: ["0px 0px 2px 1px rgb(97,95,95)", ...theme.shadows],
};

const ThemeContext = React.createContext({
  isDarkTheme: false,
  setTheme: () => {},
});
export default ThemeContext;
