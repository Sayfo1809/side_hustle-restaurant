import React from "react";
import Productbox from './Productbox';
import pimage1 from '../../images/s1.png';
import pimage2 from '../../images/s2.png';



import "./Products.css";

const Products = () => {
  return <div id="products" >
    <h1> CHOOSE & ENJOY </h1>
    <p> Your Taste Buds Are In For A Treat</p>
    <div className="a-container">
      <Productbox image={pimage1} title="Luger Burger" price="#3000"/>
      <Productbox image={pimage2} title="Le Pigeon Burger" price="#5000"/>
      <Productbox image={pimage1} title="Luger Burger" price="#3000"/>
    </div>
    <div className="a-container">
      <Productbox image={pimage1} title="Luger Burger" price="#3000"/>
      <Productbox image={pimage2} title="Le Pigeon Burger" price="#5000"/>
      <Productbox image={pimage1} title="Luger Burger" price="#3000"/>
    </div>
    
    
  </div>;
};

export default Products;
