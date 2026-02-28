import { Home, User, Briefcase, Code, Mail } from "lucide-react";

function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      
      <nav className="flex items-center gap-8 px-8 py-3 
                      bg-white/10 backdrop-blur-md 
                      border border-white/20 
                      rounded-full shadow-lg text-white">

        <a href="#" className="flex items-center gap-2 hover:text-pink-400 transition">
          <Home size={18} />
          Home
        </a>

        <a href="#" className="flex items-center gap-2 hover:text-pink-400 transition">
          <User size={18} />
          About
        </a>

        <a href="#" className="flex items-center gap-2 hover:text-pink-400 transition">
          <Briefcase size={18} />
          Work
        </a>

        <a href="#" className="flex items-center gap-2 hover:text-pink-400 transition">
          <Code size={18} />
          Skills
        </a>

        <a href="#" className="flex items-center gap-2 hover:text-pink-400 transition">
          <Mail size={18} />
          Contact
        </a>

      </nav>
    </div>
  );
}

export default Navbar;