import React from "react";
import aboutimage from "../../images/about.png";

import "./About.css";

const About = () => {
  return <div id="about">
    <div className="about-text">
      <h1>ABOUT US</h1>
      <p>
        Welcome to the World of Burger, <br />
        We satisfy our customers cravings with joy. <br />
        Our delicious varieties of tasty burger will leave you wanting for more<br />
        We offer the best quality and customer services.<br />
        COME HAVE A FEEL OF HEAVEN ON EARTH <br />
        <button> Read More </button>
        <br />
        </p>
      <h1>UPCOMING DEALS</h1>
        <p>
        Introducing the coupon offer to our distinguished customers.
        </p>
            <button>Claim Coupon </button>
          </div>
          <div className="about-image">
            <img src={aboutimage} alt=''/>
          </div>
  </div>;
};

export default About;
