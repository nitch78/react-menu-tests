import React, { useState, useRef } from "react";
import "./contact-me.scss";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const recaptchaRef = useRef();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get captcha value
    const captchaValue = recaptchaRef.current.getValue();
    if (!captchaValue) {
      setError("Veuillez valider le captcha");
      return;
    }

    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
          captcha: captchaValue,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      alert("Email sent successfully!");
    } catch (error) {
      setError("Failed to send email. Please try again later.");
    }
  };

  return (
    <div className="contact-form-container">
      <h3>Contactez-moi</h3>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="lastName">Nom:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Prénom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LeiJpgqAAAAALXtwzmXeLcDMN8-l1taux0FvVV_" // CHANGE SITE KEY HERE LATER
            onChange={() => setError(null)}
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
