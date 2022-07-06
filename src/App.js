import React from "react";

import Notfound from "./components/Notfound";
import GlobalStyle from "./components/GlobalStyle";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Article from "./components/Article";
import ChiSiamo from "./components/ChiSiamo";
import Petizione from "./components/Petizione";

import { Container } from "@mui/material";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/articoli" exact element={<Article />} />
          <Route path="/chi-siamo" exact element={<ChiSiamo />} />
          <Route path="/petizione" exact element={<Petizione />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
