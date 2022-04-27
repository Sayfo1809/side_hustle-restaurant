import React from "react";
import Button from "../UIElements/Button";

import "./Home.css";

const Home = () => {
  return (
    <div id="main">
      <div className="home">
        <h3> It's A Great Time For Your Taste Buds </h3>
        <h1>
          <span>MEAL</span> FOR <br /> WEEK
        </h1>
        <div className="header-btns">
          <Button btnType="shop">Order Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
