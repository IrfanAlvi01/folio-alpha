import React from "react";
import { Box, Grid, Slide, Typography } from "@mui/material";
import {
  MainHeader,
  coloredBoxStyle1,
  coloredBoxStyle2,
  globleTypographies,
  mainContainerBoxStyle,
} from "../../../utils/muiComponentStyles";
import { CodeIcon } from "../../../assets/AssetExporter";

const whatIDoList = [
  {
    icon: CodeIcon,
    heading: "Mentorship",
    text: `As a developer, I find myself most 
    captivated by the power and flexibility of 
    NEXT.js. I'm always eager to dive into new
    projects that leverage NEXT.js and 
    discover innovative ways to create fast, 
    scalable, and user-friendly applications.`,
  },
  // {
  //   icon: CodeIcon,
  //   heading: "Mentorship",
  //   text: `With a focus on user-centric design and
  //   cutting-edge technologies, I thrive on
  //   building intuitive and efficient apps
  //   that make a positive impact on people's
  //   lives. Let's turn ideas into reality and
  //   shape the future together.`,
  // },
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

const Index = ({ currentIndex, activeIndex }) => {
  return (
    <Slide
      mountOnEnter
      timeout={500}
      unmountOnExit
      direction="left"
      in={currentIndex == 2 && activeIndex === 2}
    >
      <Box sx={mainContainerBoxStyle}>
        <MainHeader leftDir={"200%"} variant="custom">
          Resume
        </MainHeader>
        <Grid my={1} spacing={2} container>
          <Grid item sm={6}>
            <Box my={2} display={"flex"} alignItems={"center"}>
              <Box component={CodeIcon} sx={{ minWidth: 20, mr: 1 }} />
              <Typography
                component="span"
                sx={globleTypographies}
                variant="education"
              >
                text
              </Typography>
            </Box>
            <Box sx={coloredBoxStyle1}>
              <Typography
                component="span"
                sx={globleTypographies}
                variant="coloredBoxDetail"
              >
                With a focus on user-centric design and cutting-edge
                technologies, I thrive on building intuitive and efficient apps
                that make a positive impact on people's lives.
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box my={2} display={"flex"} alignItems={"center"}>
              <Box component={CodeIcon} sx={{ minWidth: 20, mr: 1 }} />
              <Typography
                component="span"
                sx={{...globleTypographies, fontWeight: 700}}
                variant="education"
              >
                text
              </Typography>
            </Box>
            <Box sx={coloredBoxStyle2}>
              <Typography
                component="span"
                sx={globleTypographies}
                variant="coloredBoxDetail"
              >
                With a focus on user-centric design and cutting-edge
                technologies, I thrive on building intuitive and efficient apps
                that make a positive impact on people's lives.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography
          my={2}
          component="p"
          sx={globleTypographies}
          variant="whatIDo"
        >
          What I Do!
        </Typography>
        <Grid spacing={2} container>
          {whatIDoList?.map((item, idx) => (
            <Grid display={"flex"} item key={idx} sm={6}>
              <Box sx={coloredBoxStyle1}>
                <Box mb={1} display={"flex"} alignItems={"center"}>
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
