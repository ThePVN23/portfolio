import React from 'react';
import { Link } from 'react-router-dom';

const VideoGridItem = ({ item }) => {
  return (
    <div className="block w-full h-full relative bg-white border-4 border-blue-500">
      {/* 1. 'controls': Adds play/pause buttons and timeline 
         2. 'object-contain': Ensures the whole video fits in the box (no cropping)
         3. 'bg-white': If video is transparent/broken, you'll see white.
      */}
      <video
        src={item.src}
        controls 
        muted
        width="100%"
        height="100%"
        className="w-full h-full object-contain"
      />
      
      {/* Temporary Link overlay so you can still click to test navigation */}
      <Link 
        to={item.link} 
        className="absolute top-0 right-0 bg-blue-500 text-white p-2 text-xs z-50"
      >
        GO TO PROJECT
      </Link>
    </div>
  );
};

export default VideoGridItem;