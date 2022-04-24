import React from "react";

import FooterNav from "./FooterNav";
import SocialLinks from "./SocialLinks";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <FooterNav />
      <SocialLinks />
      <p className="footer__copy">
        &copy; 2022. Made from a design from Figma community by{" "}
        <a href="https://linktr.ee/ChiranjitH" target="_blank" rel="noreferrer">
          ChiranjitH
        </a>{" "}
        for Side Hustles's 5.0 first capstone project
      </p>
    </div>
  );
};

export default Footer;
