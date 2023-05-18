import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/planet.png';

const Navbar = () => (
  <nav>
    <div className="app-logo">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="app-name">Space Travelers&rsquo; Hub</h1>
    </div>
    <ul className="navLinks">
      <li>
        <NavLink to="/">
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink to="/missions">
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile">
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
