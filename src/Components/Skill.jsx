import React from "react";

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
  "Docker",
  "Postman",
  "Vercel",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "GraphQL",
  "REST API",
  "WebSocket",
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
      </div>
    </section>
  );
};

export default Skill;
