import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-20 text-white">
      <div className="max-w-xl">
        <span className="inline-block px-4 py-2 mb-6 text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
          ✨ Available for work
        </span>
        <h1 className="text-6xl font-bold leading-tight mb-6 ">
          Creative <br /> Developer
        </h1>
        <p className="text-gray-300 mb-8">
        Crafting digital experiences that blend innovation with aesthetics
        </p>
      </div>
    </section>
  );
};

export default Hero;
