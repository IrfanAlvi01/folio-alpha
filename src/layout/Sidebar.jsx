import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  sidebarStackStyle,
  GradientTypography,
  globleTypographies,
} from "../utils/muiComponentStyles";
import InfoStack from "../components/sidebar/InfoStack";
import { BadgeStack } from "../components/ComponentExporter";
import { Avatar } from "../assets/AssetExporter";

const Sidebar = () => {
  return (
    <Stack alignItems={"center"} sx={sidebarStackStyle}>
      <Box
        component="img"
        sx={{
          height: 200,
          width: 200,
          borderRadius: "20px",
          position: "absolute",
          background: "black",
          transform: "translateY(-60%)",
        }}
        src={Avatar}
      />
      <Stack gap={0.5} mt={14} direction={"row"}>
        <GradientTypography component="span">
          <Typography variant="name"> Irfan</Typography>
        </GradientTypography>
        <Typography variant="name"> Alvi</Typography>
      </Stack>
      <BadgeStack />
      <InfoStack />
    </Stack>
  );
};

export default Sidebar;
