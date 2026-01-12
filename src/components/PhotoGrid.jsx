import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { workPool } from '../data';
import './PhotoGrid.css';

const PhotoGrid = () => {
  const location = useLocation();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter based on the current URL
  const photos = workPool.filter(item => 
    item.type === 'photo' && item.link === location.pathname
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % photos.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + photos.length) % photos.length);
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, photos]);

  if (photos.length === 0) return <div style={{padding: 40}}>No photos found here.</div>;

  return (
    <>
      <div className="masonry-grid">
        {photos.map((photo, index) => (
          <div 
            key={photo.id} 
            className="masonry-item"
            onClick={() => setLightboxIndex(index)}
          >
            <img src={photo.src} alt="Work" loading="lazy" />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>
          <button className="close-btn">&times;</button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={photos[lightboxIndex].src} alt="Full View" />
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGrid;