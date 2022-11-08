import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./AppBar.css";
import logo from "./AppBar.logo.svg";
import "./App.css";
import NotFound from "./NotFound";
import Convertisseur from "./Convertisseur";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Convertisseur />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
