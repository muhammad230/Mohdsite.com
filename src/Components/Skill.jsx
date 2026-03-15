import React from 'react'

const Skill = () => {
  return (
   <section id="skill" className=" bg-[#03000a] py-20 px-6 text-white">
     <div className='text-center mb-16'>
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
    </section>
  )
}

export default Skill
