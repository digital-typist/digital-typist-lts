"use client";
import { useState } from "react";
import Link from "next/link";
import "../css/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mainHeader">
      <div className="headerContainer">
        {/* ===== Brand Section ===== */}
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

          {/* ==== HOME PAGE LINK ==== */}
          <Link href="/" scroll={true} onClick={() => setMenuOpen(false)}>
            Home
          </Link>


          {/* ==== SERVICES PAGE LINK*/}
          <Link href="/services" scroll={true} onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          {/* ==== PROCESS PAGE LINK*/}
          <Link href="/process" scroll={true} onClick={() => setMenuOpen(false)}>
            Process
          </Link>
          
          {/* ==== ABOUT US PAGE LINK ==== */}
          <Link href="/about" scroll={true} onClick={() => setMenuOpen(false)}>
            About Us
          </Link>

          {/* ==== REVIEW PAGE LINK
          <Link href="/reviews" scroll={true} onClick={() => setMenuOpen(false)}>
            Reviews
          </Link> */}
          
        </nav>
      </div>
    </header>
  );
}
