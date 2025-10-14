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

    // only allow digits in phone and limit to 10
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return; // block non-numeric
      if (value.length > 10) return; // block beyond 10 digits
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

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
        type="text"
        name="phone"
        placeholder="Phone (10 digits)"
        value={form.phone}
        onChange={handleChange}
        required
        inputMode="numeric"
        pattern="\d{10}"
        maxLength="10"
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
