import React from "react";

import NavLinks from "./NavLinks";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__brand">
        Group_4<span className="nav__logo">Food</span>
      </div>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
