import React, { useContext } from "react";
import {
  GradientWrapper,
  NavButton,
  globleTypographies,
  topbarBoxStyle,
} from "../utils/muiComponentStyles";
import ThemeContext from "../utils/muiDualTheme";
import { Box, Stack, Typography } from "@mui/material";
import {
  WorkIcon,
  HomeIcon,
  ResumeIcon,
  ContactIcon,
  HomeIconActive,
  WorkIconActive,
  ResumeIconActive,
  ContactIconActive,
} from "../assets/AssetExporter";

const Topbar = ({ currentTab, setCurrentTab }) => {
  const themeContext = useContext(ThemeContext);

  const handleNavButtonClick = (id) => {
    setCurrentTab(id);
  };

  // console.log(themeContext.isDarkTheme);

  return (
    <>
      <Stack alignItems={"flex-end"} mt={"2px"}>
        <Box sx={topbarBoxStyle}>
          {headerList?.map((item, idx) => (
            <NavButton
              key={idx}
              active={(currentTab == item?.id).toString()}
              onClick={() => handleNavButtonClick(item?.id)}
            >
              <Box
                sx={{ height: 25, width: 25, zIndex: 2 }}
                component={
                  currentTab == item?.id ? item?.activeIcon : item?.normalIcon
                }
              />
              <Typography sx={globleTypographies} variant="header">
                {item?.name}
              </Typography>
              <GradientWrapper active={currentTab == item?.id} />
            </NavButton>
          ))}
        </Box>
      </Stack>
    </>
  );
};

export default Topbar;

const headerList = [
  {
    id: 1,
    name: "home",
    normalIcon: HomeIcon,
    activeIcon: HomeIconActive,
  },
  {
    id: 2,
    name: "resume",
    normalIcon: ResumeIcon,
    activeIcon: ResumeIconActive,
  },
  {
    id: 3,
    name: "work",
    normalIcon: WorkIcon,
    activeIcon: WorkIconActive,
  },
  {
    id: 4,
    name: "contact",
    normalIcon: ContactIcon,
    activeIcon: ContactIconActive,
  },
];
