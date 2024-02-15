import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label>Your Name:</label>
          <input type="text" name="from_name" />
          <label>Your Email Address:</label>
          <input type="email" name="user_email" />
          <label>Message:</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
      <div className="contact-section">LinkedIn and GitHub</div>
    </div>
  );
}

export default Contact;
