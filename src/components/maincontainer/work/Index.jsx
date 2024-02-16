import React, { useEffect, useState } from "react";
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
  ModalBox,
  coloredBoxStyle1,
  coloredBoxStyle2,
  globleTypographies,
  mainContainerBoxStyle,
} from "../../../utils/muiComponentStyles";
import { EduIcon, ExpIcon } from "../../../assets/AssetExporter";
import {
  Alert360_Data,
  BreakFast,
  Breakfast_Data,
  ImageStory_Data,
  Kepler_Data,
  PathFind_Data,
  PathFinder,
  PizzaTown,
  SorobonResort,
  UMate_Data,
  WhereBy,
} from "../../../assets/WorkImageExporter";
import Carousel from "react-material-ui-carousel";

const projectList = [
  {
    id: 1,
    name: "360Alert",
    desc: "360Alert can provide seamless, instant communication while integrating various sensors and AI to enable real-time data monitoring and automation by combining real-time messaging with push notifications, developed in ReactJs with MUI5, Socket.io etc.",
    link: "local",
    mainImage: Alert360_Data[0].image,
  },
  {
    id: 2,
    name: "KEPLER",
    desc: "Kepler Vision is a super portal of 360Alert. It is mainly used to manage and monitor all active clients, their implementation of 360Alert system, client subscribions and export records in csv & pdf, also developed in ReactJs with MUI5. ",
    link: "local",
    mainImage: Kepler_Data[0].image,
  },
  {
    id: 3,
    name: "Pizza Town",
    desc: "It's hot, and succulent Pizza Town project is a small and lite single page site based on latest VueJs via CDN. I developed this project to get started with VueJs.",
    link: "https://irfanalvi01.github.io/pizza-restaurant-vuejs/",
    mainImage: `${PizzaTown}`,
  },
  {
    id: 4,
    name: "Sorobon Resort",
    desc: "Sorobon Luxury Beach Resort rests on a small sandy strip of one of the most beautiful locations in the Caribbean. User can book resort over the globe, based on NuxtJs.",
    link: "https://book.sorobonbeachresort.com",
    mainImage: `${SorobonResort}`,
  },
  {
    id: 5,
    name: "WhereBy Clone",
    desc: "Developed Whereby homepage clone to enchance my UI skills with usage popular frontend library MUI5.",
    link: "https://whereby-irfanalvi01s-projects.vercel.app/",
    mainImage: `${WhereBy}`,
  },
  {
    id: 6,
    name: "uMate Site",
    desc: "uMate is a content consumption site, developed to get some hands on experience in RapidAPI(Youtube) and MUI5",
    link: "local",
    mainImage: UMate_Data[0].image,
  },
  {
    id: 7,
    name: "Path Finder",
    desc: "Implemented popular algorithms(A* and Dijkstra) to detect shortest path between two specific points with and without hurdles.",
    link: "local",
    mainImage: `${PathFinder}`,
  },
  {
    id: 8,
    name: "BreakFast App",
    desc: "Developed Breakfast android app to familiar with other technologies such as Flutter which can be used to code cross plate apps, web-apps and games.",
    link: "local",
    mainImage: `${BreakFast}`,
  },
  {
    id: 9,
    name: "Image to Story (AI)",
    desc: "Image to Story is a small tool which take an image and provide image captioning, object detection and story telling. Developed in Python with the help of popular python's AI framework LangChain and Huggingface, WebUI developed by StreamLit library.",
    link: "local",
    mainImage: ImageStory_Data[0].image,
  },
];

const mapArrayByOpen = {
  1: Alert360_Data,
  2: Kepler_Data,
  6: UMate_Data,
  7: PathFind_Data,
  8: Breakfast_Data,
  9: ImageStory_Data,
};

const Index = ({ currentIndex, activeIndex, isSmall }) => {
  const [open, setOpen] = useState("close");
  const [modalIndex, setModalIndex] = useState(0);

  const handleClick = (id, link) => {
    if (link === "local") {
      setOpen(id);
    } else {
      window.open(link);
    }
  };

  const handleOnClose = () => {
    setOpen("close");
    setModalIndex(0);
  };

  const changeModalImage = (e) => {
    if (e.key === "ArrowLeft") {
      // If supposed previous child is < 0 set it to last child
      setModalIndex((prevIndex) =>
        prevIndex - 1 < 0 ? mapArrayByOpen[open].length - 1 : prevIndex - 1
      );
    } else if (e.key === "ArrowRight") {
      // If supposed next child is > length -1 set it to first child
      setModalIndex((prevIndex) =>
        prevIndex + 1 > mapArrayByOpen[open].length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Set and cleanup the event listener
  useEffect(() => {
    document.addEventListener("keydown", changeModalImage);

    return function cleanup() {
      document.removeEventListener("keydown", changeModalImage);
    };
  }, [open]);

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
                Texto
              </Typography>
            </Box> */}
              <Box
                sx={coloredBoxStyle1}
                onClick={() => handleClick(item.id, item.link)}
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
          open={open != "close"}
          onClose={handleOnClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox>
            <Carousel index={modalIndex} sx={{ height: "100%" }} interval={3700}>
              {mapArrayByOpen[open]?.map((item, idx) => (
                <Item key={idx} item={item} />
              ))}
            </Carousel>
          </ModalBox>
        </Modal>
      </Box>
    </Slide>
  );
};

export default Index;

function Item(props) {
  return (
    <Paper sx={{ overflow: "hidden" }}>
      <Box
        sx={{
          borderRadius: "20px",
          width: "100%",
          paddingTop: "46%",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${props.item.image})`,
        }}
      ></Box>
    </Paper>
  );
}
