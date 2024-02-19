import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SocialIcon } from "react-social-icons";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });
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
          setFormData({
            from_name: "",
            user_email: "",
            message: ",",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact-content">
      <div className="contact-section">
        <h2>Send me an email!</h2>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label>Your Name:</label>
          <input
            className="input"
            type="text"
            name="from_name"
            placeholder="Name"
            value={formData.from_name}
            onChange={handleChange}
          />
          <label>Your Email Address:</label>
          <input
            className="input"
            type="email"
            name="user_email"
            placeholder="Email"
            value={formData.user_email}
            onChange={handleChange}
          />
          <label>Your Message:</label>
          <textarea
            className="message-input"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
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
