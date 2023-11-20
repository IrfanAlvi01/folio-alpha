import React from "react";
import "@fontsource/poppins";
import "@fontsource/raleway";
import "@fontsource/pacifico";

const BACKGROUND_LIGHT = "#F2F5F9";
const BACKGROUND_DARK = "#000";

const BACKGROUND_BOX_LIGHT = "#FFF";
const BACKGROUND_BOX_DARK = "#1D1D1D";

const LAYOUT_A_LIGHT = "#EC1B09";

const GRADIENT_ONE_LIGHT = "#FF9C1A";

const FONT_COLOR_LIGHT = "#7D8EA3";

export const lightTheme = {
  palette: {
    mode: "light",
    background: {
      default: BACKGROUND_LIGHT,
      bgLayoutA: LAYOUT_A_LIGHT,
      gradientOne: GRADIENT_ONE_LIGHT,
      paperBox: BACKGROUND_BOX_LIGHT,
      test: "cornsilk",
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
};

export const darkTheme = {
  palette: {
    mode: "dark",
    background: {
      default: BACKGROUND_DARK,
      bgLayoutA: LAYOUT_A_LIGHT,
      gradientOne: GRADIENT_ONE_LIGHT,
      paperBox: BACKGROUND_BOX_DARK,
      test: "tomato",
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
};

const ThemeContext = React.createContext({
  isDarkTheme: false,
  setTheme: () => {},
});
export default ThemeContext;
