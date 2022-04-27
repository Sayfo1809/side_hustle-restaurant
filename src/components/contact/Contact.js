import React from "react";

import "./Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // LOGIC FOR POST API GO HERE
  };

  return (
    <div id="contact">
      <ContactForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Contact;
