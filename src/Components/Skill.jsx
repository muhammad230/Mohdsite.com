import React from "react";

const skillsleft = [
  { name: "React / Next.js", percent: 95, color: "bg-cyan-400" },
  { name: "Node.js / Express", percent: 88, color: "bg-green-400" },
  { name: "UI/UX Design", percent: 85, color: "bg-pink-500" },
  { name: "Three.js / GSAP", percent: 78, color: "bg-indigo-400" },
];

const skillsright = [
  { name: "JavaScript", percent: 98, color: "bg-blue-400" },
  { name: "HTML / CSS", percent: 95, color: "bg-purple-400" },
  { name: "MongoDB / SQL", percent: 80, color: "bg-orange-400" },
  { name: "Git / GitHub", percent: 90, color: "bg-yellow-400" },
];

const SkillBar = ({ name, percent, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-gray-400">{percent}%</span>
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

    </section>
  );
};

export default Skill;