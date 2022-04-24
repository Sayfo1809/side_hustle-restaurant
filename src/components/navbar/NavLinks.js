import React from "react";
import { NavLink } from "react-router-dom";

const LINK_DATA = [
  {
    linkText: "Home",
    linkTarget: "/",
  },
  {
    linkText: "Products",
    linkTarget: "/products",
  },
  {
    linkText: "About",
    linkTarget: "/about",
  },
  {
    linkText: "Contact",
    linkTarget: "/contact",
  },
];

const NavLinks = () => {
  return (
    <ul className="nav__items">
      {LINK_DATA.map((link, index) => (
        <li className="nav__item" key={index}>
          <NavLink className="nav__link" to={link.linkTarget}>
            {link.linkText}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
