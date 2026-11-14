import {
  RiFlashlightFill,
  RiLogoutBoxRLine,
  RiShoppingCart2Line,
} from "@remixicon/react";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-primary text-white px-6 md:px-10 py-5 border-b border-secondary">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-accent text-primary p-3 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(200,244,0,0.15)]">
            <RiFlashlightFill size={23} />
          </div>

          <h3 className="text-2xl md:text-3xl font-mont font-bold tracking-wider">
            Sky<span className="text-accent">Mart</span>
          </h3>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12 font-mont text-sm tracking-wide text-text-secondary">
          <a href="#" className="text-accent transition-colors duration-300">
            Home
          </a>

          <a
            href="#"
            className="hover:text-accent transition-colors duration-300"
          >
            About
          </a>

          <a
            href="#"
            className="hover:text-accent transition-colors duration-300"
          >
            Products
          </a>
        </nav>

        {/* User Actions */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Profile */}
          <div className="flex items-center gap-3 border border-secondary bg-secondary/40 rounded-xl p-2 pr-4 cursor-pointer hover:border-accent/40 transition-all duration-300">
            <div className="bg-accent text-primary font-mont font-bold py-2 px-3 rounded-lg text-sm">
              A
            </div>

            <p className="font-mont text-xs md:text-sm tracking-wider">Arnav</p>
          </div>

          {/* Cart */}
          <button
            aria-label="Shopping cart"
            className="text-accent bg-secondary/50 p-3 rounded-xl border border-secondary hover:bg-accent hover:text-primary transition-all duration-300"
          >
            <RiShoppingCart2Line size={21} />
          </button>

          {/* Logout */}
          <button
            aria-label="Logout"
            className="text-text-secondary p-3 rounded-xl border border-secondary hover:text-red-400 hover:bg-[#3A1818] hover:border-red-900 transition-all duration-300"
          >
            <RiLogoutBoxRLine size={21} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
