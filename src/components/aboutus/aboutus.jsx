import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutUs = () => (
  <div className="bg-gray-900 font-bunken text-white px-8 py-12 rounded-lg shadow-lg max-w-xl mx-auto mt-10 flex flex-col items-center">
    <h2 className="text-3xl font-bold mb-4">About Us</h2>
    <p className="text-lg text-gray-300 mb-8 text-center">
      I am a passionate developer building open source solutions, sharing
      knowledge, and connecting with the tech community.
    </p>
    <div className="flex gap-6">
      <a
        href="https://github.com/ppomega"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-gray-400 transition"
        aria-label="GitHub"
      >
        <FaGithub size={28} />
      </a>
      <a
        href="https://in.linkedin.com/in/prateek-veerbhan-837255188"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-blue-400 transition"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={28} />
      </a>
    </div>
  </div>
);

export default AboutUs;
