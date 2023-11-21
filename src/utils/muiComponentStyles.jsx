import { Box, Button, SvgIcon, styled } from "@mui/material";
import React from "react";

export const PrimaryBackground = styled(Box)(({ color, theme }) => ({
  backgroundColor: theme.palette.background.test,
  color,
  transition: theme.transitions.create("background-color", {
    duration: 3000,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  }),
}));
export const NavButton = styled(Button)(({ theme, active }) => ({
  width: 80,
  height: 80,
  borderRadius: "20px",
  position: "relative",
  background: "#E1E8EF",
  color: active == "true" ? "white" : "black",
  transition: "background 0.5s ease-in-out",
  "&:hover": {
    background: "#E1E8EF",
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

export const sidebarStackStyle = {
  "&.MuiStack-root": {
    p: 4,
    display: "flex",
    borderRadius: "20px",
    position: "relative",
    backgroundColor: (theme) => theme.palette.background.paperBox,
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
    boxShadow: (theme) => theme.shadows[0],
  },
};

export const mainContainerBoxStyle = {
  "&.MuiBox-root": {
    padding: 2,
    display: "flex",
    borderRadius: "20px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: (theme) => theme.palette.background.paperBox,
  },
};