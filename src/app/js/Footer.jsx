export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerContact">
        <a href="tel:+918849165907">📞 Call: +91 88491 65907</a>
        <span>|</span>
        <a href="mailto:digicomclass@gmail.com">📧 Email: digicomclass@gmail.com</a>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Digital Typist. All rights reserved.
      </div>
    </footer>
  );
}
