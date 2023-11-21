import React from "react";
import { Box, Slide } from "@mui/material";
import { mainContainerBoxStyle } from "../../../utils/muiComponentStyles";

const Index = ({ currentIndex, activeIndex }) => {
  return (
    <Slide
      mountOnEnter
      timeout={500}
      unmountOnExit
      direction="left"
      in={currentIndex == 1 && activeIndex === 1}
    >
      <Box sx={mainContainerBoxStyle}>
        <Box sx={{ p: 2, backgroundColor: "lightblue" }}>Box 1</Box>
      </Box>
    </Slide>
  );
};

export default Index;
