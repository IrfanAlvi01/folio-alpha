import { Box, Grid } from "@mui/material";
import React from "react";

const Index = () => {
  return (
    <>
      <Grid container>
        <Grid item md={4} lg={4} sx={{ background: "yellow" }}>
          <Box>Alpha</Box>
        </Grid>
        <Grid item md={8} lg={8} sx={{ background: "lime" }}>
          Beta
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
