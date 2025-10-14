// src/app/page.js
import ContactForm from "./js/ContactForm";
import Image from "next/image";

export const metadata = {
  title: "Digital Typist | Thesis Typing & Formatting Services India",
  description:
    "Professional typing, formatting & proofreading for PhD / M.Phil scholars. Sanskrit · Gujarati · Hindi · English.",
};

export default function HomePage() {
  return (
    <section className="homeContainer">
      {/* HERO SECTION */}
      <header className="hero">
        <div className="heroInner">
          <div className="heroText">
            <h1 className="title">
              Accurate Thesis Typing & Formatting for PhD Scholars
            </h1>
            <p className="subtitle">
              Fast · Confidential · University-compliant formatting in Sanskrit,
              Gujarati, Hindi & English.
            </p>

            <div className="cta">
              {/* <a href="/contact" className="btn">
                Get a Free Quote
              </a> */}
              <a
                href="https://wa.me/918849165907?text=Hello%20Digital%20Typist%2C%20I%20need%20help%20with%20my%20thesis"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                Message on WhatsApp
              </a>
            </div>

            <p className="trust">
              Trusted by PhD & M.Phil scholars — Confidential, on-time delivery.
            </p>
          </div>

         <div className="heroImageWrapper">
           <div className="heroImageBox">
             <Image
                src="/card_front.jpg"
                alt="Person formatting a thesis on laptop"
                className="heroImage"
              />
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES SECTION */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="grid">
          <div className="card">
            <div className="icon">📝</div>
            <h3>Thesis Typing & Formatting</h3>
            <p>
              UGC & University-compliant layout, TOC, margins, references — final Word & PDF delivery.
            </p>
          </div>

          <div className="card">
            <div className="icon">✍️</div>
            <h3>Proofreading & Editing</h3>
            <p>
              Grammar, clarity, and citation style (APA / MLA / Vancouver) review.
            </p>
          </div>

          <div className="card">
            <div className="icon">🌐</div>
            <h3>Multilingual Typing</h3>
            <p>
              Sanskrit · Gujarati · Hindi · English — Unicode & transliteration support.
            </p>
          </div>

          <div className="card">
            <div className="icon">🔊</div>
            <h3>Transcription & Data Entry</h3>
            <p>
              Audio → text conversion & research data entry (fast & accurate).
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="how">
        <h2>How It Works</h2>
        <ol className="steps">
          <li>
            <strong>Send your file</strong>
            <span>Upload or share via WhatsApp.</span>
          </li>
          <li>
            <strong>Get quote</strong>
            <span>We confirm time & cost quickly.</span>
          </li>
          <li>
            <strong>Receive delivery</strong>
            <span>Word + PDF files, 1 free revision.</span>
          </li>
        </ol>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="why">
        <h2>Why Choose Digital Typist</h2>
        <ul className="usps">
          <li>Multilingual support (Sanskrit · Gujarati · Hindi · English)</li>
          <li>UGC & university formatting expertise</li>
          <li>100% confidentiality</li>
          <li>On-time delivery & free revision</li>
        </ul>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Clients Say</h2>
        <blockquote className="testi">
          <p>
            “Perfect formatting for my PhD thesis — saved me valuable time during submission.”
          </p>
          <footer>— K. Patel, Gujarat University</footer>
        </blockquote>
      </section>

      {/* CONTACT FORM */}
      <section className="contact">
        <h2>Get a Quote</h2>
        <ContactForm />
      </section>

      {/* WHATSAPP FLOATING BUTTON
      <a
        href="https://wa.me/918849165907"
        className="whatsAppFloat"
        aria-label="Message on WhatsApp"
      >
        💬
      </a> */}
    </section>
  );
}
