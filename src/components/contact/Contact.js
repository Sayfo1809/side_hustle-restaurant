import React from "react";

import "./Contact.css";

const Contact = () => {
  return <div id="contact">
            <h1>CONTACT US</h1>
            <form>
              <input type="text" placeholder="Full Name"/>
              <input type="email" placeholder="Enter Your E-mail"/>
              <textarea placeholder="Write Here...."></textarea>
              <input type="submit" value="Contact Us"/>
            </form>

  </div>;
};

export default Contact;
