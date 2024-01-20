import React from "react";
import { Box, Grid, Slide, Typography } from "@mui/material";
import {
  MainHeader,
  coloredBoxStyle1,
  coloredBoxStyle2,
  globleTypographies,
  mainContainerBoxStyle,
} from "../../../utils/muiComponentStyles";
import { EduIcon, ExpIcon } from "../../../assets/AssetExporter";

const projectList = [
  {
    id: 1,
    name: "Name1",
    desc: "Some description",
    mainImage:
      "https://plus.unsplash.com/premium_photo-1680667682187-52fd5e203efb?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Name2",
    desc: "Some description",
    mainImage:
      "https://plus.unsplash.com/premium_photo-1680667682187-52fd5e203efb?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Name3",
    desc: "Some description",
    mainImage:
      "https://plus.unsplash.com/premium_photo-1680667682187-52fd5e203efb?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Name4",
    desc: "Some description",
    mainImage:
      "https://plus.unsplash.com/premium_photo-1680667682187-52fd5e203efb?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Index = ({ currentIndex, activeIndex, isSmall }) => {
  return (
    <Slide
      mountOnEnter
      timeout={500}
      unmountOnExit
      direction="left"
      in={isSmall || (currentIndex == 3 && activeIndex === 3)}
    >
      <Box sx={mainContainerBoxStyle}>
        <MainHeader leftdir={isSmall ? "295%" : "225%"} variant="custom">
          Work
        </MainHeader>
        <Grid spacing={4} mt={2} container>
          {projectList.map((item, idx) => (
            <Grid item xs={12} sm={12} md={6} key={idx}>
              {/* <Box my={2} display={"flex"} alignItems={"center"}>
              <Box component={EduIcon} sx={{ minWidth: 20, mr: 1 }} />
              <Typography
                component="span"
                sx={globleTypographies}
                variant="education"
              >
                Text
              </Typography>
            </Box> */}
              <Box  sx={coloredBoxStyle1}>
                <Box
                  component="img"
                  sx={{ width: "-webkit-fill-available", borderRadius: "20px" }}
                  src={item?.mainImage}
                />
                <Typography
                  mt={1}
                  component="p"
                  sx={globleTypographies}
                  variant="education2"
                >
                  {item?.name}
                </Typography>
                <Typography
                  // my={1}
                  component="p"
                  sx={globleTypographies}
                  variant="education1"
                >
                  {item?.desc}
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
