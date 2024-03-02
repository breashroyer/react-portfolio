// src/components/Contact/Contact.js

import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    // Add more validation as needed
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with form submission (e.g., send an email or display a message)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form" id="contact">
      <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Name" />
      {errors.name && <div className="error">{errors.name}</div>}
      <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email" />
      {errors.email && <div className="error">{errors.email}</div>}
      <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Message"></textarea>
      {errors.message && <div className="error">{errors.message}</div>}
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;
