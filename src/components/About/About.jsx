import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/untitled design.png";

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-16 md:mt-24"
    >
      {/* Visual background glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Intro Text */}
      <div className="flex-1 text-center md:text-left z-10">
        <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">
          Welcome to my portfolio
        </span>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mt-6 mb-2 leading-tight">
          Hi, I am
        </h1>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mb-6 leading-none">
          Mo Fahim Raj
        </h2>

        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-2 text-gray-300">
          <span>I am a</span>
          <ReactTypingEffect
            text={[
              "Software Engineer",
              "Fullstack Developer",
              "UI/UX Designer",
              "AI/ML Enthusiast",
              "Android Developer",
              "Python Developer",
            ]}
            speed={80}
            eraseSpeed={40}
            typingDelay={300}
            eraseDelay={1500}
            cursorRenderer={(cursor) => (
              <span className="text-purple-400 font-bold">{cursor}</span>
            )}
            displayTextRenderer={(text) => (
              <span className="text-purple-400">{text}</span>
            )}
          />
        </div>

        <p className="text-base sm:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
          I’m a passionate Bachelor of Sciences - Information Technology (IT) student with hands-on experience in full-stack development, Python, and C/C++. I enjoy building real-world applications, exploring modern AI/ML, and designing beautiful interfaces.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="https://drive.google.com/file/d/12y5VB7KQLmHr1lFEn6hJgen_ThPmPGaY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 shadow-[0_4px_20px_rgba(130,69,236,0.3)] hover:shadow-[0_4px_25px_rgba(130,69,236,0.5)] transform hover:-translate-y-0.5 transition-all duration-200"
          >
            DOWNLOAD CV
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl font-bold text-gray-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            HIRE ME
          </a>
        </div>
      </div>

      {/* Profile Image container with Tilt */}
      <div className="flex-1 flex justify-center z-10">
        <Tilt
          className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full p-2 bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 shadow-2xl"
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.02}
          transitionSpeed={800}
        >
          <div className="w-full h-full rounded-full bg-[#050414] overflow-hidden p-1">
            <img
              src={profileImage}
              alt="Mo Fahim Raj"
              className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </Tilt>
      </div>
    </section>
  );
};

