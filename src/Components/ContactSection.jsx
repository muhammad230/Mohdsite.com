import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-[#03000a] py-20 px-6 text-white">
      <div className="text-center mb-16">
        <p className="text-purple-400 text-xl  mb-4">Get In Touch</p>
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

      <div className="max-w-6xl mx-auto grid ms:grid-col-2 gap-12">
        {/* left */}
        <div>
          {/* email */}
          <div
            className="flex items-center gap-4 mb-8 
transition-all duration-300 hover:translate-x-3 cursor-pointer"
          >
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-gray-400">Email</p>
              <h3 className="text-white text-semibold">
                ali.khansmr3@gmail.com
              </h3>
            </div>
          </div>
          {/* phone */}
          <div className="flex items-center gap-4 mb-8 transition-all duration-300 hover:translate-x-3 cursor-pointer">
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
              <FaPhone />
            </div>
            <div>
              <p className="text-gray-400">Phone</p>
              <h3 className="font-semibold">+92 1618 64554</h3>
            </div>
          </div>
          {/* location */}
          <div className="flex items-center gap-4 mb-8 transition-all duration-300 hover:translate-x-3 cursor-pointer">
            <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-gray-400">Location</p>
              <h3 className="font-semibold">Gilgit, Pakistan</h3>
            </div>
          </div>
          <h3 className="mt-10 mb-4 font-semibold">Connect With Me</h3>
          <div className="flex gap-4">
            <span className="p-3 rounded-full border border-gray-700 hover:bg-purple-500 transition cursor-pointer hover-rubber">
              <FaGithub />
            </span>
            <span className="p-3 rounded-full border border-gray-700 hover:bg-purple-500 transition cursor-pointer hover-rubber">
              <FaLinkedin />
            </span>
            <span className="p-3 rounded-full border border-gray-700 hover:bg-purple-500 transition cursor-pointer hover-rubber">
              <FaTwitter />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
