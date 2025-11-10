import React, { useState } from 'react'
import { certificate } from '../../constants';

export const Certificate = () => {
  const [selectedCertificate, setSelectdCertificate] = useState("");
  const handleOpenModal = (certificate) =>{
    setSelectdCertificate(certificate);
  };
  const handleCloseModal = (certificate) =>{
    setSelectdCertificate(null);
  }
  return (
   <section
   id='certificate'
   className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'>
       <div className='text-center mb-16'>
        <h2 className='text-4xl sm:text-4xl font-bold text-white'>CERTIFICATE</h2>
        <div className='w-36 h-1 bg-[#8245ec] mx-auto mt-4'></div>
        <p className='mt-4 text-gray-400 text-lg font-semibold'>A Showcase of the certificate I have earned on, highlighting my skiils in various technologies.</p>
      </div>
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificate.map((certificate) =>(
          <div 
          key={certificate.id}
          onClick={()=> handleOpenModal(certificate)}
          className='border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300'>
            <div className='p-4'>
              <img src={certificate.certificate_image} alt={certificate.certificate_title} 
              className='w-full h-48 object-cover rounded-xl'/>
            </div>
            <div className='p-6'>
              <h3 className='text-0.5xl font-bold text-white'>{certificate.certificate_title}</h3>
            </div>
            <p className='text-gray-500 mb-1 pt-1 line-clamp-3 text-center'>
              {certificate.issuing_authority} 
            </p>
            <div className="mb-4 text-center">
                {certificate.certificate_skills.map((certificate_skills, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {certificate_skills}
                  </span>
                ))}
              </div>
          </div>
        ))}
      </div>
      {
        selectedCertificate && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4'>
            <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>
            <div className='flex flex-col'>
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedCertificate.certificate_image}
                  alt={selectedCertificate.certificate_title}
                  className="lg:w-80% w-[88%] object-contain rounded-xl shadow-2xl"
                />
              </div>
               <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedCertificate.certificate_title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {"Issuing Authority: "+selectedCertificate.issuing_authority}<br></br> {"Month Issued: "+selectedCertificate.month_earned}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 text-gray-400 lg:text-base text-md"> Skills learned: 
                  {selectedCertificate.certificate_skills.map((certificate_skills, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {certificate_skills}
                    </span>
                  ))}
                </div>
                <div className='text-center'>
                  <a
                    href={selectedCertificate.course_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Course
                  </a>
                  <a
                    href={selectedCertificate.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2  m-4 p-4 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    Verify the Certificate
                  </a>
                </div>
                </div>
            </div>
          </div>
          </div>
        )}
   </section>
  )
}
