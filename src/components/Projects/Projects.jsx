import React, { useState } from 'react';
import { projects } from '../../constants';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section 
      id='work'
      className='relative py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto font-sans'
    >
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className='text-center mb-16 relative z-10'>
        <h2 className='text-3xl sm:text-5xl font-extrabold text-white tracking-tight'>
          PROJECTS
        </h2>
        <div className='w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full'></div>
        <p className='text-gray-400 mt-6 text-base sm:text-lg max-w-2xl mx-auto font-medium'>
          A hand-picked selection of full-stack applications, ML classifiers, and tools I have engineered.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(130,69,236,0.2)] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col"
          >
            {/* Card Image */}
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050414] via-[#050414]/20 to-transparent opacity-60" />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs px-2.5 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050414]/90 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden relative animate-scaleUp">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-all duration-200 z-10 cursor-pointer"
              aria-label="Close modal"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col">
              {/* Modal Banner Image */}
              <div className="w-full aspect-video overflow-hidden border-b border-white/10 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050414] via-transparent to-transparent" />
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs px-3 py-1 rounded-full font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/15 px-6 py-3 rounded-xl font-bold text-center transition-all duration-200"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white px-6 py-3 rounded-xl font-bold text-center shadow-lg shadow-purple-500/25 transition-all duration-200"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

