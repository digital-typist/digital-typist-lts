export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerContact">
        <a href="tel:+918849165907">📞 Call: +91 88491 65907</a>
        <span>|</span>
        <a href="mailto:digitaltypistim@gmail.com">📧 Email: digitaltypistim@gmail.com</a>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Digital Typist. All rights reserved.
      </div>
    </footer>
  );
}
