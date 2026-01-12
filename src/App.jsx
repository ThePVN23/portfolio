import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ConveyorBelt from './components/ConveyorBelt';
import PhotoGrid from './components/PhotoGrid';

const App = () => {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            {/* Splash Page */}
            <Route path="/" element={<ConveyorBelt />} />
            
            {/* Photo Pages */}
            <Route path="/photo/flowers-of-athens" element={<PhotoGrid />} />
            <Route path="/photo/india-on-digicam" element={<PhotoGrid />} />
            <Route path="/photo/cityscapes-atlanta" element={<PhotoGrid />} />
            
            {/* Fallback for empty/film pages */}
            <Route path="*" element={<div style={{padding:40}}>Coming Soon</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;