// src/pages/Project.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react'; 
import { portfolioData } from '../data';

const Project = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (!portfolioData) return;
    
    let found = null;
    for (const category of portfolioData) {
      if (found) break;
      for (const section of category.structure) {
        if (found) break;
        if (section.items) {
          const match = section.items.find(item => item.slug === slug);
          if (match) found = match;
        }
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

  // Keyboard Handlers
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null || !project?.stills) return;
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % project.stills.length);
      else if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + project.stills.length) % project.stills.length);
      else if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, project]);

  if (!project) return <div className="p-10 text-white font-sans font-bold">Project not found.</div>;

  return (
    <div className="w-full min-h-screen bg-black text-white p-4 md:p-10 pb-40 animate-fade-in relative">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-8 flex items-center gap-2 text-neutral-500 hover:text-white transition-colors font-bold uppercase text-sm tracking-wide"
      >
        <ArrowLeft size={20} strokeWidth={3} /> Back
      </button>

      {/* HEADER */}
      <div className="mb-16">
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6">{project.title}</h1>
        <div className="flex flex-wrap gap-6 text-lg font-medium text-neutral-400">
            {project.year && <span>{project.year}</span>}
            {project.description && <span className="text-white">{project.description}</span>}
        </div>
      </div>

      {/* --- MEDIA PLAYER SECTION --- */}
      
      {/* 1. If it's a Youtube/Vimeo Embed (iframe) */}
      {project.embedSrc && (
        <div className="w-full aspect-video bg-neutral-900 mb-20">
          <iframe 
            src={project.embedSrc} 
            title={project.title}
            className="w-full h-full"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* 2. If it's a Direct Local File (.mp4) */}
      {project.videoSrc && (
        <div className="w-full aspect-video bg-neutral-900 mb-20 border border-neutral-800">
           <video 
             controls 
             autoPlay 
             loop 
             playsInline
             className="w-full h-full object-contain"
             poster={project.thumbnail} // Optional thumbnail
           >
             <source src={project.videoSrc} type="video/mp4" />
             Your browser does not support the video tag.
           </video>
        </div>
      )}

      {/* INFO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24 border-t-2 border-white pt-12">
        
        {/* LINKS */}
        {(project.imdb || project.youtube) && (
            <div className="space-y-6">
                <h3 className="text-3xl font-extrabold text-white">Links</h3>
                <div className="flex flex-col gap-3">
                    {project.imdb && (
                        <a href={project.imdb} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-neutral-400 hover:text-white transition-colors underline decoration-2 underline-offset-4">
                            IMDB
                        </a>
                    )}
                    {project.youtube && (
                        <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-neutral-400 hover:text-white transition-colors underline decoration-2 underline-offset-4">
                            YouTube
                        </a>
                    )}
                </div>
            </div>
        )}

        {/* CREDITS */}
        {project.credits && (
            <div className="md:col-span-2">
                <h3 className="text-3xl font-extrabold text-white mb-8">Credits</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8">
                    {project.credits.map((credit, i) => (
                        <div key={i} className="flex flex-col border-l-2 border-neutral-800 pl-4">
                            <span className="text-neutral-500 text-sm font-bold uppercase tracking-wider mb-1">{credit.role}</span>
                            <span className="text-white text-lg font-bold">{credit.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        )}
      </div>

      {/* STILLS */}
      {project.stills && project.stills.length > 0 && (
        <div>
          <div className="flex items-end justify-between mb-10 border-b-2 border-white pb-4">
            <h3 className="text-4xl font-extrabold text-white">Stills</h3>
            <span className="text-neutral-500 font-bold">{project.stills.length} Images</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.stills.map((img, i) => (
              <div key={i} onClick={() => setLightboxIndex(i)} className="cursor-zoom-in overflow-hidden group relative">
                 <img 
                    src={img} 
                    alt="still" 
                    className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
                 />
                 <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* LIGHTBOX */}
      {lightboxIndex !== null && project.stills && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setLightboxIndex(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-neutral-300 transition-colors">
            <X size={40} strokeWidth={3} />
          </button>
          
          <button className="absolute left-4 md:left-8 text-white hover:text-neutral-300 hidden md:block" onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev - 1 + project.stills.length) % project.stills.length); }}>
            <ChevronLeft size={60} strokeWidth={2} />
          </button>
          
          <img src={project.stills[lightboxIndex]} alt="Full size" className="max-w-full max-h-[90vh] object-contain select-none shadow-2xl" onClick={(e) => e.stopPropagation()} />
          
          <button className="absolute right-4 md:right-8 text-white hover:text-neutral-300 hidden md:block" onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev + 1) % project.stills.length); }}>
            <ChevronRight size={60} strokeWidth={2} />
          </button>
          
          <div className="absolute bottom-8 text-white font-bold text-lg tracking-widest">
            {lightboxIndex + 1} / {project.stills.length}
          </div>
        </div>
      )}
    </div>
  );
};



export default Project;
