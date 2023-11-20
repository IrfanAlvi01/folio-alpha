import React from "react";
import { Box, Slide } from "@mui/material";
import { mainContainerBoxStyle } from "../utils/muiComponentStyles";

const MainContainer = ({ currentIndex }) => {
  return (
    <>
      <Box sx={mainContainerBoxStyle}>
        <Slide mountOnEnter unmountOnExit in={currentIndex === 1} timeout={300}>
          <Box sx={{ p: 2, backgroundColor: "lightblue" }}>Box 1</Box>
        </Slide>
        <Slide mountOnEnter unmountOnExit in={currentIndex === 2} timeout={300}>
          <Box sx={{ p: 2, backgroundColor: "lightgreen" }}>Box 2</Box>
        </Slide>
        <Slide mountOnEnter unmountOnExit in={currentIndex === 3} timeout={300}>
          <Box sx={{ p: 2, backgroundColor: "lightyellow" }}>Box 3</Box>
        </Slide>
        <Slide mountOnEnter unmountOnExit in={currentIndex === 4} timeout={300}>
          <Box sx={{ p: 2, backgroundColor: "lightpink" }}>Box 4</Box>
        </Slide>
      </Box>
    </>
  );
};

export default MainContainer;
