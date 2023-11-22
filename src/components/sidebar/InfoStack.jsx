import React from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { sidebarInfoStackStyle } from "../../utils/muiComponentStyles";
import { EmailIcon, LocationIcon, PhoneIcon } from "../../assets/AssetExporter";

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
            <Box component={item.icon} sx={{ minWidth: 20 }} />
            <Stack ml={2}>
              <Typography variant="infoTitle">{item.title}:</Typography>
              <Typography variant="infoValue">{item.value}</Typography>
            </Stack>
          </Stack>
          <Divider />
        </>
      ))}
      <Button variant="gradientContained">click</Button>
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
