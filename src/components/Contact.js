import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const validateEmail = isValidEmail(email);

  const submit = () => {
    if (!validateEmail) {
      alert("You have entered an invalid email address!");
    } else if (name && email && message && validateEmail) {
      const serviceId = "service_89ej9h8";
      const templateId = "template_oeat98f";
      const userId = "vYAbZUHfmGHMLL_Nm";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div id="contact-form">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Your Massage"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={submit}>Send Message</button>
      <span className={emailSent ? "visible" : null}>
        Thanks for Your Massage
      </span>
    </div>
  );
};

export default Contact;
