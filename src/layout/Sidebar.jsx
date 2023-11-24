import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  sidebarStackStyle,
  GradientTypography,
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
        // src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
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
