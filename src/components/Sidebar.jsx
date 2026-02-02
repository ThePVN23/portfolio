import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'; 
import { navStructure, signatureImg } from '../data';

// --- DESKTOP NAVIGATION ITEM (Hover) ---
const DesktopNavItem = ({ item, basePath = '' }) => {
  const fullPath = `${basePath}/${item.path}`.replace(/\/+/g, '/');
  const hasSub = item.sub && item.sub.length > 0;
  const [isHovered, setIsHovered] = useState(false);
  
  // Get current location to highlight parents
  const location = useLocation();
  // Check if current URL includes this item's path (for parent highlighting)
  const isParentActive = location.pathname.includes(item.path);

  if (hasSub) {
    return (
      <div 
        className="relative group h-full flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`cursor-pointer text-sm font-medium uppercase tracking-widest px-2 py-2 select-none flex items-center gap-1 transition-colors
            ${isParentActive || isHovered ? "text-white" : "text-neutral-400"}
          `}
        >
          {item.title}
          <ChevronDown size={14} />
        </div>
        
        {/* Dropdown Menu */}
        {isHovered && (
          <div className="absolute top-full left-0 bg-black border border-neutral-800 p-2 min-w-[200px] flex flex-col gap-1 shadow-2xl z-50">
            {item.sub.map((subItem) => (
              <DesktopNavItem key={subItem.path} item={subItem} basePath={fullPath} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <NavLink 
      to={fullPath} 
      className={({ isActive }) => 
        `block text-sm font-medium uppercase tracking-widest px-2 py-2 transition-colors whitespace-nowrap 
        ${isActive ? "text-white" : "text-neutral-400 hover:text-white"}`
      }
    >
      {item.title}
    </NavLink>
  );
};

// --- MOBILE NAVIGATION ITEM (Accordion) ---
const MobileNavItem = ({ item, basePath = '', closeMenu }) => {
  const fullPath = `${basePath}/${item.path}`.replace(/\/+/g, '/');
  const hasSub = item.sub && item.sub.length > 0;
  const [isOpen, setIsOpen] = useState(false);

  if (hasSub) {
    return (
      <div className="flex flex-col border-b border-neutral-900 w-full">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full py-4 text-xl font-bold uppercase tracking-tighter text-neutral-300 hover:text-white"
        >
          {item.title}
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
        
        {/* Accordion Content */}
        {isOpen && (
          <div className="pl-4 pb-4 flex flex-col gap-2 border-l border-neutral-800 ml-2">
            {item.sub.map((subItem) => (
              <MobileNavItem 
                key={subItem.path} 
                item={subItem} 
                basePath={fullPath} 
                closeMenu={closeMenu} 
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <NavLink 
      to={fullPath} 
      onClick={closeMenu}
      className={({ isActive }) => 
        `block py-4 text-xl font-bold uppercase tracking-tighter border-b border-neutral-900 w-full ${isActive ? "text-white" : "text-neutral-400"}`
      }
    >
      {item.title}
    </NavLink>
  );
};

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full h-24 bg-black border-b border-neutral-900 flex items-center justify-between px-6 md:px-12 sticky top-0 z-50">
      
      {/* 1. LOGO SECTION */}
      <Link to="/" className="flex items-center gap-4 md:gap-6 group shrink-0 z-50 relative" onClick={() => setIsMobileMenuOpen(false)}>
        <img 
          src={signatureImg} 
          alt="Signature" 
          className="h-10 md:h-14 w-auto invert opacity-80 group-hover:opacity-100 transition-opacity" 
        />
        <span className="text-white text-xl md:text-3xl font-bold tracking-tighter whitespace-nowrap overflow-hidden text-ellipsis">
          PAVAN GADIRAJU
        </span>
      </Link>

      {/* 2. DESKTOP NAV */}
      <div className="hidden md:flex items-center gap-8">
        {navStructure.map((item) => (
          <DesktopNavItem key={item.path} item={item} />
        ))}
      </div>

      {/* 3. MOBILE TOGGLE BUTTON */}
      <button 
        className="md:hidden text-white p-2 z-50 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* 4. MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col pt-32 px-8 overflow-y-auto animate-fade-in">
          <div className="flex flex-col w-full max-w-md mx-auto">
            {navStructure.map((item) => (
              <MobileNavItem 
                key={item.path} 
                item={item} 
                closeMenu={() => setIsMobileMenuOpen(false)} 
              />
            ))}
            
            <div className="mt-12 text-neutral-600 text-sm">
              &copy; {new Date().getFullYear()} Pavan Gadiraju
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;