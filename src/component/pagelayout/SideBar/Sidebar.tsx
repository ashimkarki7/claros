import React from 'react';
import SideBarStyles from './SideBar.module.scss';
import { NavLink } from 'react-router';

const Sidebar: React.FC = () => {
  return (
    <div id={'SideBar'} className={SideBarStyles.sidebar}>
      <h5 className="text-white mb-4 ">CLAROS</h5>
      <nav className="nav flex-column">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          <i className="bi bi-speedometer2"></i> Home
        </NavLink>
        <NavLink
          to="/data"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          <i className="bi bi-card-list"></i> Data
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          <i className="bi bi-gear"></i>
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
