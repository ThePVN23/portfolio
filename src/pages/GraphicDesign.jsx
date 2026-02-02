import React, { useState, useEffect, useCallback } from 'react';
import { graphicDesignItems } from '../data';

const GraphicDesign = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // --- Handlers ---
  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % graphicDesignItems.length);
  }, []);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + graphicDesignItems.length) % graphicDesignItems.length);
  }, []);

  // --- Keyboard Navigation ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  return (
    <>
      {/* --- PAGE CONTENT (Animated) --- */}
      {/* We keep the animation here only for the grid, so it doesn't mess up the lightbox */}
      <div className="min-h-screen bg-black text-white pt-32 pb-20 px-4 md:px-12 animate-fade-in">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {graphicDesignItems.map((item, index) => (
            <div 
              key={item.id} 
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden border border-neutral-800 hover:border-white/50 transition-colors duration-300"
            >
              {/* Aspect Ratio 2/3 (Vertical for Flyers) */}
              <div className="aspect-[2/3] w-full bg-neutral-900">
                <img
                  src={item.src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- LIGHTBOX (Outside the animation div) --- */}
      {/* This ensures position:fixed actually works relative to the screen */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center backdrop-blur-sm"
          onClick={closeLightbox}
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }} // Inline styles to force browser compliance
        >
          
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-8 text-neutral-400 hover:text-white transition-colors p-2 z-50"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>

          {/* Left Arrow */}
          <button 
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            className="absolute left-4 md:left-8 text-neutral-500 hover:text-white transition-colors p-4 z-50 hidden md:block"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7"/></svg>
          </button>

          {/* Main Image */}
          <img
            src={graphicDesignItems[selectedIndex].src}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl select-none"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Right Arrow */}
          <button 
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-4 md:right-8 text-neutral-500 hover:text-white transition-colors p-4 z-50 hidden md:block"
          >
             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
          </button>

          {/* Mobile Tap Zones */}
          <div className="absolute inset-0 flex md:hidden z-40 pointer-events-none">
            <div className="w-1/2 h-full pointer-events-auto" onClick={(e) => { e.stopPropagation(); showPrev(); }}></div>
            <div className="w-1/2 h-full pointer-events-auto" onClick={(e) => { e.stopPropagation(); showNext(); }}></div>
          </div>

        </div>
      )}
    </>
  );
};

export default GraphicDesign;