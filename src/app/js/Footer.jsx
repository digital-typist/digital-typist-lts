import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerContact">
        <div>
          📞{" "}
          <a href="tel:+918849165907" className="inline">
            +918849165907
          </a>
          <a href="tel:+919924345007" className="inline">
             +919924345007
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
