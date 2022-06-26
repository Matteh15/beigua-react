import React from "react";

import Notfound from "./components/Notfound";
import GlobalStyle from "./components/GlobalStyle";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

import { Container } from "@mui/material";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <HomePage />
    </>
  );
};

export default App;
