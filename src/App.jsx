import React from 'react'
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-900 via-purple-800 to-indigo-900">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
