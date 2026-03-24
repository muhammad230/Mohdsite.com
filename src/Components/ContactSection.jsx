import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#03000a] py-20 px-6 text-white">
      <div className="text-center mb-16">
        <p className="text-purple-400 text-xl mb-4">Get In Touch</p>

        <h2 className="text-6xl font-bold mb-4">
          Let's Create{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Together
          </span>
        </h2>

        <p className="text-gray-400 text-lg">
          Have a project in mind? Let's discuss how we can bring your vision to
          life
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE */}
        <div>
          
          {/* Email */}
          <a
            href="mailto:ali.khansmr3@gmail.com"
            className="flex items-center gap-4 mb-8 
            transition-all duration-300 hover:translate-x-3"
          >
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-gray-400">Email</p>
              <h3 className="text-white font-semibold">
                ali.khansmr3@gmail.com
              </h3>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+92161864554"
            className="flex items-center gap-4 mb-8 transition-all duration-300 hover:translate-x-3"
          >
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
              <FaPhone />
            </div>
            <div>
              <p className="text-gray-400">Phone</p>
              <h3 className="font-semibold">+92 1618 64554</h3>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 mb-8 transition-all duration-300 hover:translate-x-3">
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-gray-400">Location</p>
              <h3 className="font-semibold">Gilgit, Pakistan</h3>
            </div>
          </div>

          {/* Social */}
          <h3 className="mt-10 mb-4 font-semibold">Connect With Me</h3>

          <div className="flex gap-4">
            
            {/* GitHub */}
            <a
              href="https://github.com/muhammad230"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-3 rounded-full border border-gray-700 
              hover:bg-purple-500 transition 
              hover:scale-110 hover:-translate-y-1 duration-300"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/muhammad-ali-2a6651323/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-3 rounded-full border border-gray-700 
              hover:bg-purple-500 transition 
              hover:scale-110 hover:-translate-y-1 duration-300"
            >
              <FaLinkedin />
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/Muhamma37779268"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              className="p-3 rounded-full border border-gray-700 
              hover:bg-purple-500 transition 
              hover:scale-110 hover:-translate-y-1 duration-300"
            >
              <FaTwitter />
            </a>
          </div>

          {/* Quote */}
          <p className="text-gray-400 mt-8 italic bg-[#03000a] p-6 rounded-xl border border-gray-700">
            "Great things in business are never done by one person. They're done by a team of people." <br />
            <span className="text-purple-400">- Steve Jobs</span>
          </p>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="p-8 rounded-xl">
          
          <div className="mb-6">
            <label className="block mb-2 text-sm">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-xl bg-[#03000a] border border-gray-700 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl bg-[#03000a] border border-gray-700 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="mb-6 mt-4">
            <label className="block mb-2 text-sm">Your Message</label>
            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full p-3 rounded-lg bg-[#03000a] border border-gray-700 focus:outline-none focus:border-purple-500"
            ></textarea>
          </div>

          <button className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition duration-300">
            Send Message ✈️
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;