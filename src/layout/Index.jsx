import React from "react";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar.jsx";
import MainContainer from "./MainContainer.jsx";
import Topbar from "./Topbar.jsx";

const Index = () => {
  return (
    <>
      <Topbar />
      <Grid spacing={2} container mt={0}>
        <Grid item md={4} lg={4}>
          <Sidebar />
        </Grid>
        <Grid item md={8} lg={8}>
          <MainContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
