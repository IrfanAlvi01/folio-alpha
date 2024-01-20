import React, { useState, useEffect } from "react";
import Topbar from "./Topbar.jsx";
import Sidebar from "./Sidebar.jsx";
import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import MainContainer from "./MainContainer.jsx";

const Index = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => setIsSmall(isXSmall ? true : false), [isXSmall]);

  return (
    <>
      <Container disableGutters sx={{ overflow: "hidden" }}>
        <Topbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <Grid spacing={2} container mt={0}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <MainContainer currentIndex={currentTab} isSmall={isSmall} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Index;
