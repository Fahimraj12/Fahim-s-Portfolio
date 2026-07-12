import React from 'react';
import { education } from '../../constants';

export const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto font-sans"
    >
      {/* Background ambient light */}
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          EDUCATION
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto font-medium">
          My academic pathway, highlighting keys areas of study and foundations in computer science.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative z-10">
        {/* Vertical line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 opacity-30 transform -translate-x-1/2"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-stretch mb-16 relative ${
              index % 2 === 0 ? "" : "sm:flex-row-reverse"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#050414] border-4 border-purple-500 shadow-[0_0_15px_rgba(130,69,236,0.6)] z-20 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-pink-500"></div>
            </div>

            {/* Card Spacer */}
            <div className="hidden sm:block w-1/2"></div>

            {/* Content Section */}
            <div className="w-[calc(100%-2rem)] sm:w-1/2 ml-10 sm:ml-0 px-0 sm:px-8">
              <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(130,69,236,0.15)] transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-6">
                  {/* School Logo */}
                  <div className="w-14 h-14 bg-white rounded-xl overflow-hidden flex items-center justify-center p-1 border border-white/10">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  {/* Degree, School Name, and Date */}
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm font-semibold text-purple-300 mt-1">
                      {edu.school}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">{edu.date}</p>
                  </div>
                </div>

                <div className="mb-4 inline-block bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3 py-1 rounded-lg text-xs font-semibold">
                  Grade: {edu.grade}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

