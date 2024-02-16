import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SocialIcon } from "react-social-icons";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_z6almah", "template_38pcrgc", form.current, {
        publicKey: "7dzFL60YytPKp4W0h",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-content">
      <div className="contact-section">
        Send me an email!
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label>Your Name:</label>
          <input className="input" type="text" name="from_name" />
          <label>Your Email Address:</label>
          <input className="input" type="email" name="user_email" />
          <label>Your Message:</label>
          <textarea className="input" name="message" />
          <input className="contact-button" type="submit" value="Send" />
        </form>
      </div>
      <div className="contact-icons">
        <SocialIcon url="https://linkedin.com/in/sof-christensen" />
        <SocialIcon url="https://github.com/sofchr" />
      </div>
    </div>
  );
}

export default Contact;
