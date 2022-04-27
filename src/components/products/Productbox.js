import React from "react";


import "./Products.css";

const Productbox = (props) => {
  return <div className="a-box">
      <div className="a-b-img">
          <img src={props.image} alt=""/>
      </div>
      <div className="a-b-text">
            <h2> {props.title} </h2>
            <h4> {props.price} </h4>

            <button className="productbox-button"> Order Now</button>
      </div>
  </div>;
};

export default Productbox;
