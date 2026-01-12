// src/pages/Project.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, X, Play } from 'lucide-react'; // Ensure you have lucide-react installed
import { portfolioData } from '../data/portfolioData';

const Project = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState(null);
  const [project, setProject] = useState(null);

  // --- 1. FIND PROJECT LOGIC ---
  // We need to search through the nested data structure to find the matching slug
  useEffect(() => {
    let found = null;
    
    // Loop through Categories (Film, Photo, etc.)
    for (const category of portfolioData) {
      if (found) break;

      // Loop through Sections (Narrative, Short Form, etc.)
      for (const section of category.structure) {
        if (found) break;

        // Check Standard Items
        if (section.items) {
          const match = section.items.find(item => item.slug === slug);
          if (match) found = match;
        }

        // Check Nested Subcategories (Microfilms, Cinematics)
        if (section.subcategories) {
          for (const sub of section.subcategories) {
            const match = sub.items.find(item => item.slug === slug);
            if (match) found = match;
          }
        }
      }
    }
    setProject(found);
  }, [slug]);

  if (!project) return <div className="p-12 text-white">Loading...</div>;

  return (
    <div className="w-full animate-fade-in pb-32 relative">
      
      {/* --- LIGHTBOX VIDEO OVERLAY --- */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm">
          <button 
            onClick={() => setActiveVideo(null)} 
            className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors"
          >
            <X size={40}/>
          </button>
          <div className="w-full max-w-6xl aspect-video bg-black shadow-2xl border border-neutral-800">
            <video 
              src={activeVideo} 
              controls 
              autoPlay 
              className="w-full h-full" 
            />
          </div>
        </div>
      )}

      {/* --- BACK BUTTON --- */}
      <button 
        onClick={() => navigate(-1)} 
        className="group flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-12 font-mono text-xs uppercase tracking-widest"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
        Back
      </button>

      {/* --- HEADER INFO --- */}
      <div className="max-w-4xl mb-20">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {project.title}
        </h1>
        {project.description && (
          <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
            {project.description}
          </p>
        )}
      </div>

      {/* --- VIDEO GALLERY SECTION --- */}
      {project.videoGallery && project.videoGallery.length > 0 && (
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-red-500 font-mono text-sm uppercase tracking-widest">[Motion Assets]</span>
            <div className="h-px bg-neutral-900 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.videoGallery.map((vid, i) => (
              <div 
                key={i} 
                onClick={() => setActiveVideo(vid.src)} 
                className="group relative aspect-video bg-neutral-900 cursor-pointer overflow-hidden border border-neutral-900 hover:border-neutral-700 transition-colors"
              >
                {/* Background Preview (Muted loop) */}
                <video 
                  src={vid.src} 
                  muted 
                  loop 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500"
                  onMouseOver={e => e.target.play()}
                  onMouseOut={e => {
                      e.target.pause();
                      e.target.currentTime = 0;
                  }}
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300 shadow-xl">
                    <Play size={24} fill="white" className="text-white ml-1" />
                  </div>
                </div>
                
                {/* Title Label */}
                {vid.title && (
                   <div className="absolute bottom-4 left-4 pointer-events-none">
                       <span className="bg-black/80 text-white text-xs font-mono px-2 py-1 uppercase">
                           {vid.title}
                       </span>
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- STILLS GALLERY SECTION --- */}
      {project.stills && project.stills.length > 0 && (
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-neutral-500 font-mono text-sm uppercase tracking-widest">[Stills]</span>
            <div className="h-px bg-neutral-900 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.stills.map((img, i) => (
              <div key={i} className="group overflow-hidden">
                <img 
                  src={img} 
                  alt={`${project.title} Still ${i+1}`} 
                  loading="lazy"
                  className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-out" 
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;