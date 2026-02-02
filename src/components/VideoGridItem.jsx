import React from 'react';
import { Link } from 'react-router-dom';

const VideoGridItem = ({ item }) => {
  // Check if we have a video source available in the data
  // Adjust these keys (src, url, file, etc.) based on your actual data structure in data.js
  const videoSrc = item.src || item.url || item.video || item.file;
  
  // Decide if we should render a video tag or an image tag
  // We prioritize video if no specific thumbnail image is provided, OR if the thumbnail path looks broken/placeholder
  const showVideo = videoSrc && (!item.thumbnail || item.thumbnail.includes('placeholder'));

  return (
    <Link to={`/project/${item.slug}`} className="block group">
      
      {/* Thumbnail Container */}
      <div className="relative overflow-hidden aspect-video bg-neutral-900 border border-neutral-800 group-hover:border-white/50 transition-all duration-300">
        
        {showVideo ? (
          // RENDER VIDEO DIRECTLY (Muted, Loop, Autoplay acts as a dynamic GIF)
          <video
            src={videoSrc}
            muted
            loop
            playsInline
            autoPlay // This makes it play immediately like a thumbnail
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none"
          />
        ) : (
          // RENDER IMAGE (Standard behavior for items with valid thumbnails)
          <img 
            src={item.thumbnail} 
            alt={item.title} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
        )}
        
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
             <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>

      {/* Title & Year */}
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="text-lg font-medium text-neutral-300 group-hover:text-white transition-colors uppercase tracking-wide">
          {item.title}
        </h3>
        
        <span className="text-sm text-neutral-500 group-hover:text-white transition-colors font-sans font-normal">
          [{item.year}]
        </span>
      </div>
    </Link>
  );
};

export default VideoGridItem;