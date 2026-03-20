import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* left column */}
        <div>
          <h2 className="text-2xl font-bold text-purple-400 mb-4">
            Developer Portfolio
          </h2>
          <p className="text-gray-400">
            Crafting digital experiences with passion and precision.
            <br /> Let's build something amazing together.
          </p>
        </div>

        {/* center column */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-purple-400 cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-400 cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-purple-400 cursor-pointer">
               Work
              </a>
            </li>
            <li>
              <a href="#skill" className="hover:text-purple-400 cursor-pointer">
                Skill
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-400 cursor-pointer">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
