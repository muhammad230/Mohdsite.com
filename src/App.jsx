import React from 'react'
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import About from './Components/About';
import Work from './Components/Work';
import Skill from './Components/Skill';
import ContactSection from './Components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br 
                from-[#3b0a63] 
                via-[#5b1a8d] 
                to-[#140b2d]">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skill />
      <ContactSection/>
    </div>
  );
}

export default App;
