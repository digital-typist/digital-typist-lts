"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    university: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // strip everything except digits
      const digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length > 10) return;
      setForm({ ...form, [name]: digitsOnly });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // validate 10-digit phone number
    if (form.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const whatsappMessage = `Hello Digital Typist,%0A%0AName: ${form.name}%0AEmail: ${form.email}%0AUniversity: ${form.university}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    const url = `https://wa.me/918849165907?text=${whatsappMessage}`;
    window.open(url, "_blank");
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="university"
        placeholder="University"
        value={form.university}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone (10 digits)"
        value={form.phone}
        onChange={handleChange}
        required
        maxLength="10"
        pattern="\d{10}"
        inputMode="numeric"
        title="Enter a valid 10-digit phone number"
      />
      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        rows="3"
      ></textarea>
      <button type="submit">WhatsApp Us</button>
    </form>
  );
}
