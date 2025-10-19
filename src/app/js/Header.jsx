"use client";
import { useState } from "react";
import Link from "next/link";
import "../css/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mainHeader">
      <div className="headerContainer">
        {/* ===== Logo Section ===== */}
        <div className="logoBlock">
          <Link href="/" scroll={true}>
            <img src="/logo_transparent.png" alt="Digital Typist Logo" className="siteLogo" />
          </Link>
        </div>

        {/* ===== Brand Section (center aligned) ===== */}
        <div className="brandBlock">
          <h1 className="brandName">DIGITAL TYPIST</h1>
          <p className="tagline">Your Academic Partner for Thesis & Research</p>
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
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/process" onClick={() => setMenuOpen(false)}>Process</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        </nav>
      </div>
    </header>
  );
}
