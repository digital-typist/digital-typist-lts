// src/app/page.js
import Image from "next/image";
import ContactForm from "./js/ContactForm";

import "./css/hero.css";
import "./css/home.css";
import "./css/services.css";
import "./css/how.css";
import "./css/why.css";
import "./css/testimonials.css";
import "./css/contact.css";

export const metadata = {
  title: "Digital Typist | Thesis Typing & Formatting Services India",
  description:
    "Professional typing, formatting & proofreading for PhD / M.Phil scholars. Sanskrit · Gujarati · Hindi · English.",
};

export default function HomePage() {
  return (
    <section className="homeContainer">
      {/* ===== HERO SECTION ===== */}
      <header className="hero">
        <div className="heroInner">
          {/* Left Side: Text Content */}
          <div className="heroText">
            <h1 className="title">
              Complete Academic & Research Support — Trusted by Scholars,
              Universities, and Institutions
            </h1>

            <p className="subtitle">
              From PhD theses to government digitization projects, Digital
              Typist provides professional, multilingual, and UGC-compliant
              documentation services in Sanskrit, Hindi, Gujarati, and English.
            </p>

            <div className="cta">
              <a
                href="https://wa.me/918849165907?text=Hello%20Digital%20Typist%2C%20I%20need%20help%20with%20my%20thesis"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Side: Hero Image */}
          <div className="heroImageWrapper">
            <div className="heroImageBox">
              <Image
                src="/card_front.jpg"
                alt="Digital Typist promotional card"
                width={420}
                height={300}
                className="heroImage"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="grid">
          <div className="card">
            <div className="icon">🧑‍🎓</div>
            <h3>PhD Thesis</h3>
            <p>
              UGC & University-compliant layout, TOC, margins, references —
              final Word & PDF delivery.
            </p>
          </div>

          <div className="card">
            <div className="icon">✍️</div>
            <h3>Proofreading & Editing</h3>
            <p>
              Grammar, clarity, and citation style (APA / MLA / Vancouver)
              review.
            </p>
          </div>

          <div className="card">
            <div className="icon">📄</div>
            <h3>Proposal</h3>
            <p>
              Professional proposal preparation with accurate structure,
              citations & clean formatting.
            </p>
          </div>

          <div className="card">
            <div className="icon">💻</div>
            <h3>Data Entry</h3>
            <p>
              Fast and reliable academic or research data entry with attention
              to detail.
            </p>
          </div>

          <div className="card">
            <div className="icon">📑</div>
            <h3>Research Paper</h3>
            <p>
              Academic paper formatting and proofreading for journal submission
              readiness.
            </p>
          </div>

          <div className="card">
            <div className="icon">🧾</div>
            <h3>Formatting</h3>
            <p>
              Consistent layout for margins, fonts, page numbers, and references
              — perfectly styled.
            </p>
          </div>

          <div className="card">
            <div className="icon">✍️</div>
            <h3>Book Writing</h3>
            <p>
              Manuscript typing, editing & layout setup for authors and
              researchers.
            </p>
          </div>

          <div className="card">
            <div className="icon">🎧</div>
            <h3>Transcription</h3>
            <p>
              Accurate conversion of audio interviews and lectures into clean,
              editable text.
            </p>
          </div>

          <div className="card">
            <div className="icon">🪶</div>
            <h3>Manuscript Digitization</h3>
            <p>
              Convert handwritten or scanned manuscripts into fully typed,
              editable documents.
            </p>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="process" className="how">
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

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why">
        <h2>Why Choose Digital Typist</h2>
        <div className="whyContent">
          <ul className="usps">
            <li>
              Multilingual support (Sanskrit · Gujarati · Hindi · English)
            </li>
            <li>UGC & university formatting expertise</li>
            <li>100% confidentiality</li>
            <li>On-time delivery & free revision</li>
          </ul>

          <div className="whyCards">
            <div className="whyCard">
              <div className="icon">📝</div>
              <div>
                <h3>Transcription & Data Entry</h3>
                <p>Auto to text — examination & research data support.</p>
              </div>
            </div>

            <div className="whyCard">
              <div className="icon">💬</div>
              <div>
                <h3>Get a Quote via WhatsApp</h3>
                <p>Quick, ready-to-share consultation and pricing details.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials">
        <h2>What Clients Say</h2>
        <blockquote className="testi">
          <p>
            Perfect formatting for my PhD thesis — saved me valuable time during
            submission.
          </p>
          <footer>— K. Patel, Gujarat University</footer>
        </blockquote>
      </section>

      {/* ===== CONTACT FORM ===== */}
      <section className="contact">
        <h2>Get a Quote</h2>
        <form action="https://wa.me/918849165907" method="get" target="_blank">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          {/* <input type="text" name="university" placeholder="University" /> */}
          <input type="tel" name="phone" placeholder="Phone" required />
          <textarea name="message" placeholder="Message" rows="3"></textarea>
          <button type="submit">WhatsApp Us</button>
        </form>
      </section>
    </section>
  );
}
