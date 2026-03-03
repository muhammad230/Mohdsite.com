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
        <div className="flex gap-4">
            <button className="px-6 py-3 rounded-full 
                             bg-linear-to-br from-pink-500 to-purple-600 
                             hover:scale-105 transition duration-300">
            View Projects
          </button>
          <button className="px-6 py-3 rounded-full 
                             border border-white/30 
                             hover:bg-white/10 transition duration-300">
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
