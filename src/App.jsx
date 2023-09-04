import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Lits from "./page/Lits";
import Meubles from "./page/Meubles";
import Jouets from "./page/Jouets";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/lits" element={<Lits />} />
        <Route path="/meubles" element={<Meubles />} />
        <Route path="/jouets" element={<Jouets />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
