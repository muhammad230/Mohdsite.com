import React from 'react'

const About = () => {
  return (
   <section id='about' className="bg-[#140b2d] text-white py-24 px-6">
     <div className="max-w-6xl mx-auto">
      <p className='text-center text-purple-400 tracking-widest mb-4'>
        ABOUT ME
      </p>
      <h2 className="text-center text-5xl md:text-6xl font-bold mb-16">
          Passion Meets{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Precision
          </span>
        </h2>
     </div>
   </section>   
  )
}

export default About
