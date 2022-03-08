import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#64ffda", //teal
      dark: "#0a192f",
      light: "#f2f2f2",
    },
    // secondary: {
    //   primary: "#ccd6f6",
    //
    //   dark: "#000",
    // },
  },
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
