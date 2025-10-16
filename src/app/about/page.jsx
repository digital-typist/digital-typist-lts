import "../css/aboutUs.css";

export const metadata = {
  title: "About Us | Digital Typist",
  description:
    "Know more about Digital Typist — founded by Pranav Raval, offering professional academic documentation and research support services.",
};

export default function AboutPage() {
  return (
    <section className="aboutSection">
      {/* ===== HEADER ===== */}
      <h1>About Us</h1>
      <h2>
        Where <strong>academic tradition</strong> meets{" "}
        <strong>digital innovation</strong>.
      </h2>

      {/* ===== WHO WE ARE CARD ===== */}
      <div className="aboutCard fullCard">
        <div className="icon">📚</div>
        <h3>Who We Are</h3>
        <p>
          <strong>Digital Typist</strong> is a professional academic documentation
          and research support agency founded by{" "}
          <strong>Pranav Raval</strong>, dedicated to assisting scholars, authors,
          and institutions with complete research documentation services.
        </p>
        <p>
          With over a decade of experience, we combine linguistic expertise with
          digital precision.
        </p>
      </div>

      {/* ===== GRID: MISSION + VISION ===== */}
      <div className="aboutGrid">
        <div className="aboutCard">
          <div className="icon">🎯</div>
          <h3>Mission</h3>
          <p>
            To support and simplify academic writing through accurate, ethical,
            and multilingual documentation.
          </p>
        </div>

        <div className="aboutCard">
          <div className="icon">🌏</div>
          <h3>Vision</h3>
          <p>
            To preserve Indian academic heritage while modernizing research and
            publication workflows.
          </p>
        </div>
      </div>

      {/* ===== QUOTE ===== */}
      <blockquote className="aboutQuote">
        “Dedicated to quality, integrity, and precision in academic documentation.”
      </blockquote>
    </section>
  );
}
