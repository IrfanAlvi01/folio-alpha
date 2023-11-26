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

const skillsets = {
  workSkills: [
    "HTML5",
    "CSS 3",
    "JavaScript",
    "ReactJS",
    "Java",
    "MUI",
    "Tailwind CSS",
  ],
};

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
                sx={{ ...globleTypographies, fontWeight: 700 }}
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
        <Grid mt={4} spacing={2} container>
          <Grid item sm={6}>
            <Typography
              my={2}
              component="p"
              sx={globleTypographies}
              variant="skillsHeading"
            >
              Work Skills
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} gap={2}>
              {skillsets?.workSkills?.map((skill, idx) => (
                <Box
                  key={idx}
                  sx={{
                    margin: "2px",
                    color: "#000",
                    fontSize: "12px",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    display: "inline-block",
                    textTransform: "capitalize",
                    backgroundColor: "background.mainChipBox",
                  }}
                >
                  <Typography noWrap>{skill}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item sm={6}>
            <Typography
              my={2}
              component="p"
              sx={globleTypographies}
              variant="skillsHeading"
            >
              Soft Skills
            </Typography>
            <Box display={"flex"} flexWrap={"wrap"} gap={2}>
              {skillsets?.workSkills?.map((skill, idx) => (
                <Box
                  key={idx}
                  sx={{
                    margin: "2px",
                    color: "#000",
                    fontSize: "12px",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    display: "inline-block",
                    textTransform: "capitalize",
                    backgroundColor: "background.mainChipBox",
                  }}
                >
                  <Typography noWrap>{skill}</Typography>
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
