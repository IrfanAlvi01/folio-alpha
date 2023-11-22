export default function ComponentsOverrides(theme) {
  return Object.assign(Button(theme), ButtonBase(theme), MuiDivider(theme));
}

function MuiDivider(theme) {
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#e9e5e5", // Replace with your desired color
        },
      },
    },
  };
}
function ButtonBase(theme) {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  };
}
function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
        },
        gradientContained: {
          background: "linear-gradient(45deg, #f50057, #000000)",
        },
        // sizeLarge: {
        //   height: 48,
        // },
      },
    },
  };
}
