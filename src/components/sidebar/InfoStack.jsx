import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import {
  globleTypographies,
  sidebarInfoStackStyle,
} from "../../utils/muiComponentStyles";
import {
  CheckedIcon,
  CopyIcon,
  DownloadIcon,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
  Resume,
} from "../../assets/AssetExporter";

const InfoStack = () => {
  const [copiedClear, setCopiedClear] = useState(null);

  const handleClick = async (text, idx) => {
    await navigator.clipboard.writeText(text);
    setCopiedClear(idx);
    setTimeout(() => setCopiedClear(null), 1000);
  };

  return (
    <Stack sx={sidebarInfoStackStyle}>
      {infoList.map((item, idx) => (
        <React.Fragment key={idx}>
          <Stack mb={1} mt={1} direction={"row"} alignItems={"center"}>
            <Box component={item.icon} sx={{ minWidth: 20 }} />
            <Stack ml={2} sx={{ overflowX: "hidden" }}>
              <Typography sx={globleTypographies} variant="infoTitle">
                {item.title}:
              </Typography>
              <Typography sx={globleTypographies} variant="infoValue">
                {item.value}
                <IconButton
                  color="inherit"
                  size="small"
                  onClick={() => handleClick(item.value, idx)}
                >
                  {copiedClear === idx ? <CheckedIcon /> : <CopyIcon />}
                </IconButton>
              </Typography>
            </Stack>
          </Stack>
          <Divider />
        </React.Fragment>
      ))}

      <a href={Resume} download={"Irfan's Resume"} target="blank">
        <Button sx={{ mt: 4, mx: "auto" }} variant="gradientContained">
          <Box component={DownloadIcon} sx={{ width: 26, mr: 1 }} /> Download
          Resume
        </Button>
      </a>
    </Stack>
  );
};

export default InfoStack;

const infoList = [
  {
    title: "phone",
    value: "+923488903810",
    icon: PhoneIcon,
  },
  {
    title: "email",
    value: "irfan.alvi12@hotmail.com",
    icon: EmailIcon,
  },
  {
    title: "location",
    value: "Pakistan, Lahore",
    icon: LocationIcon,
  },
];
