import React from 'react';
import { SkillsInfo } from '../../constants';
import Tilt from 'react-parallax-tilt';

export const Skills = () => {
  return (
    <section 
      id='skills'
      className='relative py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto font-sans'
    >
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className='text-center mb-16 relative z-10'>
        <h2 className='text-3xl sm:text-5xl font-extrabold text-white tracking-tight'>
          SKILLS
        </h2>
        <div className='w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full'></div>
        <p className='text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto font-medium'>
          A comprehensive suite of technologies and frameworks I have mastered and applied across different domains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(130,69,236,0.15)] transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-6 border-b border-white/5 pb-3">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center space-x-2.5 bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 rounded-xl p-2.5 transition-all duration-200 group cursor-default"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

