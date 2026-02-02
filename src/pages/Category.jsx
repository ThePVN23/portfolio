import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data';

// --- INTEGRATED VIDEO GRID ITEM ---
const VideoGridItem = ({ item }) => {
  const navigate = useNavigate();
  let previewSrc = null;
  let isVideo = false;

  // 1. Priority: Direct Video Source
  if (item.videoSrc) {
    previewSrc = item.videoSrc;
    isVideo = true;
  }
  // 2. Thumbnail
  else if (item.thumbnail) {
    previewSrc = item.thumbnail;
  } 
  // 3. First Still
  else if (item.stills?.length > 0) {
    previewSrc = item.stills[0];
  }

  return (
    <div 
      onClick={() => navigate(`/project/${item.slug}`)} 
      className="group cursor-pointer flex flex-col gap-3"
    >
      {/* Aspect Ratio Container */}
      <div className="relative aspect-video bg-neutral-900 overflow-hidden border border-neutral-800 group-hover:border-neutral-500 transition-colors">
        
        {previewSrc && (isVideo ? 
          /* VIDEO PREVIEW LOGIC */
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
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
          /> :
          /* IMAGE LOGIC */
          <img 
            src={previewSrc} 
            alt={item.title} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
          />
        )}
      </div>

      {/* Title & Year Row */}
      <div className="flex justify-between items-baseline px-1">
        {/* CHANGED: Removed blue. Starts light gray, turns white on hover. */}
        <h3 className="text-sm font-medium text-neutral-300 uppercase tracking-widest group-hover:text-white transition-colors">
            {item.title}
        </h3>
        
        {/* CHANGED: Removed font-mono. Uses standard font-sans now. */}
        {item.year && (
          <span className="text-xs text-neutral-500 font-sans font-normal">
            {item.year}
          </span>
        )}
      </div>
    </div>
  );
};

// --- MAIN CATEGORY COMPONENT ---
const Category = () => {
  const { category, subcategory, nested } = useParams();
  const location = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    // 1. Find the main category
    const catData = portfolioData.find(c => c.category === (category || 'film'));
    if (!catData) return;

    // 2. Drill down to the specific section
    let currentStructure = catData.structure;
    let targetItems = [];
    let headerTitle = "";

    const findSection = (struct, path) => struct.find(s => s.path === path);

    if (nested) {
       const parent = findSection(currentStructure, subcategory);
       if (parent && parent.subcategories) {
          const child = findSection(parent.subcategories, nested);
          if (child) {
            targetItems = child.items;
            headerTitle = child.title;
          }
       }
    } else if (subcategory) {
       const section = findSection(currentStructure, subcategory);
       if (section) {
         if (section.items) {
           targetItems = section.items;
           headerTitle = section.header || section.title;
         } else if (section.subcategories) {
            targetItems = section.subcategories.flatMap(sub => sub.items);
            headerTitle = section.title;
         }
       }
    } else {
       targetItems = currentStructure.flatMap(sec => {
          if (sec.items) return sec.items;
          if (sec.subcategories) return sec.subcategories.flatMap(s => s.items);
          return [];
       });
       headerTitle = category;
    }

    setData({ title: headerTitle, items: targetItems || [] });
  }, [category, subcategory, nested, location]);

  if (!data) return <div className="bg-black min-h-[calc(100vh-6rem)]" />;

  return (
    <div className="bg-black text-white px-8 md:px-12 animate-fade-in min-h-[calc(100vh-6rem)] flex flex-col pt-12">
      
      {/* Header */}
      {data.title && (
        <div className="mb-12 border-b border-neutral-800 pb-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
            {data.title}
          </h1>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 pb-20">
        {data.items.map((item) => (
          <VideoGridItem key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;