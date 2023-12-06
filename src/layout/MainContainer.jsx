import React, { useEffect, useState } from "react";
import { Box, Slide } from "@mui/material";
import {
  ContactComponent,
  HomeComponent,
  ResumeComponent,
  WorkComponent,
} from "../components/ComponentExporter";
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
      <ResumeComponent currentIndex={currentIndex} activeIndex={activeIndex} />
      <WorkComponent currentIndex={currentIndex} activeIndex={activeIndex} />
      <ContactComponent currentIndex={currentIndex} activeIndex={activeIndex} />
    </>
  );
};

export default MainContainer;
