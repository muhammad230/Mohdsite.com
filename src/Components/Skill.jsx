import React from "react";
import { FaRocket, FaBullseye, FaLightbulb } from "react-icons/fa";

const skillsleft = [
  { name: "React / Next.js", percent: 90, color: "bg-cyan-400" },
  { name: "Node.js / Express", percent: 70, color: "bg-green-400" },
  { name: "UI/UX Design", percent: 85, color: "bg-pink-500" },
  { name: "Three.js / GSAP", percent: 50, color: "bg-indigo-400" },
];

const skillsright = [
  { name: "JavaScript", percent: 93, color: "bg-blue-400" },
  { name: "HTML / CSS", percent: 96, color: "bg-purple-400" },
  { name: "MongoDB / SQL", percent: 50, color: "bg-orange-400" },
  { name: "Git / GitHub", percent: 90, color: "bg-yellow-400" },
];

const SkillBar = ({ name, percent, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-pink-400">{percent}%</span>
      </div>

      <div className="w-full h-2 bg-gray-800 rounded-full">
        <div
          className={`h-2 ${color} rounded-full transition-all duration-700`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};
const tools = [
 "Figma",
"VS Code",
"Git",
"GitHub",
"Vercel",
"Netlify",
"Chrome DevTools",
"Postman",
"Tailwind CSS",
"Bootstrap",
"npm"
];

const Skill = () => {
  return (
    <section id="skill" className="bg-[#03000a] py-20 px-6 text-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-purple-400 text-xl tracking-widest mb-4">
          Expertise
        </p>

        <h2 className="text-5xl font-bold mb-4">
          Skill &{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
      </div>
      <p className="text-white text-2xl mt-4 text-center mb-12 font-bold">
        Core Competencies
      </p>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Skills */}
        <div>
          {skillsleft.map((skill, index) => (
            <SkillBar key={index} {...skill} />
          ))}
        </div>

        {/* Right Skills */}
        <div>
          {skillsright.map((skill, index) => (
            <SkillBar key={index} {...skill} />
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16">
        <div className="text-center text-2xl font-semibold mb-8">
          <h2>Tools & Frameworks</h2>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-[#0c0c0c] border border-gray-700 rounded-full 
      transition-all duration-300 cursor-pointer
      hover:-translate-y-2 hover:scale-105
      hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mt-18">
          {/* Fast Learner */}
          <div className="bg-[#0c0c0c] border border-gray-800 p-4 rounded-xl ">
            <FaRocket className="text-4xl mx-auto mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2 text-center">
              Fast Learner
            </h3>
            <p className="text-gray-400 text-center">
              Constantly exploring new technologies and staying ahead of trends
            </p>
          </div>
          <div className="bg-[#0c0c0c] border border-gray-800 p-4 rounded-xl ">
            <FaBullseye className="text-4xl mx-auto mb-4 text-pink-400" />
            <h3 className="text-xl font-semibold mb-2 text-center">Detail Oriented</h3>
            <p className="text-gray-400 text-center">
              Obsessed with pixel-perfect designs and clean code
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0c0c0c] border border-gray-800 p-4 rounded-xl ">
            <FaLightbulb className="text-4xl mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-semibold mb-2 text-center">Problem Solver</h3>
            <p className="text-gray-400 text-center">
              Analytical thinking to tackle complex challenges
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
