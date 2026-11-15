import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
