import React from 'react'
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import About from './Components/About';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br 
                from-[#3b0a63] 
                via-[#5b1a8d] 
                to-[#140b2d]">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
