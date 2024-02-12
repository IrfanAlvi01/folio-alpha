import React, { useState } from "react";
import {
  Box,
  Grid,
  Slide,
  Typography,
  Paper,
  Button,
  Modal,
} from "@mui/material";
import {
  GradientLine,
  MainHeader,
  coloredBoxStyle1,
  coloredBoxStyle2,
  globleTypographies,
  mainContainerBoxStyle,
} from "../../../utils/muiComponentStyles";
import { EduIcon, ExpIcon } from "../../../assets/AssetExporter";
import { Alert360_Data, Kepler_Data } from "../../../assets/WorkImageExporter";
import Carousel from "react-material-ui-carousel";

const projectList = [
  {
    id: 1,
    name: "360Alert",
    desc: "Some description",
    mainImage: Alert360_Data[0].image,
  },
  {
    id: 2,
    name: "KEPLER",
    desc: "Some description",
    mainImage: Kepler_Data[0].image,
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

const Index = ({ currentIndex, activeIndex, isSmall }) => {
  const [open, setOpen] = useState(false);

  // const handleModalOpen = () => {};

  return (
    <Slide
      mountOnEnter
      timeout={500}
      unmountOnExit
      direction="left"
      in={isSmall || (currentIndex == 3 && activeIndex === 3)}
    >
      <Box sx={mainContainerBoxStyle} position={"relative"}>
        <Box display={"flex"} gap={2}>
          <MainHeader variant="custom">Work</MainHeader>
          <GradientLine />
        </Box>
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
              <Box
                sx={coloredBoxStyle1}
                onClick={() => setOpen(item.id)}
                style={{ cursor: "pointer" }}
              >
                <Box
                  component="img"
                  sx={{ width: "100%", borderRadius: "20px" }}
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

        <Modal
          open={open == 1 || open == 2}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Carousel>
              {open === 1
                ? Alert360_Data.map((item, idx) => (
                    <Item key={idx} item={item} />
                  ))
                : open === 2
                ? Kepler_Data.map((item, idx) => <Item key={idx} item={item} />)
                : null}
            </Carousel>
          </Box>
        </Modal>
      </Box>
    </Slide>
  );
};

export default Index;

function Item(props) {
  return (
    <Paper>
      <Box
        component={"img"}
        sx={{
          width: "100%",
          height: "500px",
          borderRadius: "20px",
          "@media (max-width:850px)": {
            height: "350px",
          },
        }}
        src={props.item.image}
      />
    </Paper>
  );
}
