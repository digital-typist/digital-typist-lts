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
          <a> || </a>
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

        {/* === Social Links Section === */}
        <div className="socialLinks">
          <span className="followLabel">Follow us:</span>

          {/* === INSTAGRAM === */}
          <a
            href="https://www.instagram.com/digitaltypist?igsh=MW55dG82ZXc1NWNkcA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src="/instagram.svg" alt="Instagram" className="socialIcon" />
          </a>

          {/* === YOUTUBE === */}
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <img src="/youtube.svg" alt="YouTube" className="socialIcon" />
          </a>

          {/* === LINKEDIN === */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/linkedin.svg" alt="LinkedIn" className="socialIcon" />
          </a>
        </div>
      </div>

      <div className="copyright">
        © Digital Typist – From Script to Screen: Expert Academic Documentation.
        All rights reserved.
      </div>
    </footer>
  );
}
