import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaKaggle } from "react-icons/fa";

export const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // offset for fixed navbar
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#050414]/90 py-12 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name / Logo */}
        <div>
          <h2 className="text-xl font-bold text-white tracking-wider">
            Mo Fahim <span className="text-purple-400">Raj</span>
          </h2>
          <p className="text-xs text-gray-500 mt-1">Surat, Gujarat, India</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Certificate", id: "certificate" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-3">
          {[
            { icon: <FaKaggle />, link: "https://www.kaggle.com/mofahimraj", label: "Kaggle" },
            { icon: <FaTwitter />, link: "https://twitter.com/itsfahim_raj", label: "Twitter" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mo-fahim-raj-175b9b304/", label: "LinkedIn" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/itsfahim_raj?igsh=MWJxNzVubDk4NHQ1NA==", label: "Instagram" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 text-gray-400 hover:text-purple-400 flex items-center justify-center text-lg transition-all duration-200"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© 2026 Mo Fahim Raj. All rights reserved.</p>
        <p>Built with React & Tailwind CSS v4</p>
      </div>
    </footer>
  );
};

