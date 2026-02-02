import React from 'react';
import { signatureImg } from '../data';

const SplashPage = ({ onEnter }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500">
      
      {/* 1. The Logo */}
      <img 
        src={signatureImg} 
        alt="Signature" 
        className="w-48 md:w-64 mb-8 opacity-100" 
      />

      {/* 2. The Enter Button (Styled to be visible) */}
      <button 
        onClick={onEnter}
        className="mt-4 px-8 py-2 border border-black text-black text-sm uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
      >
        Enter
      </button>

    </div>
  );
};

export default SplashPage;