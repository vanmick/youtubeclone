import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { render } from "react-dom";

const App = () => {
  render(
    <BrowserRouter>
      Navbar
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
