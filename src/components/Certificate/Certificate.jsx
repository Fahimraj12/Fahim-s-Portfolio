import React, { useState } from 'react';
import { certificate } from '../../constants';

export const Certificate = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  
  const handleOpenModal = (cert) => {
    setSelectedCertificate(cert);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section
      id='certificate'
      className='relative py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto font-sans'
    >
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className='text-center mb-16 relative z-10'>
        <h2 className='text-3xl sm:text-5xl font-extrabold text-white tracking-tight'>
          CERTIFICATES
        </h2>
        <div className='w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full'></div>
        <p className='mt-6 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-medium'>
          A showcase of credentials, specialized training, and certifications completed.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {certificate.map((cert, index) => (
          <div 
            key={index}
            onClick={() => handleOpenModal(cert)}
            className='group cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(130,69,236,0.2)] transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col'
          >
            {/* Card Image */}
            <div className='relative overflow-hidden aspect-video border-b border-white/5'>
              <img 
                src={cert.certificate_image} 
                alt={cert.certificate_title} 
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050414] via-transparent to-transparent opacity-60" />
            </div>

            {/* Card Content */}
            <div className='p-6 flex flex-col flex-1'>
              <h3 className='text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-200 line-clamp-2'>
                {cert.certificate_title}
              </h3>
              <p className='text-purple-400 text-xs font-semibold mb-4'>
                {cert.issuing_authority}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {cert.certificate_skills.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[10px] px-2 py-0.5 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
                {cert.certificate_skills.length > 3 && (
                  <span className="text-[10px] text-gray-500 font-medium self-center ml-1">
                    +{cert.certificate_skills.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedCertificate && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-[#050414]/90 backdrop-blur-md p-4 animate-fadeIn'>
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative animate-scaleUp">
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

            <div className='flex flex-col'>
              {/* Modal Image */}
              <div className="w-full aspect-video overflow-hidden border-b border-white/10 relative">
                <img
                  src={selectedCertificate.certificate_image}
                  alt={selectedCertificate.certificate_title}
                  className="w-full h-full object-contain bg-[#050414]/50"
                />
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
                  {selectedCertificate.certificate_title}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs sm:text-sm text-gray-400 mb-6 font-medium">
                  <span>Authority: <strong className="text-purple-300 font-semibold">{selectedCertificate.issuing_authority}</strong></span>
                  <span className="hidden sm:inline text-white/20">•</span>
                  <span>Date: <strong className="text-gray-300 font-semibold">{selectedCertificate.month_earned}</strong></span>
                </div>

                {/* Skills Section */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertificate.certificate_skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className='flex gap-4'>
                  <a
                    href={selectedCertificate.course_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/15 px-6 py-3 rounded-xl font-bold text-center transition-all duration-200"
                  >
                    View Course
                  </a>
                  <a
                    href={selectedCertificate.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white px-6 py-3 rounded-xl font-bold text-center shadow-lg shadow-purple-500/25 transition-all duration-200"
                  >
                    Verify Badge
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

