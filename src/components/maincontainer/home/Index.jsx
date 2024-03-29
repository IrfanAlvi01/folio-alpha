import React from "react";
import { Box, Grid, Slide, Typography } from "@mui/material";
import {
  GradientLine,
  MainHeader,
  coloredBoxStyle1,
  globleTypographies,
  mainContainerBoxStyle,
} from "../../../utils/muiComponentStyles";
import { CodeIcon } from "../../../assets/AssetExporter";

const whatIDoList = [
  {
    icon: CodeIcon,
    heading: "Web Development",
    text: `In the dynamic realm of web development, I've honed my skills with nearly two years of dedicated experience in React JS.\nCrafting responsive and user-centric interfaces using frontend libraries such as Material-UI (MUI) and Tailwind CSS has been my forte.\nWhile my expertise in React JS remains robust, I've ventured into the realms of Next.js and Node.js, demonstrating a keen eagerness to embrace emerging technologies to contribute effectively to a diverse range of projects.`,
  },
  {
    icon: CodeIcon,
    heading: "Freelancing Odyssey",
    text: `My freelancing journey is defined by adaptability, excellence, and a track record of completing 100+ orders across diverse programming languages with a remarkable 4.9/5 rating from 85+ reviews.\nMy success extends beyond technical proficiency to effective communication, collaboration, and problem-solving.\nI differentiate myself by actively embracing new technologies like Three.js, Flutter, Nuxt.js, showcasing a dedicated commitment to staying at the forefront of industry trends.`,
  },

  // {
  //   icon: CodeIcon,
  //   heading: "Mentorship",
  //   text: `Crafting visually appealing and intuitive user
  //   interfaces that offer a delightful user
  //   experience is something I'm truly fanatic
  //   about.`,
  // },
  // {
  //   icon: CodeIcon,
  //   heading: "Mentorship",
  //   text: `I have also found great joy in sharing my
  //   knowledge with others. Being a technical
  //   mentor allows me to give back to the
  //   community that has supported me
  //   throughout my career. `,
  // },
];

const Index = ({ currentIndex, activeIndex, isSmall }) => {
  return (
    <Slide
      mountOnEnter
      timeout={500}
      unmountOnExit
      direction="left"
      in={isSmall || (currentIndex == 1 && activeIndex === 1)}
    >
      <Box sx={mainContainerBoxStyle}>
        <Box display={"flex"} gap={2}>
          <MainHeader variant="custom">About Me</MainHeader>
          <GradientLine />
        </Box>
        {/* <Typography variant="body1">hi</Typography> */}
        <Typography
          my={2}
          component="p"
          sx={globleTypographies}
          variant="introduction"
        >
          Hello, I'm Irfan Alvi. Recognized for my creative flair and
          dedication, I bring a positive mindset and a passion for crafting
          innovative solutions to every project. Thriving in collaborative
          environments, I value teamwork and approach challenges with
          enthusiasm. My journey is defined by a commitment to excellence,
          proactive problem-solving, and a continuous pursuit of creativity.
          Eager to contribute my skills to collaborative projects, I am poised
          to elevate digital experiences with every opportunity.
        </Typography>
        <Typography component="p" sx={globleTypographies} variant="whatIDo">
          What I Do!
        </Typography>
        <Grid spacing={2} container>
          {whatIDoList?.map((item, idx) => (
            <Grid display={"flex"} item key={idx} sm={6}>
              <Box sx={coloredBoxStyle1}>
                <Box my={1} display={"flex"} alignItems={"center"}>
                  <Box component={CodeIcon} sx={{ minWidth: 20, mr: 1 }} />
                  <Typography
                    component="span"
                    sx={globleTypographies}
                    variant="coloredBoxHeading"
                  >
                    {item.heading}
                  </Typography>
                </Box>
                <Typography
                  component="span"
                  sx={globleTypographies}
                  variant="coloredBoxDetail"
                >
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Slide>
  );
};

export default Index;
