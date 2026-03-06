import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-between 
                 px-24 text-white
                 bg-linear-to-br from-purple-900 via-purple-700 to-indigo-900
                 relative overflow-hidden"
    >
      
      <div className="max-w-2xl">
        <span
          className="inline-block px-5 py-2 mb-8 text-sm 
                     bg-white/10 backdrop-blur-lg 
                     border border-white/20 rounded-full"
        >
          ✨ Available for work
        </span>

        <h1 className="text-7xl font-bold leading-tight mb-6">
          Muhammmad Ali<br />
          <span className="bg-gradient-to-r from-pink-300 to-purple-500 bg-clip-text text-transparent">
            Frontend Developer
          </span>
        </h1>

        <p className="text-gray-300 text-lg mb-10">
          Crafting digital experiences that blend innovation with <br/>aesthetics
        </p>

        <div className="flex gap-6">
          <button
            className="px-8 py-3 rounded-full 
                       bg-linear-to-r from-pink-500 to-purple-600
                       hover:scale-105 transition duration-300"
          >
            View Projects
          </button>

          <button
            className="px-8 py-3 rounded-full 
                       border border-white/30 
                       hover:bg-white/10 transition duration-300"
          >
            Let’s Talk
          </button>
        </div>
      </div>

     
      <div className="relative hidden md:block">
        <img
          src="/images/img20.jpg"
          alt="profile"
          className="w-[520px] rounded-3xl border border-white/20 shadow-2xl"
        />

      
        <div
          className="absolute -top-6 -right-6 
               bg-white/10 backdrop-blur-xl
               border border-white/20
               rounded-2xl px-6 py-4 text-center
               shadow-xl animate-float"
        >
          <h3 className="text-2xl font-bold">15+</h3>
          <p className="text-sm text-gray-300">Projects</p>
        </div>

      
        <div
          className="absolute -bottom-6 -left-6
               bg-white/10 backdrop-blur-xl
               border border-white/20
               rounded-2xl px-6 py-4 text-center
               shadow-xl animate-float-delay"
        >
          <h3 className="text-2xl font-bold">3+</h3>
          <p className="text-sm text-gray-300">Years Exp.</p>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-300 cursor-pointer">
        <ArrowDown size={28} />
      </div>
    
      
    </section>
  );
};

export default Hero;
