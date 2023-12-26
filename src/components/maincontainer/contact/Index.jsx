import React from "react";
import { Box, Grid, Slide, Stack, TextField, Typography } from "@mui/material";
import {
  MainHeader,
  textfieldStyle,
  globleTypographies,
  mainContainerBoxStyle,
  sidebarInfoStackStyle,
} from "../../../utils/muiComponentStyles";

const Index = ({ currentIndex, activeIndex }) => {
  return (
    <Slide
      mountOnEnter
      timeout={500}
      unmountOnExit
      direction="left"
      in={currentIndex == 4 && activeIndex === 4}
    >
      <Box sx={mainContainerBoxStyle}>
        <MainHeader leftDir={"190%"} variant="custom">
          Contact
        </MainHeader>
        <Stack sx={sidebarInfoStackStyle}>
          <Typography>3</Typography>
          <Typography>e</Typography>

          <TextField
            fullWidth
            sx={{ ...textfieldStyle, mt: 1 }}
            label="text"
            rows={4}
            name="note"
            // onChange={(e) => handleStateChange(e)}
            InputLabelProps={{
              style: { color: "#6D7B88" },
            }}
          />
          <TextField
            fullWidth
            multiline
            sx={{ ...textfieldStyle, mt: 1 }}
            label="text"
            rows={4}
            name="note"
            // onChange={(e) => handleStateChange(e)}
            InputLabelProps={{
              style: { color: "#6D7B88" },
            }}
          />
        </Stack>
      </Box>
    </Slide>
  );
};

export default Index;
