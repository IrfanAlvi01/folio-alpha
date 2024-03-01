import React, { useState, useEffect } from "react";
import Topbar from "./Topbar.jsx";
import Sidebar from "./Sidebar.jsx";
import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import MainContainer from "./MainContainer.jsx";
import styled from "@emotion/styled";

const Index = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => setIsSmall(isXSmall ? true : false), [isXSmall]);

  return (
    <>
      <Container disableGutters sx={{ overflowX: "" }}>
        <Grid container mt={0}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <ScrollbarLessBox>
              <Sidebar />
            </ScrollbarLessBox>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <ScrollbarLessBox>
              <Topbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
              <MainContainer currentIndex={currentTab} isSmall={isSmall} />
            </ScrollbarLessBox>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Index;

const ScrollbarLessBox = styled(Box)(({ theme }) => ({
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.up("md")]: {
    height: "100vh",
    marginRight: theme.spacing(2),
    overflow: "auto",
  },
}));
