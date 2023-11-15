import React from "react";

const BACKGROUND_LIGHT = "#F4F8FB";

const LAYOUT_A_LIGHT = "#0054A4";

const FONT_COLOR_LIGHT = "#7D8EA3";

export const lightTheme = {
  palette: {
    mode: "light",
    background: {
      default: BACKGROUND_LIGHT,
      bgLayoutA: LAYOUT_A_LIGHT,
      test: "cornsilk",
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
  },
};

export const darkTheme = {
  palette: {
    mode: "dark",
    background: {
      default: "gray",
      bgLayoutA: LAYOUT_A_LIGHT,
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
  },
};

const ThemeContext = React.createContext({
  isDarkTheme: false,
  setTheme: () => {},
});
export default ThemeContext;
