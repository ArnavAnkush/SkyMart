import { RiArrowRightLine } from "@remixicon/react";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="border rounded-4xl flex flex-col md:flex-row justify-between gap-10 overflow-hidden relative p-8 md:p-12 min-h-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#23280f_0.5px,transparent_1px),linear-gradient(to_bottom,#23280f_0.5px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

        <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
          <h4 className="text-accent uppercase tracking-widest font-thin">
            Good Afternoon 👋
          </h4>

          <h1 className="text-4xl md:text-6xl font-mont font-extrabold">
            Welcome back,
          </h1>

          <h1 className="text-accent text-4xl md:text-6xl font-extrabold">
            <span>Arnav</span>!
          </h1>

          <p className="text-text-secondary text-base md:text-lg max-w-xl">
            Discover today's hand-picked products across electronics, fashion,
            and more.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 tracking-wide">
            <button className="border font-semibold py-3 px-6 flex items-center gap-2 rounded-xl text-primary bg-accent">
              <span className="text-lg">Shop Now</span>
              <RiArrowRightLine className="text-base" />
            </button>

            <button className="border py-3 px-6 rounded-xl hover:bg-accent hover:text-primary transition">
              View All Products
            </button>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-5 md:min-w-60 justify-center">
          <div className="flex flex-col items-center justify-center p-6 border border-accent rounded-xl bg-[#23280F]">
            <h3 className="text-3xl font-extrabold">20+</h3>
            <p>Products Available</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 border rounded-xl bg-[#23280F]/50">
            <h3 className="text-3xl font-extrabold">Free</h3>
            <p>Delivery on ₹999+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
