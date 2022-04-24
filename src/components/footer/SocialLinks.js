import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import "./SocialLinks.css";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <Link to="/" className="social-link">
        <FaFacebookF className="social-link" />
      </Link>
      <Link to="/" className="social-link">
        <FaTwitter className="social-link" />
      </Link>
      <Link to="/" className="social-link">
        <FaInstagram />
      </Link>
    </div>
  );
};

export default SocialLinks;
