"use client";
import { useState } from "react";
import Link from "next/link";
import "../css/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mainHeader">
      <div className="headerContainer">
        {/* ===== LEFT LOGO ===== */}
        <div className="logoBlock">
          <Link href="/" scroll={true}>
            <img src="/logo_transparent.png" alt="Digital Typist Logo" className="siteLogo" />
          </Link>
        </div>

        {/* ===== CENTER BRAND ===== */}
        <div className="brandBlock">
          <h1 className="brandName">DIGITAL TYPIST</h1>
          <p className="tagline">Your Academic Partner for Thesis & Research</p>
        </div>

        {/* ===== RIGHT MENU BUTTON ===== */}
        <button className={`menuToggle ${menuOpen ? "open" : ""}`}
              onClick={() => { setMenuOpen(!menuOpen);
                document.querySelector(".navRow")?.classList.toggle("open");
              }
            }
              aria-label="Toggle navigation"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
        </button>
      </div>

      {/* ===== NAV LINKS (separate row, centered) ===== */}
      <nav className={`navLinks ${menuOpen ? "open" : ""}`}>
        <Link href="/" scroll={true} onClick={() => setMenuOpen(false)}>
          <span className="icon">🏠</span> Home
        </Link>
        <Link href="/services" scroll={true} onClick={() => setMenuOpen(false)}>
          <span className="icon">📄</span> Services
        </Link>
        <Link href="/process" scroll={true} onClick={() => setMenuOpen(false)}>
          <span className="icon">⚙️</span> Process
        </Link>
        <Link href="/about" scroll={true} onClick={() => setMenuOpen(false)}>
          <span className="icon">👥</span> About Us
        </Link>
      </nav>
    </header>
  );
}
