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
        
        <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Get notified about new projects and articles.</p>

            <div className="flex gap-4 ">
              <input 
              type="email" 
              placeholder="Your email"
              className="flex-1 p-2 rounded-lg bg-[#0c0c0c] border border-gray-700 focus:outline-none"
              />
               <button className="px-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:scale-105 transition">
              Subscribe
            </button>
              </div>
        </div>
      </div>
      {/* bottom line */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        
         <p>© 2026 Made with ❤️ by Muhammad Ali</p>

         <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-purple-400 cursor-pointer">
              Privacy Policy
               </span>
               <span className="hover:text-white cursor-pointer">
            Terms of Service
          </span>
         </div>

      </div>
    </footer>
  );
};

export default Footer;
