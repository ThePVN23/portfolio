// src/pages/Category.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

// --- INTERNAL COMPONENT: PROJECT CARD ---
// Handles the display of a single project thumbnail (Image or Video)
const ProjectCard = ({ item }) => {
  const navigate = useNavigate();

  // 1. Determine Preview Asset
  // Priority: First Still Image -> First Video -> Placeholder text
  let previewSrc = null;
  let isVideo = false;

  if (item.stills && item.stills.length > 0) {
    previewSrc = item.stills[0];
  } else if (item.videoGallery && item.videoGallery.length > 0) {
    previewSrc = item.videoGallery[0].src;
    isVideo = true;
  }

  return (
    <div 
      onClick={() => navigate(`/project/${item.slug}`)} 
      className="group cursor-pointer flex flex-col gap-3"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-[3/2] bg-neutral-900 overflow-hidden">
        {previewSrc ? (
          isVideo ? (
            <video 
              src={previewSrc} 
              muted 
              loop 
              playsInline
              onMouseOver={e => e.target.play()} 
              onMouseOut={e => {
                e.target.pause();
                e.target.currentTime = 0;
              }}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
            />
          ) : (
            <img 
              src={previewSrc} 
              alt={item.title} 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
            />
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-700 font-mono text-xs uppercase tracking-widest border border-neutral-800">
            No Preview
          </div>
        )}
      </div>

      {/* Title & Info */}
      <div>
        <h3 className="text-white text-lg font-bold leading-none group-hover:text-red-500 transition-colors">
          {item.title}
        </h3>
        {item.description && (
          <p className="text-neutral-500 text-xs font-mono mt-2 line-clamp-1">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
};

// --- INTERNAL COMPONENT: GRID ---
const Grid = ({ items }) => {
  if (!items || items.length === 0) return <div className="text-neutral-800 font-mono text-sm uppercase">[Coming Soon]</div>;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {items.map((item, index) => (
        <ProjectCard key={index} item={item} />
      ))}
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const Category = () => {
  const { id } = useParams();
  
  // Find the specific category data (e.g., 'film' or 'photo')
  const categoryData = portfolioData.find(c => c.id === id);

  if (!categoryData) {
    return <div className="p-12 text-white font-mono">Category not found.</div>;
  }

  return (
    <div className="w-full animate-fade-in pb-32">
      {/* Page Header */}
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-20 uppercase">
        {categoryData.label}
      </h1>
      
      {/* Render Sections */}
      <div className="flex flex-col gap-24">
        {categoryData.structure.map((section, idx) => (
            <div key={idx}>
                
                {/* Section Header (e.g. Narrative) */}
                {section.header && (
                    <div className="flex items-center gap-4 mb-10">
                         <span className="text-red-500 font-mono text-sm uppercase tracking-widest">
                            [{section.header}]
                         </span>
                         <div className="h-px bg-neutral-900 flex-grow"></div>
                    </div>
                )}

                {/* LOGIC: Nested (Short Form) vs Standard (Photography) */}
                {section.type === 'nested' ? (
                    <div className="flex flex-col gap-16 pl-0 md:pl-0"> 
                        {section.subcategories.map((sub, sIdx) => (
                            <div key={sIdx}>
                                <h3 className="text-2xl text-white font-bold mb-8 flex items-center gap-3">
                                  <span className="w-2 h-2 bg-neutral-800 inline-block"></span>
                                  {sub.title}
                                </h3>
                                <Grid items={sub.items} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <Grid items={section.items} />
                )}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Category;