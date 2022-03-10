import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import FeaturedProject from "./components/FeaturedProjects";
import ContactForm from "./components/ContactForm";
import { amber, deepOrange, grey } from "@mui/material/colors";
import { useLocalStorage } from "./hooks/useLocalStorage";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === "dark" && {
        main: "#64ffda", //teal
        dark: "#0a192f",
        light: "#f2f2f2",
      }),
    },
    ...(mode === "dark" && {
      background: {},
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : ""),
      // : {
      //     primary: "#fff",
      //     secondary: grey[500],
      //   }
    },
  },
  typography: {
    fontFamily: "Bitter, sans-serif",
  },
});

const App = ({ themeStorage, setThemeStorage }) => {
  return (
    <>
      <CssBaseline />
      <Navbar themeStorage={themeStorage} setThemeStorage={setThemeStorage} />
      <Home />
      <About />
      <FeaturedProject />
      <ContactForm />
    </>
  );
};

export default function DarkThemeWithCustomPalette() {
  const [themeStorage, setThemeStorage] = useLocalStorage("theme", "dark");
  const theme = createTheme(getDesignTokens(themeStorage));

  return (
    <ThemeProvider theme={theme}>
      <App themeStorage={themeStorage} setThemeStorage={setThemeStorage} />
    </ThemeProvider>
  );
}
