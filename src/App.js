import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const theme = createTheme({
  typography: {
    fontFamily: "Bitter, sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home />
      <About />
    </ThemeProvider>
  );
};

export default App;
