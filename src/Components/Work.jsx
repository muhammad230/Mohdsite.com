import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    category: "Full Stack",
    title: "Sneaker E-Commerce",
    desc: "Modern sneaker shopping website with stylish UI and smooth product browsing experience.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    img: "/images/jj.jpg",
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    category: "Frontend",
    title: "Dice Game",
    desc: "A fun dice game built with JavaScript where players roll dice to determine the winner.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "/images/dices.png",
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    category: "React.js",
    title: "Hotel Booking App",
    desc: "A modern hotel booking application built with React.js and integrated with a REST API for seamless user experience.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    img: "/images/d.jpeg",
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    category: "JavaScript",
    title: "portfolio",
    desc: "A responsive portfolio website built with JavaScript and modern CSS techniques.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: "/images/fd.jpg",
    github: "https://github.com/",
    demo: "https://example.com",
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
            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition duration-500"
          >

            {/* Image Container */}
            <div className="relative overflow-hidden">

              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover transition duration-500 group-hover:scale-110 group-hover:blur-sm"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-500">

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/40 hover:bg-white/20 transition"
                >
                  <FaGithub size={18} />
                </a>

                {/* Live Demo */}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-white/40 hover:bg-white/20 transition"
                >
                  <FiExternalLink size={18} />
                </a>

              </div>

            </div>

            {/* Card Content */}
            <div className="p-6">

              {/* Category */}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-xs px-3 py-1 rounded-full">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-2">
                {project.desc}
              </p>

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