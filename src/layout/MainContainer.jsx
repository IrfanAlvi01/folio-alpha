import React, { useEffect, useState } from "react";
import { Box, Slide } from "@mui/material";
import {
  ContactComponent,
  HomeComponent,
  ResumeComponent,
  WorkComponent,
} from "../components/ComponentExporter";
import { mainContainerBoxStyle } from "../utils/muiComponentStyles";

const MainContainer = ({ currentIndex , isSmall}) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => {
    setTimeout(() => {
      setActiveIndex(currentIndex);
    }, 500);
  }, [currentIndex]);

  return (
    <>
      <HomeComponent currentIndex={currentIndex} activeIndex={activeIndex} isSmall={isSmall}/>
      <ResumeComponent currentIndex={currentIndex} activeIndex={activeIndex} isSmall={isSmall} />
      <WorkComponent currentIndex={currentIndex} activeIndex={activeIndex} isSmall={isSmall} />
      <ContactComponent currentIndex={currentIndex} activeIndex={activeIndex} isSmall={isSmall} />
    </>
  );
};

export default MainContainer;
