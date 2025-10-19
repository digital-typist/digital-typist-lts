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
import "./css/cta.css";

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

            <div className="cta dual">
              <a
                href="https://wa.me/918849165907?text=Hello%20Digital%20Typist%2C%20I%20want%20to%20discuss%20my%20project"
                className="ctaLink"
                // href="mailto:digitalthesis.typist@gmail.com?subject=Free%20Quote%20Request"
              >
                💬 <strong>Get a Free Quote</strong>
              </a>
              {/* <span className="divider">|</span>
              <a
                href="https://wa.me/918849165907?text=Hello%20Digital%20Typist%2C%20I%20want%20to%20discuss%20my%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="ctaLink"
              >
                💬 <strong>Message on WhatsApp</strong>
              </a> */}
            </div>
          </div>

          {/* Right Side: Hero Image */}
          <div className="heroImageWrapper">
            <div className="heroImageBox">
              <Image
                src="/business_front.jpg"
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
        <h3>
          From script to screen — we transform research into readable, reliable,
          and ready-to-submit documents
        </h3>
        <div className="grid">
          <div className="card">
            <div className="icon">🧑‍🎓</div>

            {/* ==== PhD Thesis ==== */}
            <h3>PhD Thesis</h3>
            <p>
              UGC & University-compliant layout, TOC, margins, references —
              final Word & PDF delivery.
            </p>
          </div>

          {/* ==== Proposal ==== */}
          <div className="card">
            <div className="icon">📄</div>
            <h3>Proposal</h3>
            <p>
              Professional proposal preparation with accurate structure,
              citations & clean formatting.
            </p>
          </div>

          {/* ==== Research Paper ==== */}
          <div className="card">
            <div className="icon">📑</div>
            <h3>Research Paper</h3>
            <p>
              Academic paper formatting and proofreading for journal submission
              readiness.
            </p>
          </div>

          {/* ==== Book Writing ==== */}
          <div className="card">
            <div className="icon">✍️</div>
            <h3>Book Writing</h3>
            <p>
              Manuscript typing, editing & layout setup for authors and
              researchers.
            </p>
          </div>

          {/* ==== Transcription ==== */}
          <div className="card">
            <div className="icon">🎧</div>
            <h3>Transcription</h3>
            <p>
              Accurate conversion of audio interviews and lectures into clean,
              editable text.
            </p>
          </div>

          {/* ==== Manuscript Digitization ==== */}
          <div className="card">
            <div className="icon">🪶</div>
            <h3>Manuscript Digitization</h3>
            <p>
              Convert handwritten or scanned manuscripts into fully typed,
              editable documents.
            </p>
          </div>

          {/* ==== Proofreading & Editing ==== */}
          <div className="card">
            <div className="icon">✍️</div>
            <h3>Proofreading & Editing</h3>
            <p>
              Grammar, clarity, and citation style (APA / MLA / Vancouver)
              review.
            </p>
          </div>

          {/* ==== Formatting ==== */}
          <div className="card">
            <div className="icon">🧾</div>
            <h3>Formatting</h3>
            <p>
              Consistent layout for margins, fonts, page numbers, and references
              — perfectly styled.
            </p>
          </div>

          {/* ==== Data Entry ==== */}
          <div className="card">
            <div className="icon">💻</div>
            <h3>Data Entry</h3>
            <p>
              Fast and reliable academic or research data entry with attention
              to detail.
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
            <li>10+ Years of Experience in Academic Documentation</li>
            <li>Multilingual Expertise — Sanskrit, Hindi, Gujarati, English</li>
            <li>100% confidentiality</li>
            <li>UGC & university formatting expertise</li>
            <li>On-time delivery & free revision</li>
            <li>Fast Turnaround with Free Revisions</li>
          </ul>

          <div className="whyCards">
            {/* <div className="whyCard">
              <div className="icon">📝</div>
              <div>
                <h3>Transcription & Data Entry</h3>
                <p>Auto to text — examination & research data support.</p>
              </div>
            </div> */}

            <a
              href="https://wa.me/918849165907?text=Hello%20Digital%20Typist%2C%20I%20want%20to%20discuss%20my%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="whyCardLink"
            >
              <div className="whyCard">
                <div className="icon">💬</div>
                <div>
                  <h3>Get a Quote via WhatsApp</h3>
                  <p>Quick, ready-to-share consultation and pricing details.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials">
        <h2>What Clients Say</h2>
        <blockquote className="testi">
          <p>
            Digital Typist made my PhD thesis submission completely stress-free.
            Professional, timely, and reliable.
          </p>
          <footer>— Dr. Meena Joshi, Gujarat Vidyapith</footer>
        </blockquote>

        <br />

        <blockquote className="testi">
          <p>
            They formatted and edited my research paper perfectly for journal
            submission.
          </p>
          <footer>— Prof. N. Sharma, Delhi University</footer>
        </blockquote>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="finalCta">
        <h2>Get In Touch Today</h2>
        <div className="ctaInner">
          <p className="ctaLine1">
            🎓{" "}
            <strong>
              Partner with professionals who understand academic precision.
            </strong>
          </p>
          <p className="ctaLine2">
            📞 <em>Get your project started today.</em>
          </p>
          <a
            href="https://wa.me/918849165907?text=Hello%20Digital%20Typist%2C%20I%20want%20to%20start%20my%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            Message Us on WhatsApp
          </a>
        </div>
      </section>

      {/* ===== CONTACT FORM ===== */}
      {/* <section className="contact">
        <h2>Get a Quote</h2>
        <form action="https://wa.me/918849165907" method="get" target="_blank">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
           <input type="text" name="university" placeholder="University" /> 
          <input type="tel" name="phone" placeholder="Phone" required />
          <textarea name="message" placeholder="Message" rows="3"></textarea>
          <button type="submit">WhatsApp Us</button>
        </form>
      </section> */}
    </section>
  );
}
