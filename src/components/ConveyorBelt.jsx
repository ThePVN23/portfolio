// src/components/ConveyorBelt.jsx
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { workPool } from '../data';
import './ConveyorBelt.css'; 

const ConveyorBelt = () => {
  const navigate = useNavigate();

  const sortedItems = useMemo(() => {
    if (!workPool) return [];

    const videos = workPool.filter(item => item.type === 'video');
    const photos = workPool.filter(item => item.type === 'photo');

    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const shuffledVideos = shuffle([...videos]);
    const shuffledPhotos = shuffle([...photos]);

    const result = [];
    
    // 3:1 Ratio Logic
    while (shuffledVideos.length > 0) {
      result.push(...shuffledVideos.splice(0, 3));
      if (shuffledPhotos.length > 0) result.push(shuffledPhotos.shift());
    }
    if (shuffledPhotos.length > 0) result.push(...shuffledPhotos);

    return result;
  }, []);

  // Duplicate items for infinite loop illusion
  const beltItems = [...sortedItems, ...sortedItems];

  if (sortedItems.length === 0) return <div style={{padding:40}}>No items found.</div>;

  return (
    <div className="conveyor-container">
      <div className="conveyor-track">
        {beltItems.map((item, index) => (
          <div 
            key={`${item.id}-${index}`} 
            className="work-item"
            onClick={() => navigate(item.link)}
          >
            {item.type === 'video' ? (
              <video 
                src={item.src} 
                autoPlay        // <--- THIS MAKES IT PLAY AUTOMATICALLY
                muted           // <--- REQUIRED FOR AUTOPLAY
                loop            // <--- KEEPS PLAYING FOREVER
                playsInline     // <--- BETTER FOR MOBILE
                // removed onMouseOver logic so it just plays constantly
              />
            ) : (
              <img src={item.src} alt={item.title} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConveyorBelt;