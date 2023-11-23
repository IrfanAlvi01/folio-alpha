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
          color: "white",
          lineHeight: "1.2",
          fontSize: "12px",
          fontWeight: "600",
          borderRadius: "20px",
          width: "fit-content",
          fontFamily: "Poppins",
          letterSpacing: "0.7px",
          textTransform: "capitalize",
          padding: "12px 20px 10px 20px",
          // background: linear-gradient(91deg, #FF9C1A 7.92%, #E80505 108.2%);
          background: `linear-gradient(300deg, ${theme.palette.background.layoutA} 7.92%, ${theme.palette.background.gradientOne} 108.2%)`,
        },
      },
    },
  };
}
