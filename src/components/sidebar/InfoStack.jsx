import React from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import {
  globleTypographies,
  sidebarInfoStackStyle,
} from "../../utils/muiComponentStyles";
import {
  DownloadIcon,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
} from "../../assets/AssetExporter";

const InfoStack = () => {
  return (
    <Stack sx={sidebarInfoStackStyle}>
      {infoList.map((item, idx) => (
        <>
          <Stack
            key={idx}
            mb={1}
            mt={1}
            direction={"row"}
            alignItems={"center"}
          >
            {console.log(idx)}
            <Box component={item.icon} sx={{ minWidth: 20 }} />
            <Stack ml={2} sx={{ overflowX: "hidden" }}>
              <Typography sx={globleTypographies} variant="infoTitle">
                {item.title}:
              </Typography>
              <Typography sx={globleTypographies} variant="infoValue">
                {item.value}
              </Typography>
            </Stack>
          </Stack>
          <Divider />
        </>
      ))}
      <Button sx={{ mt: 4, mx: "auto" }} variant="gradientContained">
        <Box component={DownloadIcon} sx={{ width: 26, mr: 1 }} /> Download
        Something
      </Button>
    </Stack>
  );
};

export default InfoStack;

const infoList = [
  {
    title: "phone",
    value: "+254723909353",
    icon: PhoneIcon,
  },
  {
    title: "email",
    value: "beatricewambuimbugua@gmail.com",
    icon: EmailIcon,
  },
  {
    title: "location",
    value: "Nairobi, Kenya",
    icon: LocationIcon,
  },
];
