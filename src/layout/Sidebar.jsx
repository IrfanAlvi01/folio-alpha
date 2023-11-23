import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  sidebarStackStyle,
  GradientTypography,
} from "../utils/muiComponentStyles";
import InfoStack from "../components/sidebar/InfoStack";
import { BadgeStack } from "../components/ComponentExporter";

const Sidebar = () => {
  return (
    <Stack alignItems={"center"} sx={sidebarStackStyle}>
      <Box
        sx={{
          height: 200,
          width: 200,
          borderRadius: "20px",
          position: "absolute",
          background: "cornsilk",
          transform: "translateY(-60%)",
        }}
      >
        Hi
      </Box>
      <Stack gap={0.5} mt={14} direction={"row"}>
        <GradientTypography component="span">
          <Typography variant="name"> Beatrice</Typography>
        </GradientTypography>
        <Typography variant="name"> Wambui</Typography>
      </Stack>

      <BadgeStack />
      <InfoStack />
      {/* <Box sx={sidebarMainBoxStyle}>
        <Box>Sidebar</Box>
      </Box> */}
    </Stack>
  );
};

export default Sidebar;
