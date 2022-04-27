import React from "react";
import aboutimage from "../../images/about.png";
import Button from "../UIElements/Button";

import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h2 className="heading-secondary">ABOUT US</h2>
        <p>
          Welcome to the World of Burger, <br />
          We satisfy our customers cravings with joy. <br />
          Our delicious varieties of tasty burger will leave you wanting for
          more
          <br />
          We offer the best quality and customer services.
          <br />
          COME HAVE A FEEL OF HEAVEN ON EARTH <br />
        </p>
        <Button btnType="cta">Read More</Button>
      </div>
      <div className="about-image">
        <img src={aboutimage} alt="about us" />
      </div>
    </div>
  );
};

export default About;
