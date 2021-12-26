import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import CardDetails from "./components/cards/CardDetails";

export function App() {
  return (
    <Router>
      <div className="App bg-black">
        <Header brand="The Rick & Morty" type="App" />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}
