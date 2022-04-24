import React from "react";
import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  {
    linkText: "Register",
  },
  {
    linkText: "Forum",
  },
  {
    linkText: "Affiliate",
  },
  {
    linkText: "FAQ",
  },
];

const FooterLinks = () => {
  return (
    <ul className="footer-nav__items">
      {FOOTER_LINKS.map((link, index) => (
        <li className="footer-nav__item" key={index}>
          <Link to="/" className="footer-nav__link">
            {link.linkText}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
