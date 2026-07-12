import './App.css';
import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Education } from './components/Education/Education';
import { Certificate } from './components/Certificate/Certificate';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import BlurBlob from './BlurBlob';

function App() {
  return (
    <div className="bg-[#050414] text-white relative min-h-screen overflow-x-hidden selection:bg-purple-500/30">
      {/* Dynamic Background Glowing Blobs */}
      <BlurBlob 
        position={{ top: '20%', left: '15%' }} 
        size={{ width: '35vw', height: '35vw' }} 
        color="bg-purple-600" 
        animation="animate-blob-slow" 
      />
      <BlurBlob 
        position={{ top: '55%', left: '85%' }} 
        size={{ width: '40vw', height: '40vw' }} 
        color="bg-indigo-600" 
        animation="animate-blob-medium" 
      />
      <BlurBlob 
        position={{ top: '85%', left: '20%' }} 
        size={{ width: '30vw', height: '30vw' }} 
        color="bg-pink-600" 
        animation="animate-blob-slow" 
      />

      {/* Decorative Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className='relative z-10 pt-20'>
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certificate />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
