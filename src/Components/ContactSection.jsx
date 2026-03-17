import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

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
            <div className="flex items-center gap-4 mb-8 
transition-all duration-300 hover:translate-x-3 cursor-pointer">
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-gray-400">Email</p>
              <h3 className="text-white text-semibold">hello@developer.com</h3>
            </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
