import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data'; 

const ProjectCard = ({ item }) => {
  const navigate = useNavigate();
  let previewSrc = null;
  let isVideo = false;

  // 1. Thumbnail (preferred)
  if (item.thumbnail) {
    previewSrc = item.thumbnail;
  } 
  // 2. First Still
  else if (item.stills?.length > 0) {
    previewSrc = item.stills[0];
  } 
  // 3. Direct Video Source
  else if (item.videoSrc) {
    previewSrc = item.videoSrc;
    isVideo = true;
  }

  return (
    <div onClick={() => navigate(`/project/${item.slug}`)} className="group cursor-pointer flex flex-col gap-3">
      <div className="relative aspect-[16/9] bg-neutral-900 overflow-hidden border border-neutral-800 group-hover:border-neutral-500 transition-colors">
        {previewSrc && (isVideo ? 
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
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
          /> :
          <img 
            src={previewSrc} 
            alt={item.title} 
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" 
          />
        )}
      </div>
      <div className="flex justify-between items-end">
        <h3 className="text-sm font-medium text-white uppercase tracking-widest group-hover:text-blue-400 transition-colors">
            {item.title}
        </h3>
        {item.year && <span className="text-xs text-neutral-500 font-mono">{item.year}</span>}
      </div>
    </div>
  );
};

const Category = () => {
  const { category, subcategory, nested } = useParams();

  const activeData = useMemo(() => {
    if (!portfolioData) return null;

    // 1. Find Top Category (e.g. "film")
    const topCat = portfolioData.find(c => c.category === category);
    if (!topCat) return null;

    // 2. Get all sections
    let sections = topCat.structure;

    // 3. Filter by subcategory path (e.g. "narrative" or "shortform")
    if (subcategory) {
      sections = sections.filter(s => s.path === subcategory);
    }

    if (!sections || sections.length === 0) return null;

    return { title: topCat.category, sections };
  }, [category, subcategory]);

  if (!activeData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
            <p className="text-neutral-500">The requested category "{subcategory || category}" does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-10 pb-20 px-4 md:px-12 animate-fade-in">
      
      {/* Category Title */}
      <h1 className="text-5xl md:text-7xl font-bold mb-16 tracking-tighter text-white uppercase">
        {subcategory ? subcategory : activeData.title}
      </h1>

      <div className="flex flex-col gap-24">
        {activeData.sections.map((section, idx) => (
          <div key={idx} className="w-full">
            
            {/* Show Header if we are NOT already drilled down */}
            {section.header && !subcategory && (
                <div className="flex items-center gap-4 mb-10">
                     <span className="text-neutral-500 font-mono text-sm uppercase tracking-widest">[{section.header}]</span>
                     <div className="h-px bg-neutral-900 flex-grow"></div>
                </div>
            )}

            {section.type === 'nested' ? (
                <div className="flex flex-col gap-16"> 
                    {section.subcategories
                      // Filter for nested path (e.g. "microfilms") if specified in URL
                      .filter(sub => !nested || sub.path === nested)
                      .map((sub, sIdx) => (
                        <div key={sIdx}>
                            <h3 className="text-xl text-neutral-300 font-light uppercase tracking-widest mb-8 pl-4 border-l border-neutral-700">
                                {sub.title}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                              {sub.items.map((item, i) => <ProjectCard key={i} item={item} />)}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                  {section.items.map((item, i) => <ProjectCard key={i} item={item} />)}
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;