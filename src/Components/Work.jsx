import React from "react";

const projects = [
  {
    category: "Full Stack",
    title: "NexGen E-Commerce",
    desc: "AI-powered shopping platform with real-time inventory and personalized recommendations",
    tech: ["React", "Node.js", "AI", "Stripe"],
    img: "/images/jj.jpg",
  },
  {
    category: "Frontend",
    title: "Creative Studio",
    desc: "Interactive portfolio platform for digital artists with 3D galleries",
    tech: ["Next.js", "Three.js", "GSAP"],
    img: "/images/dices.png",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-20 px-6 text-white">
      {/* Section Title */}
      <div className="text-center mb-16">
        <p className="text-purple-400 text-sm tracking-widest mb-4">
          PORTFOLIO
        </p>

        <h2 className="text-5xl font-bold mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Work
          </span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Explore my latest projects showcasing innovation and creativity
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              {/* Category */}
              <span className="bg-purple-500 text-xs px-3 py-1 rounded-full">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-400 mt-2">{project.desc}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/10 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
