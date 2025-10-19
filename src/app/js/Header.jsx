"use client";
import { useState } from "react";
import Link from "next/link";
import "../css/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mainHeader">
      {/* ===== Top Section: Logo + Brand ===== */}
      <div className="topRow">
        {/* Logo */}
        <div className="logoBlock" suppressHydrationWarning>
          <Link href="/" prefetch={false}>
            <img
              src="/logo_transparent.png"
              alt="Digital Typist Logo"
              className="siteLogo"
            />
          </Link>
        </div>

        {/* Brand Name + Tagline */}
        <div className="brandBlock">
          <h1 className="brandName">DIGITAL TYPIST</h1>
          <p className="tagline">Your Academic Partner for Thesis & Research</p>
        </div>
      </div>

      {/* ===== Navigation Row ===== */}
      <nav className={`navRow ${menuOpen ? "open" : ""}`}>
        <button
          className="menuToggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className="navLinks">
          <Link href="/" scroll={true} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/services" scroll={true} onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/process" scroll={true} onClick={() => setMenuOpen(false)}>
            Process
          </Link>
          <Link href="/about" scroll={true} onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
