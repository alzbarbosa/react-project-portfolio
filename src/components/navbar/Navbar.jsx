import React from "react";
import { Link } from "react-router-dom";
import "./navbar-styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/curriculum">Curriculum</Link>
        </li>
        <li className="navbar-item">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="navbar-item">
          <Link to="/aboutme">About Me</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
