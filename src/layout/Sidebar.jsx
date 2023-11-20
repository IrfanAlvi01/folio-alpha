import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  sidebarMainBoxStyle,
  sidebarStackStyle,
} from "../utils/muiComponentStyles";

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
          transform: "translateY(-50%)",
        }}
      >
        Hi
      </Box>
      <Typography mt={16}>Beatrice Wambui</Typography>
      <Box sx={sidebarMainBoxStyle}>
        <Box>Sidebar</Box>
        <Box>Sidebar</Box>
        <Box>Sidebar</Box>
        <Box>Sidebar</Box>
        <Box>Sidebar</Box>
        <Box>Sidebar</Box>
        <Box>Sidebar</Box>
        <Box>Sidebar</Box>
        <Box>Sidebar</Box>
      </Box>
    </Stack>
  );
};

export default Sidebar;
