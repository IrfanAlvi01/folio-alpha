import React from "react";
import { Box, Grid, Slide, Typography } from "@mui/material";
import {
  MainHeader,
  coloredBoxStyle1,
  coloredBoxStyle2,
  coloredChipBox,
  globleTypographies,
  mainContainerBoxStyle,
} from "../../../utils/muiComponentStyles";
import { CodeIcon, EduIcon, ExpIcon } from "../../../assets/AssetExporter";

const workSkillList = [
  "Skill 1",
  "Skill 2",
  "Skill 3",
  "Skill 4",
  "Skill 5",
  "Skill 6",
  "Skill 7",
  "Skill 8",
];
const softSkillList = [
  "Soft 1",
  "Soft 2",
  "Soft 3",
  "Soft 4",
  "Soft 5",
  "Soft 6",
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
        <Grid spacing={8} mt={-4} container>
          <Grid item sm={6}>
            <Box my={2} display={"flex"} alignItems={"center"}>
              <Box component={EduIcon} sx={{ minWidth: 20, mr: 1 }} />
              <Typography
                component="span"
                sx={globleTypographies}
                variant="education"
              >
                Text
              </Typography>
            </Box>
            <Box sx={coloredBoxStyle1}>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education1"
              >
                2020-2021
              </Typography>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education2"
              >
                With a focus
              </Typography>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education3"
              >
                With a focus
              </Typography>
            </Box>
            <Box mt={2} sx={coloredBoxStyle2}>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education1"
              >
                2020-2021
              </Typography>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education2"
              >
                With a focus
              </Typography>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education3"
              >
                With a focus
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Box my={2} display={"flex"} alignItems={"center"}>
              <Box component={ExpIcon} sx={{ minWidth: 20, mr: 1 }} />
              <Typography
                component="span"
                sx={{ ...globleTypographies, fontWeight: 700 }}
                variant="education"
              >
                text
              </Typography>
            </Box>
            <Box sx={coloredBoxStyle2}>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education1"
              >
                2020-2021
              </Typography>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education2"
              >
                With a focus
              </Typography>
              <Typography
                my={1}
                component="p"
                sx={globleTypographies}
                variant="education3"
              >
                With a focus
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
              Heading 1
            </Typography>
            <Box
              mt={2}
              gap={2}
              display="flex"
              flexWrap="wrap"
              justifyContent="space-around"
            >
              {workSkillList?.map((skill, idx) => (
                <Box key={idx} sx={coloredChipBox}>
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
              Heading 2
            </Typography>
            <Box
              mt={2}
              gap={2}
              display="flex"
              flexWrap="wrap"
              justifyContent="space-around"
            >
              {softSkillList?.map((skill, idx) => (
                <Box key={idx} sx={coloredChipBox}>
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
