import { RiArrowRightLine } from "@remixicon/react";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="border rounded-4xl flex justify-between px-[4rem] py-[3rem] ">
        <div className="left flex flex-col gap-[1rem] ">
          <h4 className="text-accent uppercase tracking-widest font-thin">
            Good Afternoon 👋
          </h4>
          <h1 className="text-6xl font-mont font-extrabold">Welcome back,</h1>
          <h1 className="text-accent text-6xl font-extrabold">
            <span>Arnav </span>!
          </h1>
          <p className="text-text-secondary text-lg">
            Discover today's pick hand curated products acroos electronics,
            fashion, and more.
          </p>
          <div className="mt-4 flex items center gap-6 tracking-wide">
            <div className="border font-[600] py-3 px-6 flex items-center gap-2 rounded-xl text-primary bg-accent">
              <button className="text-lg">Shop Now</button>
              <RiArrowRightLine className="text-base" />
            </div>
            <button className="border py-3 px-6 rounded-xl">
              View All Products
            </button>
          </div>
        </div>
        <div className="right flex flex-col gap-5">
          <div className="flex flex-col items-center justify-center p-6 border-accent border rounded-xl bg-[#23280F]">
            <h3 className="text-3xl font-extrabold">20+</h3>
            <p>Products Available</p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 border rounded-xl">
            <h3 className="text-3xl font-extrabold">Free</h3>
            <p>Delivery on ₹999+</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
