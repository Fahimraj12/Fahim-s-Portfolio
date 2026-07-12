import React from 'react';
import { experiences } from '../../constants';

export const Experience = () => {
  return (
    <section
      id='experience'
      className='relative py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto font-sans'
    >
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className='text-center mb-20 relative z-10'>
        <h2 className='text-3xl sm:text-5xl font-extrabold text-white tracking-tight'>
          EXPERIENCE
        </h2>
        <div className='w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full'></div>
        <p className='text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto font-medium'>
          My professional milestones and industry contributions as a software engineer.
        </p>
      </div>

      <div className='relative z-10'>
        {/* Timeline Center Line */}
        <div className='absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 opacity-30 transform -translate-x-1/2'></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-stretch mb-16 relative ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot/Circle */}
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#050414] border-4 border-purple-500 shadow-[0_0_15px_rgba(130,69,236,0.6)] z-20 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-pink-500"></div>
            </div>

            {/* Card Spacer (For aligning grid correctly on large screens) */}
            <div className="hidden sm:block w-1/2"></div>

            {/* Content Card */}
            <div className="w-[calc(100%-2rem)] sm:w-1/2 ml-10 sm:ml-0 px-0 sm:px-8">
              <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(130,69,236,0.15)] transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
                  {/* Company Logo */}
                  <div className="w-14 h-14 bg-white/10 rounded-xl overflow-hidden flex items-center justify-center p-1 border border-white/10">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  {/* Role and Company details */}
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-purple-300 mt-1">
                      {experience.company}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">{experience.date}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {experience.desc}
                </p>

                <div>
                  <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3 py-1 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))} 
      </div>
    </section>
  );
};

