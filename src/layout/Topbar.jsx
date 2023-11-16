import React from "react";
import { gridTopbarBoxStyle } from "../utils/muiComponentStyles";
import { Box, Stack } from "@mui/material";

const Topbar = () => {
  return (
    <>
      <Stack alignItems={"flex-end"}>
        <Box sx={gridTopbarBoxStyle}>Topbar</Box>
      </Stack>
    </>
  );
};

export default Topbar;
