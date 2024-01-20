import { useState } from "react";
import Layout from "./layout/Index";
import ThemeContext, { darkTheme, lightTheme } from "./utils/muiDualTheme";
import { CssBaseline, ThemeProvider, createTheme, Fab } from "@mui/material";
import { DarkModeIcon, LightModeIcon } from "./assets/AssetExporter";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const setTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <>
      <Fab
        aria-label="toggle theme"
        onClick={() => setTheme()}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        sx={{
          position: "fixed",
          top: 50,
          right: isHovered ? 0 : -40,
          transition: "right 0.5s",
          background: isDarkTheme
            ? "Gainsboro"
            : "linear-gradient(300deg, #EC1B09 7.92%, #FF9C1A 108.2%)",
        }}
      >
        {isDarkTheme ? <LightModeIcon /> : <DarkModeIcon />}
      </Fab>
      <ThemeProvider
        theme={
          isDarkTheme == true ? createTheme(darkTheme) : createTheme(lightTheme)
        }
      >
        <CssBaseline />
        <ThemeContext.Provider
          value={{
            isDarkTheme: isDarkTheme,
            setTheme: setTheme,
          }}
        >
          <Layout />
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
