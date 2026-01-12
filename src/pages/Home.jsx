// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col justify-center h-[calc(100vh-100px)] animate-fade-in">
      {/* Big Impact Typography */}
      <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
        FILM.<br/>
        PHOTO.<br/>
        TECH.
      </h1>
      
      {/* Subtext */}
      <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl leading-relaxed mb-12 font-light">
        Exploring the liminal spaces between narrative cinema and digital experimentation. 
        Based in Athens & Atlanta, GA.
      </p>
      
      {/* CTA */}
      <Link 
        to="/category/film" 
        className="group flex items-center gap-4 text-white text-xl font-bold uppercase tracking-widest hover:text-red-500 transition-colors"
      >
        Enter Portfolio
        <ArrowRight className="group-hover:translate-x-2 transition-transform"/>
      </Link>
    </div>
  );
};

export default Home;