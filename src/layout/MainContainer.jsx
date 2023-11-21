import React, { useEffect, useState } from "react";
import { Box, Slide } from "@mui/material";
import { HomeComponent } from "../components/ComponentExporter";
import { mainContainerBoxStyle } from "../utils/muiComponentStyles";

const MainContainer = ({ currentIndex }) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => {
    setTimeout(() => {
      setActiveIndex(currentIndex);
    }, 500);
  }, [currentIndex]);

  return (
    <>
      <HomeComponent currentIndex={currentIndex} activeIndex={activeIndex} />
      <Slide
        mountOnEnter
        unmountOnExit
        timeout={500}
        direction="left"
        in={currentIndex == 2 && activeIndex === 2}
      >
        <Box sx={mainContainerBoxStyle}>
          <Box sx={{ p: 2, backgroundColor: "lightgreen" }}>Box 2</Box>
        </Box>
      </Slide>
      <Slide
        mountOnEnter
        unmountOnExit
        timeout={500}
        direction="left"
        in={currentIndex == 3 && activeIndex === 3}
      >
        <Box sx={mainContainerBoxStyle}>
          <Box sx={{ p: 2, backgroundColor: "lightyellow" }}>Box 3</Box>
        </Box>
      </Slide>
      <Slide
        mountOnEnter
        unmountOnExit
        timeout={500}
        direction="left"
        in={currentIndex == 4 && activeIndex === 4}
      >
        <Box sx={mainContainerBoxStyle}>
          <Box sx={{ p: 2, backgroundColor: "lightpink" }}>Box 4</Box>
        </Box>
      </Slide>
    </>
  );
};

export default MainContainer;
