// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";
import ContactUs from "./pages/ContactUs"; // Ensure this file exists
import BuyNow from "./pages/BuyNow"; // Ensure this file exists
import Header from "./components/Header"; // Ensure this file exists
import Footer from "./components/Footer"; // Ensure this file exists
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/buy-now" element={<BuyNow />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
