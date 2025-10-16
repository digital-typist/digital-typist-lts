// src/app/process/page.js
import "../css/processPage.css";

export const metadata = {
  title: "Process | Digital Typist – How We Work",
  description:
    "Step-by-step overview of how Digital Typist assists scholars and institutions — from file submission to final delivery.",
};

export default function ProcessPage() {
  return (
    <section className="processPage">
      <h1 className="pageTitle">⚙️ How It Works</h1>

      {/* tagline  */}
      <h2 className="pageTagline">
        Secure process, timely delivery, and guaranteed confidentiality.
      </h2>

      {/* description  */}
      <p className="pageSubtitle">
        From your first message to final submission — our workflow ensures
        clarity, quality, and confidentiality at every stage.
      </p>

      <div className="stepsWrapper">
        <div className="stepCard">
          <span className="stepNum">1</span>
          <p>
            Submit your file or request via WhatsApp, email, or upload form.
          </p>
        </div>

        <div className="stepCard">
          <span className="stepNum">2</span>
          <p>Receive a transparent quote and delivery timeline.</p>
        </div>

        <div className="stepCard">
          <span className="stepNum">3</span>
          <p>
            Our experts begin formatting, writing, or editing your document.
          </p>
        </div>

        <div className="stepCard">
          <span className="stepNum">4</span>
          <p>Review your draft and request revisions if needed.</p>
        </div>

        <div className="stepCard">
          <span className="stepNum">5</span>
          <p>Receive final Word & PDF copies — fully ready for submission.</p>
        </div>
      </div>
    </section>
  );
}
