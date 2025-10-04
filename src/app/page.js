export default function HomePage() {
  return (
    <section className="hero">
      <h2>Welcome to Digital Typist 🚀</h2>
      <p>Professional typing, editing & formatting for academic and research work.</p>
      <div className="heroCta">
        <a href="/contact" className="btn">Contact Us</a>
        <a
          href="https://wa.me/918849165907?text=Hello%20Digital%20Typist!"
          target="_blank"
          rel="noopener noreferrer"
          className="btn secondary"
        >
          Message on WhatsApp 📩
        </a>
      </div>
    </section>
  );
}
