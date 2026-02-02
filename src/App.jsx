// src/App.jsx
import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ConveyorBelt from './components/ConveyorBelt';
import PhotoGrid from './components/PhotoGrid';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import Project from './pages/Project';
import GraphicDesign from './pages/GraphicDesign'; // Imported here

const App = () => {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/splash" element={<ConveyorBelt />} />
            <Route path="/about" element={<About />} />
            
            {/* --- ADDED THIS LINE --- */}
            <Route path="/graphicdesign" element={<GraphicDesign />} />

            {/* Project Details */}
            <Route path="/project/:slug" element={<Project />} />
            
            {/* Specific Photo Grid Routes */}
            <Route path="/photo/flowers-of-athens" element={<PhotoGrid />} />
            <Route path="/photo/india-on-digicam" element={<PhotoGrid />} />
            <Route path="/photo/cityscapes-atlanta" element={<PhotoGrid />} />

            {/* Dynamic Categories (Catch-all) */}
            {/* These must come LAST so they don't accidentally catch specific pages */}
            <Route path="/:category" element={<Category />} />
            <Route path="/:category/:subcategory" element={<Category />} />
            <Route path="/:category/:subcategory/:nested" element={<Category />} />
            
            <Route path="*" element={<div className="p-10 text-white">404 - Page Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;