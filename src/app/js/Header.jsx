"use client";
import { useState } from "react";
import Link from "next/link";
import "../css/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="mainHeader">
      {/* === TOP ROW === */}
      <div className="topRow">
        <div className="logoBlock">
          <Link href="/" scroll={true}>
            <img src="/logo_transparent.png" alt="Digital Typist Logo" className="siteLogo" />
          </Link>
        </div>

        <div className="brandBlock">
          <h1 className="brandName">DIGITAL TYPIST</h1>
          <p className="tagline">Your Academic Partner for Thesis & Research</p>
        </div>

        {/* Hamburger Toggle */}
        <button
          className={`menuToggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* === NAVIGATION ROW === */}
      <nav className={`navRow ${menuOpen ? "open" : ""}`}>
        <div className="navLinks">
          <Link href="/" onClick={toggleMenu}>
            <span className="icon">🏠</span> Home
          </Link>
          <Link href="/services" onClick={toggleMenu}>
            <span className="icon">📄</span> Services
          </Link>
          <Link href="/process" onClick={toggleMenu}>
            <span className="icon">⚙️</span> Process
          </Link>
          <Link href="/about" onClick={toggleMenu}>
            <span className="icon">👥</span> About Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
