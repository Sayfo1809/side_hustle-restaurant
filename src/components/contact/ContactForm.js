import React from "react";

import "./ContactForm.css";

const ContactForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="contact-form">
      <h2 className="heading-secondary">BOOK YOUR MEAL</h2>
      <input
        className="contact-form__input"
        type="text"
        placeholder="Full Name"
      />
      <input
        className="contact-form__input"
        type="email"
        placeholder="Enter Your E-mail"
      />
      <textarea
        className="contact-form__input"
        placeholder="Write Here...."
      ></textarea>
      <input
        className=" btn btn--cta"
        type="submit"
        value="Request call back >"
      />
    </form>
  );
};

export default ContactForm;
