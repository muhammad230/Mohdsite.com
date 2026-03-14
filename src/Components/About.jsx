import React from "react";
import { FaCode, FaPalette, FaRocket, FaBolt } from "react-icons/fa";   

const About = () => {
  return (
    <section id="about" className="bg-[#1b0d41] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-purple-400 tracking-widest mb-4">
          ABOUT ME
        </p>
        <h2 className="text-center text-5xl md:text-6xl font-bold mb-16">
          Passion Meets{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Precision
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              I'm a developer who believes that great code is an art form. With
              over 3 years of experience, I've mastered the balance between{" "}
              <span className="text-purple-400">cutting-edge technology</span>{" "}
              and{" "}
              <span className="text-purple-400">
                timeless design principles
              </span>
              .{" "}
            </p>
            <p>
              Every project is an opportunity to push boundaries, challenge
              conventions, and create something truly exceptional. I don't just
              build websites—I craft digital experiences that leave lasting
              impressions
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-purple-800/40 p-8 rounded-2xl border border-purple-500/20 hover:scale-105 transition duration-300">
              <h3 className="text-4xl font-bold text-purple-400">50+</h3>
              <p className="text-gray-400">Clients Satisfied</p>
            </div>
            <div className="bg-blue-800/40 p-8 rounded-2xl border border-blue-500/20 hover:scale-105 transition duration-300">
              <h3 className="text-4xl font-bold text-purple-400">30+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="bg-orange-800/40 p-8 rounded-2xl border border-orange-500/20 hover:scale-105 transition duration-300">
              <h3 className="text-4xl font-bold text-purple-400">3+</h3>
              <p className="text-gray-400">Years of Experience</p>
            </div>
            <div className="bg-green-800/40 p-8 rounded-2xl border border-green-500/20 hover:scale-105 transition duration-300">
              <h3 className="text-4xl font-bold text-purple-400">10+</h3>
              <p className="text-gray-400">Awards Won</p>
            </div>
          </div>
        </div>
         {/* Feature Cards Section */}
        <div className="grid md:grid-cols-4 gap-6 mt-24">
            <div className="bg-[#111c33] p-8 rounded-2xl border border-white/10 hover:-translate-y-2 hover:border-blue-500 transition duration-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/20 mb-4">
                  <FaCode className="text-blue-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                <p className="text-gray-400 text-sm">
              Writing scalable, maintainable code with best practices
            </p>
            </div>
            
             <div className="bg-[#111c33] p-8 rounded-2xl border border-white/10 hover:-translate-y-2 hover:border-purple-500 transition duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/20 mb-4">
              <FaPalette className="text-purple-500 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Creative Design</h3>
            <p className="text-gray-400 text-sm">
              Blending aesthetics with functionality
            </p>
          </div>
             <div className="bg-[#111c33] p-8 rounded-2xl border border-white/10 hover:-translate-y-2 hover:border-purple-500 transition duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/20 mb-4">
              <FaRocket className="text-orange-400 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-400 text-sm">
              Efficient workflows and quick turnarounds
            </p>
          </div>
             <div className="bg-[#111c33] p-8 rounded-2xl border border-white/10 hover:-translate-y-2 hover:border-purple-500 transition duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/20 mb-4">
              <FaBolt className="text-green-400 text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Performance</h3>
            <p className="text-gray-400 text-sm">
              Optimized for speed and user experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
