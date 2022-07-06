import React from "react";

import Notfound from "./components/Notfound";
import GlobalStyle from "./components/GlobalStyle";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Article from "./components/Article";

import { Container } from "@mui/material";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
};

export default App;
