import React from "react";

import "./Contact.css";

const Contact = () => {
  return <div id="contact">
            <h1>BOOK YOUR MEAL</h1>
            <form>
              <input type="text" placeholder="Full Name"/>
              <input type="email" placeholder="Enter Your E-mail"/>
              <textarea placeholder="Write Here...."></textarea>
              <input type="submit" value="BOOK"/>
            </form>

  </div>;
};

export default Contact;