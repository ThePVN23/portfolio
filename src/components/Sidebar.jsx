import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navStructure, signatureImg } from '../data';

const NavItem = ({ item, basePath = '' }) => {
  const fullPath = `${basePath}/${item.path}`.replace(/\/+/g, '/');
  const hasSub = item.sub && item.sub.length > 0;
  const [isHovered, setIsHovered] = useState(false);

  if (hasSub) {
    return (
      <div 
        className="relative group h-full flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Parent items - Non-clickable, just triggers dropdown */}
        <div 
          className="cursor-default text-sm font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors px-2 py-2 select-none"
        >
          {item.title}
        </div>
        
        {/* Dropdown Menu */}
        {isHovered && (
          <div className="absolute top-full right-0 bg-black border border-neutral-800 p-2 min-w-[200px] flex flex-col gap-1 shadow-2xl z-50">
            {item.sub.map((subItem) => (
              <NavItem key={subItem.path} item={subItem} basePath={fullPath} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Standard Link
  return (
    <NavLink 
      to={fullPath} 
      className={({ isActive }) => 
        `block text-sm font-medium uppercase tracking-widest px-2 py-2 transition-colors whitespace-nowrap ${isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300"}`
      }
    >
      {item.title}
    </NavLink>
  );
};

const Sidebar = () => {
  return (
    <nav className="w-full h-24 bg-black border-b border-neutral-900 flex items-center justify-between px-8 md:px-12 sticky top-0 z-50">
      
      {/* Left: Logo & Name (gap-6) */}
      <Link to="/" className="flex items-center gap-6 group">
        <img 
          src={signatureImg} 
          alt="Signature" 
          className="h-14 w-auto invert opacity-80 group-hover:opacity-100 transition-opacity" 
        />
        <span className="text-white text-3xl font-bold tracking-tighter uppercase hidden md:block">
          Pavan Gadiraju
        </span>
      </Link>

      {/* Right: Navigation (Increased to gap-6 to match left side) */}
      <div className="flex items-center gap-6">
        {navStructure.map((item) => (
          <NavItem key={item.path} item={item} />
        ))}
      </div>

    </nav>
  );
};

export default Sidebar;