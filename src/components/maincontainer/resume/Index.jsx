import React from "react";
import { Box, Grid, Slide, Typography } from "@mui/material";
import {
  GradientLine,
  MainHeader,
  coloredBoxStyle1,
  coloredBoxStyle2,
  // coloredChipBox,
  globleTypographies,
  gradientColoredChipBox,
  mainContainerBoxStyle,
} from "../../../utils/muiComponentStyles";
import { CodeIcon, EduIcon, ExpIcon } from "../../../assets/AssetExporter";

const workSkillList = [
  "ReactJs",
  "Javascript",
  "Html",
  "CSS",
  "Github",
  "MERN",
  "JAVA",
  "MUI",
  "NextJs",
  "Node.Js",
  "Flutter",
];
const softSkillList = [
  "Ambitious",
  "Teamplayer",
  "Leadership",
  "Adaptability",
  "Communication",
  "Problem-solving",
];

const Index = ({ currentIndex, activeIndex, isSmall }) => {
  return (
    <Slide
      mountOnEnter
      timeout={500}
      unmountOnExit
      direction="left"
      in={isSmall || (currentIndex == 2 && activeIndex === 2)}
    >
      <Box sx={mainContainerBoxStyle}>
        <Box display={"flex"} gap={2}>
          <MainHeader variant="custom">Resume</MainHeader>
          <GradientLine />
        </Box>
        <Grid spacing={8} mt={-4} container>
          <Grid item xs={12} sm={6}>
            <Box my={2} display={"flex"} alignItems={"center"}>
              <Box component={EduIcon} sx={{ minWidth: 20, mr: 1 }} />
              <Typography
                component="span"
                sx={globleTypographies}
                variant="education"
              >
                Education:-
              </Typography>
            </Box>
            <Box sx={coloredBoxStyle1}>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education1"
              >
                10/2018 - 05/2022
              </Typography>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education2"
              >
                BSCS
              </Typography>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education3"
              >
                KFUEIT, RYK
              </Typography>
            </Box>
            <Box mt={2} sx={coloredBoxStyle2}>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education1"
              >
                05/2016 - 06/2018
              </Typography>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education2"
              >
                F.Sc (Pre-Eng)
              </Typography>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education3"
              >
                Post Graduate KF College , RYK
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box my={2} display={"flex"} alignItems={"center"}>
              <Box component={ExpIcon} sx={{ minWidth: 20, mr: 1 }} />
              <Typography
                component="span"
                sx={{ ...globleTypographies, fontWeight: 700 }}
                variant="education"
              >
                Experience:-
              </Typography>
            </Box>
            <Box sx={coloredBoxStyle2}>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education1"
              >
                12/2022 - Present
              </Typography>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education2"
              >
                Front End Developer
              </Typography>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education3"
              >
                SoftCircles, Lahore
              </Typography>
            </Box>
            <Box my={2} sx={coloredBoxStyle2}>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education1"
              >
                08/2019 - Present
              </Typography>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education2"
              >
                Freelancer
              </Typography>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education3"
              >
                Fiverr, Remote
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid spacing={10} mt={-4} container>
          <Grid item sm={6}>
            <Typography
              component="span"
              sx={globleTypographies}
              variant="workSkillHeading"
            >
              Hard Skills:-
            </Typography>
            <Box
              mt={2}
              gap={2}
              display="flex"
              flexWrap="wrap"
              justifyContent="left"
            >
              {workSkillList?.map((skill, idx) => (
                <Box key={idx} sx={gradientColoredChipBox}>
                  {skill}
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Typography
              component="span"
              sx={globleTypographies}
              variant="workSkillHeading"
            >
              Soft Skills:-
            </Typography>
            <Box
              mt={2}
              gap={2}
              display="flex"
              flexWrap="wrap"
              justifyContent="left"
            >
              {softSkillList?.map((skill, idx) => (
                <Box key={idx} sx={gradientColoredChipBox}>
                  {skill}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Slide>
  );
};

export default Index;
