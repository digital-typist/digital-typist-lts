"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="container">
        <div className="brand">
          <h1>Digital Typist</h1>
          <p className="tagline">Your Academic Partner for Thesis & Research</p>
        </div>

        {/* ===== Hamburger Button (visible only on mobile) ===== */}
        <button
          className="menuToggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* ===== Navigation Links ===== */}
        <nav className={`siteNav ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
