import { Box, styled } from "@mui/material";

export const PrimaryBackground = styled(Box)(({ color, theme }) => ({
  backgroundColor: theme.palette.background.test,
  color,
  transition: theme.transitions.create("background-color", {
    duration: 3000,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  }),
}));

export const gridMainBoxStyle = {
  "&.MuiBox-root": {
    padding: 2,
    borderRadius: 2,
    backgroundColor: (theme) => theme.palette.background.paperBox,
  },
};
export const gridTopbarBoxStyle = {
  "&.MuiBox-root": {
    width: 300,
    padding: 2,
    borderRadius: 2,
    border: "1px solid grey",
    backgroundColor: "#F2F7FC",
  },
};
