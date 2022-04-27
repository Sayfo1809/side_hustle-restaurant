import React from "react";
import aboutimage from "../../images/about.png";
import Button from "../UIElements/Button";

import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h2 className="heading-secondary">UPCOMING DEALS</h2>
        <p>
          Lorem Ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum cum
          expedita. Voluptas ratione beatae sunt incidunt, in delectus
          doloremque aliquid, iure tempora ad nobis.
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
