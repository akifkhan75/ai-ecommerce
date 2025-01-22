import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;