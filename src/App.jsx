import React from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-primary text-white min-h-screen  px-[4rem] py-[1rem]">
      <Navbar />
      <Home />
      <AppRoutes />
    </div>
  );
};

export default App;
