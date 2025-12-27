import React, { useState } from 'react';
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id.replace('c-', '')]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    alert(`Thank you ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);
  };

  return (
    <section id="contactSection">
      <div className="contact-header">
        <h1>Contact</h1>
      </div>

      <div className="contact-container">
        <h2>Get In Touch</h2>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h3>Send us a message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="c-name">Name</label>
                <input
                  type="text"
                  id="c-name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="c-email">Email</label>
                <input
                  type="email"
                  id="c-email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="c-message">Message</label>
                <textarea
                  id="c-message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Submit Enquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-wrapper">
            <h3>Contact Information</h3>

            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>123 Commerce Street, Metropolis, CA 90210</span>
              </div>

              <div className="contact-item">
                <span className="icon">📞</span>
                <a href="tel:+15551234567">(555) 123-4567</a>
              </div>

              <div className="contact-item">
                <span className="icon">📧</span>
                <a href="mailto:support@ekart.com">support@ekart.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
