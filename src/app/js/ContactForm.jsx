// src/js/ContactForm.jsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(`Quote Request — ${form.university}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nUniversity: ${form.university}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:digitaltypistim@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="formRow">
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className="formRow">
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          University
          <input
            name="university"
            value={form.university}
            onChange={handleChange}
          />
        </label>
      </div>

      <label>
        Message
        <textarea
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
        />
      </label>

      <div className="heroCta">
        {/* <button type="submit" className="btn">
          Send via Email
        </button> */}
        <a
          className="btn secondary"
          href={`https://wa.me/918849165907?text=${encodeURIComponent(
            "Hello, I need help with my thesis. Please share a quote."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Us
        </a>
      </div>
    </form>
  );
}
