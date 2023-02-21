import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthenticationContext } from "../../hooks/context/authContext";

import "./Navbar.styles.css";

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

  const { user, setUser } = useContext(AuthenticationContext);

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid align-items-center">
        {/* brand */}
        <Link to="/" className="brand me-4">
          EasyFind
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* nav links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0 ms-md-4 ms-lg-4">
            <li className="nav-item">
              <NavLink to="/explore" style={activeStyle}>
                Explore
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" style={activeStyle}>
                Services
              </NavLink>
            </li>
            {!user && 
            <li className="nav-item">
              <NavLink to="/login" style={activeStyle}>
                Login
              </NavLink>
            </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};
