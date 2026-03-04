import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-[#140b2d] text-white py-24 px-6">
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
      </div>
    </section>
  );
};

export default About;
