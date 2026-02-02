import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-full relative bg-black overflow-hidden">
      
      {/* FULL SCREEN DEMO REEL */}
      <video 
        src="/assets/Pavan_Demo_Reel.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full h-full object-cover opacity-90"
      />

    </div>
  );
};

export default Home;