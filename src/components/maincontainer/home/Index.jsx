import React from "react";
import { Box, Slide, Typography } from "@mui/material";
import {
  MainHeader,
  mainContainerBoxStyle,
} from "../../../utils/muiComponentStyles";

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
        <MainHeader leftDir={"200%"} variant="custom">
          About Me
        </MainHeader>
        {/* <Typography variant="body1">hi</Typography> */}
        <Typography my={2} component="p" variant="introduction">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Typography>
        <Box sx={{ p: 2, backgroundColor: "lightblue" }}>Box 1</Box>
      </Box>
    </Slide>
  );
};

export default Index;
