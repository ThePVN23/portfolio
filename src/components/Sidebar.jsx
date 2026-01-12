import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navStructure } from '../data';
import signature from '../assets/signature.png'; 

const renderNav = (items, basePath = '') => {
  return (
    <ul className="nav-list">
      {items.map((item) => {
        const fullPath = `${basePath}/${item.path}`.replace('//', '/');
        return (
          <li key={item.path} className="nav-item">
            <NavLink to={fullPath} className={({ isActive }) => isActive ? "active-link" : ""}>
              {item.title}
            </NavLink>
            {item.sub && renderNav(item.sub, fullPath)}
          </li>
        );
      })}
    </ul>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={signature} alt="Logo" className="sidebar-logo" />
        </Link>
      </div>
      {renderNav(navStructure)}
    </aside>
  );
};

export default Sidebar;