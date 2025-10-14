import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerContact">
        <div>
          📞{" "}
          <a href="tel:+919957155567" className="inline">
            +31 99571 55567
          </a>
          <a href="tel:+519620456047" className="inline">
            +51 96204 56047
          </a>
        </div>
        <div>
          📧{" "}
          <a href="mailto:digicomclass@gmail.com">
            digicomclass@gmail.com
          </a>
        </div>
      </div>
      <div className="copyright">© Digital Typist. All rights reserved.</div>
    </footer>
  );
}
