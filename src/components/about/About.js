import React from "react";
import aboutimage from "../../images/about.png";

import "./About.css";

const About = () => {
  return <div id="about">
          <div className="about-text">
            <h1>UPCOMING DEALS</h1>
            <p>
              Lorem Ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum cum expedita. Voluptas ratione
              beatae sunt incidunt, in delectus doloremque aliquid, iure tempora ad nobis.
            </p>
            <button> Read More </button>
          </div>
          <div className="about-image">
            <img src={aboutimage} alt=''/>
          </div>
  </div>;
};

export default About;
