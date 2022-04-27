import React from "react";
import logo from "../../images/logo1.png";
import NavLinks from "./NavLinks";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__brand">
        Group_4's<span className="nav__logo">SITE<img className="logo"src={logo} alt=""/></span>
        
      </div>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
