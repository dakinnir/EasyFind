import React from "react";
import { NavLink } from "react-router-dom";

/*
 * The navigation bar component using react-router-dom for server side routing
 */
export const Navbar = () => {

  // style used for current active url link
  const activeStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <nav>
      {/* brand */}
      <NavLink to="/" style={activeStyle}>
        EasyFind
      </NavLink>
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
