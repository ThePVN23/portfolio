// src/pages/About.jsx
import React from 'react';
import { signatureImg } from '../data/portfolioData'; // Importing from data file to keep paths clean

const About = () => {
  return (
    <div className="w-full max-w-4xl animate-fade-in pb-20 pt-10">
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-16 tracking-tighter">ABOUT</h1>
      
      <div className="text-xl md:text-3xl text-neutral-400 font-light space-y-10 leading-relaxed">
        <p>
          I am a filmmaker and creative technologist based in Georgia. My work focuses on the intersection of narrative storytelling and visual design.
        </p>
        <p>
          Currently documenting life in Athens and Atlanta through motion and still photography.
        </p>
      </div>

      {/* Signature & Contact Section */}
      <div className="mt-24 border-t border-neutral-900 pt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        {/* Contact Info */}
        <div>
           <h3 className="text-sm font-mono text-red-500 uppercase tracking-widest mb-4">Contact</h3>
           <a 
             href="mailto:hello@pavan.com" 
             className="text-2xl md:text-4xl font-bold text-white hover:text-neutral-400 transition-colors"
           >
             hello@pavan.com
           </a>
        </div>

        {/* Signature Image */}
        <div className="w-48 opacity-80 invert">
            <img src={signatureImg} alt="Signature" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;