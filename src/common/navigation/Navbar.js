import React from "react";
import { NavLink, Link } from "react-router-dom";

import './Navbar.styles.css'

/*
 * The navigation bar component using react-router-dom for server side routing
 */
export const Navbar = () => {

  // style used for current active url link
  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <nav className="navbar">
      {/* brand */}
      <Link to="/" className="brand">
        EasyFind
      </Link>
      {/* nav links */}
      <ul>
        <li>
          <NavLink to="/explore" style={activeStyle}>
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" style={activeStyle}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" style={activeStyle}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
