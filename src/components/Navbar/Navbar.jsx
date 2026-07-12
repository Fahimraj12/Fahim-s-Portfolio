import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for highlighting sections
  useEffect(() => {
    const sections = ["about", "skills", "experience", "work", "education", "certificate", "contact"];
    const observers = [];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Map "work" id to "Projects" label id
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // triggers when section is near center of viewport
      threshold: 0,
    };

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(element);
        observers.push({ observer, element });
      }
    });

    return () => {
      observers.forEach(({ observer, element }) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // offset for fixed navbar
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certificate", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050414]/70 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => handleMenuItemClick("about")}
          className="text-xl font-bold cursor-pointer tracking-wider hover:opacity-90 transition-opacity"
        >
          <span className="text-purple-500 font-extrabold">&lt;</span>
          <span className="text-white">Mo Fahim</span>
          <span className="text-purple-400 font-normal">/</span>
          <span className="text-white">Raj</span>
          <span className="text-purple-500 font-extrabold">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`relative py-1 cursor-pointer transition-colors duration-200 hover:text-white ${
                  activeSection === item.id ? "text-purple-400" : "text-gray-400"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/Fahimraj12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-all duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mo-fahim-raj-175b9b304/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={26} className="text-purple-400" /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-[64px] left-0 w-full bg-[#050414]/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 overflow-hidden md:hidden ${
          isOpen ? "max-h-[420px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-5 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <li key={item.id} className="w-full text-center">
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`w-full py-2 text-lg transition-colors ${
                  activeSection === item.id ? "text-purple-400" : "hover:text-white"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <div className="flex space-x-6 pt-4 border-t border-white/5 w-4/5 justify-center">
            <a
              href="https://github.com/Fahimraj12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mo-fahim-raj-175b9b304/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

