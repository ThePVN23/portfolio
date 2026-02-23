import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 px-8 md:px-12 pb-20 animate-fade-in">
      <div className="max-w-3xl">
        
        {/* BIG HEADER (Kept as is) */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12 leading-tight">
          Hi, my name is Pavan.
        </h1>

        {/* BIO TEXT - Changed to standard font, normal weight */}
        <div className="space-y-8 text-lg md:text-xl text-neutral-300 font-sans font-normal leading-relaxed mb-20">
          <p>
            I'm an Indian-American filmmaker, focused on capturing Atlanta and manipulating colors.
          </p>
          <p>
            I'm also a student pursuing computer science aiming to create applications that enhance 
            creative output of filmmakers as well as foster local film culture. I also aim to work 
            on visual effects and image analysis to further advance the craft of filmmaking.
          </p>
        </div>

        {/* CONTACT SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-neutral-800 pt-12">
          
          {/* Email Column */}
          <div>
            {/* LABEL - Changed from mono to standard bold sans */}
            <h3 className="text-xs font-sans font-bold text-neutral-500 uppercase tracking-widest mb-4">
              Get in Touch
            </h3>
            <a 
              href="mailto:24framespg9@gmail.com" 
              className="text-white hover:text-neutral-400 transition-colors text-lg font-sans block"
            >
              24framespg9@gmail.com
            </a>
          </div>

          {/* Socials Column */}
          <div>
            {/* LABEL - Changed from mono to standard bold sans */}
            <h3 className="text-xs font-sans font-bold text-neutral-500 uppercase tracking-widest mb-4">
              Follow
            </h3>
            <div className="flex flex-col gap-2 items-start font-sans">
              <a 
                href="https://www.instagram.com/doomednightpictures/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-neutral-400 transition-colors text-lg flex items-center gap-2 group"
              >
                Instagram 
                <span className="text-neutral-600 group-hover:text-white transition-colors text-xs">↗</span>
              </a>
              <a 
                href="https://www.youtube.com/channel/UCBQCPD8Zbb22fg0Y5lGMBOQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-neutral-400 transition-colors text-lg flex items-center gap-2 group"
              >
                Youtube
                <span className="text-neutral-600 group-hover:text-white transition-colors text-xs">↗</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;