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
    desc: "What's Missing From Your Hospital Security System? · Alert Systems and Panic Buttons Can Save Lives · Enter 360Alert: The App that Fills Your Security Gaps.",
    link: "local",
    mainImage: Alert360_Data[0].image,
  },
  {
    id: 2,
    name: "KEPLER",
    desc: "Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.",
    link: "local",
    mainImage: Kepler_Data[0].image,
  },
  {
    id: 3,
    name: "Pizza Town",
    desc: "It's hot, and succulent at the same time. It's truly a wonderful taste when you take that first bite, and al the flavors of the sauce, cheese",
    link: "https://irfanalvi01.github.io/pizza-restaurant-vuejs/",
    mainImage: `${PizzaTown}`,
  },
  {
    id: 4,
    name: "Sorobon Resort",
    desc: "Best Price Guarantee. Book at Auchrannie Resort, Brodick. No Reservation Costs. Great Rates. Villas. Hotels. Flight + Hotel. ",
    link: "https://book.sorobonbeachresort.com",
    mainImage: `${SorobonResort}`,
  },
  {
    id: 5,
    name: "WhereBy Site",
    desc: "Best Price Guarantee. Book at Auchrannie Resort, Brodick. No Reservation Costs. Great Rates. Villas. Hotels. Flight + Hotel. ",
    link: "https://whereby-irfanalvi01s-projects.vercel.app/",
    mainImage: `${WhereBy}`,
  },
  {
    id: 6,
    name: "uMate Site",
    desc: "Breakfast offers fantastic signature plates that will dazzle your taste buds. We also realize nobody builds a better omelet, pa ncake, salad or sandwich",
    link: "local",
    mainImage: UMate_Data[0].image,
  },
  {
    id: 7,
    name: "Path Finder",
    desc: "Breakfast offers fantastic signature plates that will dazzle your taste buds. We also realize nobody builds a better omelet, pa ncake, salad or sandwich",
    link: "local",
    mainImage: `${PathFinder}`,
  },
  {
    id: 8,
    name: "BreakFast App",
    desc: "Breakfast offers fantastic signature plates that will dazzle your taste buds. We also realize nobody builds a better omelet, pa ncake, salad or sandwich",
    link: "local",
    mainImage: `${BreakFast}`,
  },
  {
    id: 9,
    name: "Image to Story (AI)",
    desc: "Breakfast offers fantastic signature plates that will dazzle your taste buds. We also realize nobody builds a better omelet, pa ncake, salad or sandwich",
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
