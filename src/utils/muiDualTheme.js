import React from "react";
import { createTheme } from "@mui/material";
import ComponentsOverrides from "./overides";

const theme = createTheme();

const BACKGROUND_LIGHT = "#F2F5F9";
const BACKGROUND_DARK = "#000000";

const BACKGROUND_BOX_LIGHT = "#FFF";
const BACKGROUND_BOX_DARK = "#1D1D1D";

//Topbar
const BACKGROUND_TOPBAR_LIGHT = "#F2F7FC";
const BACKGROUND_TOPBAR_DARK = "#2e2e2e";

const BACKGROUND_TOPBAR_ICON_LIGHT = "#E1E8EF";
const BACKGROUND_TOPBAR_ICON_DARK = "#838181";

const BORDER_TOPBAR_LIGHT = "#cfd3d7";
const BORDER_TOPBAR_DARK = "#3a3838";

//Sidebar
const BACKGROUND_SIDEBAR_SVGBOX_LIGHT = "#F2F7FC";
const BACKGROUND_SIDEBAR_SVGBOX_DARK = "#343232";

const BACKGROUND_SIDEBAR_INFOBOX_LIGHT = "#F2F5F9";
const BACKGROUND_SIDEBAR_INFOBOX_DARK = "#282727";

const FONT_SIDEBAR_INFOTITLE_LIGHT = "#1a100380";
const FONT_SIDEBAR_INFOTITLE_DARK = "#7e7a7a";

const FONT_SIDEBAR_INFOVALUE_LIGHT = "#000";
const FONT_SIDEBAR_INFOVALUE_DARK = "#999393";

const LAYOUT_A_LIGHT = "#EC1B09";

const GRADIENT_ONE_LIGHT = "#FF9C1A";

const FONT_COLOR_LIGHT = "#7D8EA3";

const lightTheme = {
  palette: {
    mode: "light",
    background: {
      default: BACKGROUND_LIGHT,
      layoutA: LAYOUT_A_LIGHT,
      topbar: BACKGROUND_TOPBAR_LIGHT,
      topbarIcon: BACKGROUND_TOPBAR_ICON_LIGHT,
      sidebarSvgBox: BACKGROUND_SIDEBAR_SVGBOX_LIGHT,
      sidebarInfoBox: BACKGROUND_SIDEBAR_INFOBOX_LIGHT,
      gradientOne: GRADIENT_ONE_LIGHT,
      paperBox: BACKGROUND_BOX_LIGHT,
      test: "cornsilk",
    },
    font: {
      sidebarInfoTitle: FONT_SIDEBAR_INFOTITLE_LIGHT,
      sidebarInfoValue: FONT_SIDEBAR_INFOVALUE_LIGHT,
    },
    border: {
      topbar: BORDER_TOPBAR_LIGHT,
    },
    primary: {
      main: "#1976d2",
      fontColor: FONT_COLOR_LIGHT,
    },
  },
  shadows: ["0px 0px 2px 1px rgba(207,211,215,0.68)", ...theme.shadows],
};

lightTheme.typography = TypographyOverrides(lightTheme);
lightTheme.components = ComponentsOverrides(lightTheme);

const darkTheme = {
  palette: {
    mode: "dark",
    background: {
      default: BACKGROUND_DARK,
      layoutA: LAYOUT_A_LIGHT,
      topbar: BACKGROUND_TOPBAR_DARK,
      topbarIcon: BACKGROUND_TOPBAR_ICON_DARK,
      sidebarSvgBox: BACKGROUND_SIDEBAR_SVGBOX_DARK,
      sidebarInfoBox: BACKGROUND_SIDEBAR_INFOBOX_DARK,
      gradientOne: GRADIENT_ONE_LIGHT,
      paperBox: BACKGROUND_BOX_DARK,
      test: "tomato",
    },
    font: {
      sidebarInfoTitle: FONT_SIDEBAR_INFOTITLE_DARK,
      sidebarInfoValue: FONT_SIDEBAR_INFOVALUE_DARK,
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

darkTheme.typography = TypographyOverrides(darkTheme);
darkTheme.components = ComponentsOverrides(darkTheme);

export { lightTheme, darkTheme };

function TypographyOverrides(theme) {
  return Object.assign({
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
    name: {
      fontSize: "22px",
      // fontWeight: 600,
      fontFamily: "Pacifico",
      textTransform: "capitalize",
    },
    header: {
      zIndex: 2,
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "20px",
      fontFamily: "Raleway",
      textTransform: "capitalize",
    },
    introduction: {
      color: "#000",
      fontFamily: "Raleway",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "30px" /* 187.5% */,
    },
    infoTitle: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "1.1",
      textAlign: "left",
      cursor: "pointer",
      fontFamily: "Raleway",
      textTransform: "capitalize",
      color: theme.palette.font.sidebarInfoTitle,
    },
    infoValue: {
      fontSize: "14px",
      fontWeight: 600,
      textAlign: "left",
      cursor: "pointer",
      lineHeight: "1.2",
      fontFamily: "Raleway",
      textTransform: "capitalize",
      color: theme.palette.font.sidebarInfoValue,
    },
    h5: {
      fontFamily: "Pacifico",
      fontWeight: 500,
    },
    // body1: {
    //   fontFamily: "Poppins",
    //   fontWeight: 400,
    // },
  });
}

const ThemeContext = React.createContext({
  isDarkTheme: false,
  setTheme: () => {},
});
export default ThemeContext;
