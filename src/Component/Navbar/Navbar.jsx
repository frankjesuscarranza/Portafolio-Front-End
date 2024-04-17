import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navigation">
      <div className="nav-items">
        <NavLink className="nav-link" to="/portafolio">
          Projects
        </NavLink>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
