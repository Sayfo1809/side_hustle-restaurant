import React from "react";
import Button from "../UIElements/Button";
import FooterLinks from "./FooterLinks";

import "./FooterNav.css";

const FooterNav = () => {
  return (
    <nav className="footer-nav">
      <FooterLinks />
    </nav>
  );
};

export default FooterNav;
