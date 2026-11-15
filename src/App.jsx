import React from "react";
import Home from "./pages/Home";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-primary text-white min-h-screen  px-[4rem] py-[1rem]">
      <Home />
      <Hero />
    </div>
  );
};

export default App;
