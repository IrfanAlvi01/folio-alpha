import React from "react";
import { createTheme } from "@mui/material";
import ComponentsOverrides from "./overides";

const theme = createTheme();

const BACKGROUND_LIGHT = "#F2F5F9";
const BACKGROUND_DARK = "#000000";

const BACKGROUND_BOX_LIGHT = "#FFF";
const BACKGROUND_BOX_DARK = "#1D1D1D";

const LAYOUT_A_LIGHT = "#EC1B09";

const GRADIENT_ONE_LIGHT = "#FF9C1A";

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

//Main
const BACKGROUND_COLOREDBOX1_LIGHT = "#FFEBD1";
const BACKGROUND_COLOREDBOX1_DARK = "#2c2b2a";

const BACKGROUND_COLOREDBOX2_LIGHT = "#FFE3BF";
const BACKGROUND_COLOREDBOX2_DARK = "#2c2b2a";

const BACKGROUND_CHIPS_LIGHT = "#E1E8EF";
const BACKGROUND_CHIPS_DARK = "#2c2b2a";

const FONT_INFO_LIGHT = "#000";
const FONT_INFO_DARK = "#999999";

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
      mainColoredBox1: BACKGROUND_COLOREDBOX1_LIGHT,
      mainColoredBox2: BACKGROUND_COLOREDBOX2_LIGHT,
      mainChipBox: BACKGROUND_CHIPS_LIGHT,
      gradientOne: GRADIENT_ONE_LIGHT,
      paperBox: BACKGROUND_BOX_LIGHT,
      test: "cornsilk",
    },
    font: {
      mainInfo: FONT_INFO_LIGHT,
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
      mainColoredBox1: BACKGROUND_COLOREDBOX1_DARK,
      mainColoredBox2: BACKGROUND_COLOREDBOX2_DARK,
      mainChipBox: BACKGROUND_CHIPS_DARK,
      gradientOne: GRADIENT_ONE_LIGHT,
      paperBox: BACKGROUND_BOX_DARK,
      test: "tomato",
    },
    font: {
      mainInfo: FONT_INFO_DARK,
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
      fontFamily: "Pacifico",
      textTransform: "capitalize",
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
