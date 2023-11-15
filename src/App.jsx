import { useState } from "react";
import Layout from "./layout/Index";
import ThemeContext, { darkTheme, lightTheme } from "./utils/muiDualTheme";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const setTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  console.log(lightTheme);

  return (
    <>
      <button onClick={() => setTheme()}>click</button>
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
