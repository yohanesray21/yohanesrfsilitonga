import { CssBaseline } from "@mui/material";
import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Home />
    </React.Fragment>
  );
};

export default App;
