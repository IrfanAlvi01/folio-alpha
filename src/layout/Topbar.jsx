import React from "react";
import {
  GradientWrapper,
  NavButton,
  topbarBoxStyle,
} from "../utils/muiComponentStyles";
import { Box, Stack, Typography } from "@mui/material";

const Topbar = ({ currentTab, setCurrentTab }) => {
  const handleNavButtonClick = (id) => {
    setCurrentTab(id);
  };

  return (
    <>
      <Stack alignItems={"flex-end"}>
        <Box sx={topbarBoxStyle}>
          <NavButton
            active={currentTab == 1}
            onClick={() => handleNavButtonClick(1)}
          >
            <Typography zIndex={2}>Click</Typography>
            <GradientWrapper active={currentTab == 1} />
          </NavButton>
          <NavButton
            active={currentTab == 2}
            onClick={() => handleNavButtonClick(2)}
          >
            <Typography zIndex={2}>Click</Typography>
            <GradientWrapper active={currentTab == 2} />
          </NavButton>
          <NavButton
            active={currentTab == 3}
            onClick={() => handleNavButtonClick(3)}
          >
            <Typography zIndex={2}>Click</Typography>
            <GradientWrapper active={currentTab == 3} />
          </NavButton>
          <NavButton
            active={currentTab == 4}
            onClick={() => handleNavButtonClick(4)}
          >
            <Typography zIndex={2}>Click</Typography>
            <GradientWrapper active={currentTab == 4} />
          </NavButton>
        </Box>
      </Stack>
    </>
  );
};

export default Topbar;
