"use client";
import { useState } from "react";
import Link from "next/link";
import "../css/header.css";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mainHeader">
      <div className="headerContainer">
        <div className="brandBlock">
          <h1 className="brandName">DIGITAL TYPIST</h1>
          <p className="tagline">From script to screen — we transform research into readable, reliable, and ready-to-submit documents</p>
        </div>

        {/* ===== Hamburger for mobile ===== */}
        <button
          className="menuToggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* ===== Navigation ===== */}
        <nav className={`navLinks ${menuOpen ? "open" : ""}`}>
          <Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="#process" onClick={() => setMenuOpen(false)}>Process</Link>
          <Link href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</Link>
        </nav>
      </div>
    </header>
  );
}
