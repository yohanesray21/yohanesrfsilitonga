import { Switch } from "@mui/material";
import React from "react";
import { Routes, Route, Router } from "react-router-dom";

import Home from "./Home";
import Layout from "./Layout";
import Notes from "./Notes";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Layout>
  );
};

export default App;
