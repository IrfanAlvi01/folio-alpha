import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";

export const PrimaryBackground = styled(Box)(({ color, theme }) => ({
  backgroundColor: theme.palette.background.test,
  color,
  transition: theme.transitions.create("background-color", {
    duration: 3000,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  }),
}));

export const GradientTypography = styled(Box)(({ theme }) => ({
  background: `linear-gradient(300deg, ${theme.palette.background.layoutA} 7.92%, ${theme.palette.background.gradientOne} 108.2%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export const MainHeader = styled(Typography)(({ theme, leftDir }) => ({
  fontSize: "2.5rem",
  fontStyle: "normal",
  textTransform: "uppercase",
  // background: "pink",
  fontWeight: "500",
  lineHeight: "40px" /* 100% */,
  letterSpacing: "1px",
  fontFamily: "Poppins",

  position: "relative",

  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: leftDir,
    width: "252px",
    height: "2px",
    transform: "translate(-50%, -50%)",
    background: `linear-gradient(300deg, ${theme.palette.background.layoutA} 7.92%, ${theme.palette.background.gradientOne} 108.2%)`,
  },
}));

export const NavButton = styled(Button)(({ theme, active }) => ({
  width: 80,
  height: 80,
  display: "flex",
  position: "relative",
  borderRadius: "20px",
  alignItems: "center",
  backgroundColor: theme.palette.background.topbarIcon,
  flexDirection: "column",
  justifyContent: "center",
  color: active == "true" ? "white" : "black",
  transition: "background 0.5s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.background.topbarIcon,
  },
}));

export const GradientWrapper = styled("div")(({ theme, active }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  width: "100%",
  height: "100%",
  borderRadius: "20px",
  background: `linear-gradient(45deg, ${theme.palette.background.layoutA}, ${theme.palette.background.gradientOne})`,
  transition: "opacity 0.5s ease-in-out",
  opacity: active ? 1 : 0,
}));

export const BadgeBox = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  display: "flex",
  alignItems: "center",
  borderRadius: "20px",
  background: theme.palette.background.sidebarSvgBox,
  justifyContent: "center",
}));

export const globleTypographies = {
  "&.MuiTypography-infoTitle": {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "1.1",
    textAlign: "left",
    cursor: "pointer",
    fontFamily: "Raleway",
    textTransform: "capitalize",
    color: "font.sidebarInfoTitle",
  },
  "&.MuiTypography-infoValue": {
    fontSize: "14px",
    fontWeight: 600,
    textAlign: "left",
    cursor: "pointer",
    lineHeight: "1.2",
    fontFamily: "Raleway",
    textTransform: "capitalize",
    color: "font.sidebarInfoValue",
  },
  "&.MuiTypography-whatIDo": {
    my: 2,
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "2rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "40px",
    letterSpacing: "0.8px",
  },
  "&.MuiTypography-header": {
    zIndex: 2,
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "20px",
    fontFamily: "Raleway",
    textTransform: "capitalize",
  },
  "&.MuiTypography-introduction": {
    color: "font.mainInfo",
    fontFamily: "Raleway",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "30px" /* 187.5% */,
  },
  "&.MuiTypography-coloredBoxHeading": {
    color: "font.mainInfo",
    fontFamily: "Poppins",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "20px" /* 187.5% */,
  },
  "&.MuiTypography-coloredBoxDetail": {
    color: "font.mainInfo",
    fontFamily: "Raleway",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "20px" /* 187.5% */,
  },
  "&.MuiTypography-education": {
    color: "font.mainInfo",
    fontFamily: "Poppins",
    fontSize: "27.737px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "46px",
  },
};

export const sidebarStackStyle = {
  "&.MuiStack-root": {
    p: 4,
    display: "flex",
    borderRadius: "20px",
    position: "relative",
    backgroundColor: (theme) => theme.palette.background.paperBox,
  },
};

export const sidebarInfoStackStyle = {
  "&.MuiStack-root": {
    p: 4,
    mt: 4,
    width: "100%",
    borderRadius: "20px",
    backgroundColor: "background.sidebarInfoBox",
  },
};

export const sidebarMainBoxStyle = {
  "&.MuiBox-root": {
    padding: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: (theme) => theme.palette.background.paperBox,
  },
};
export const topbarBoxStyle = {
  "&.MuiBox-root": {
    width: 503,
    height: 100,
    padding: 1,
    display: "flex",
    borderRadius: "20px",
    border: "1px solid white",
    borderColor: "border.topbar",
    justifyContent: "space-evenly",
    backgroundColor: "background.topbar",
    // boxShadow: (theme) => theme.shadows[0],
  },
};

export const mainContainerBoxStyle = {
  "&.MuiBox-root": {
    padding: 4,
    textAlign: "left",
    borderRadius: "20px",
    backgroundColor: (theme) => theme.palette.background.paperBox,
  },
};

export const coloredBoxStyle1 = {
  "&.MuiBox-root": {
    px: 3,
    py: 2,
    borderRadius: "20px",
    backgroundColor: "background.mainColoredBox1",
  },
};

export const coloredBoxStyle2 = {
  "&.MuiBox-root": {
    px: 3,
    py: 2,
    borderRadius: "20px",
    backgroundColor: "background.mainColoredBox2",
  },
};
