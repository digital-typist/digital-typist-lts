import "./../css/servicesPage.css";

export const metadata = {
  title: "Our Services | Digital Typist",
  description:
    "Explore all academic documentation services — PhD thesis typing, formatting, editing, transcription, and more.",
};

export default function ServicesPage() {
  return (
    <section className="servicesPage">
      <h1 className="pageTitle">Our Services</h1>

      {/* ===== PHD THESIS ===== */}
      <div className="serviceBlock">
        <h2>PhD Thesis</h2>
        <p>
          We assist research scholars in preparing, typing, formatting, and
          polishing PhD and MPhil theses. Our work aligns with UGC and
          university guidelines, ensuring your document is accurate, elegant,
          and ready for submission.
        </p>
        <ul>
          <li>Chapter structuring and formatting</li>
          <li>Typing in multiple languages</li>
          <li>Grammar and style enhancement</li>
          <li>Page setup, citations, and references</li>
        </ul>
        <em className="tagline">Upload your thesis to get a detailed quote.</em>
      </div>

      {/* ===== PROPOSAL ===== */}
      <div className="serviceBlock">
        <h2>Proposal</h2>
        <p>
          Get professional support for writing, structuring, and formatting your
          PhD or MPhil research proposal. We focus on clarity, presentation, and
          academic tone so your proposal stands out for approval.
        </p>
        <ul>
          <li>Topic framing and methodology setup</li>
          <li>Formatting and reference organization</li>
          <li>Grammar and tone editing</li>
        </ul>
        <em className="tagline">
          Build the perfect foundation for your research.
        </em>
      </div>

      {/* ===== RESEARCH PAPER ===== */}
      <div className="serviceBlock">
        <h2>Research Paper</h2>
        <p>
          We prepare, edit, and format research papers for national and
          international journals.
        </p>
        <ul>
          <li>Academic writing and editing</li>
          <li>APA / MLA / Chicago citation formatting</li>
          <li>Plagiarism, grammar, and clarity review</li>
        </ul>
        <em className="tagline">
          Get your paper submission-ready and publication-worthy.
        </em>
      </div>

      {/* ===== FORMATTING ===== */}
      <div className="serviceBlock">
        <h2>Formatting</h2>
        <p>
          We handle every aspect of academic formatting: UGC layouts, page
          structures, numbering, and consistency.
        </p>
        <ul>
          <li>Margins, spacing, and alignment</li>
          <li>Page numbering and TOC setup</li>
          <li>References, tables, and charts formatting</li>
        </ul>
        <em className="tagline">
          Formatting that meets academic and professional precision.
        </em>
      </div>

      {/* ===== BOOK WRITING ===== */}
      <div className="serviceBlock">
        <h2>Book Writing</h2>
        <p>
          Helping authors, professors, and researchers convert their manuscripts
          into polished, publication-ready books.
        </p>
        <ul>
          <li>Typing and content editing</li>
          <li>Page design and layout</li>
          <li>Digital formatting</li>
        </ul>
        <em className="tagline">
          From your handwritten notes to a complete book.
        </em>
      </div>

      {/* ===== TRANSCRIPTION ===== */}
      <div className="serviceBlock">
        <h2>Transcription</h2>
        <p>
          We accurately transcribe your recordings — lectures, interviews,
          conferences — into clean, proofread text.
        </p>
        <ul>
          <li>Audio / video to text conversion</li>
          <li>Proofread transcripts</li>
          <li>Formatted Word or PDF delivery</li>
        </ul>
        <em className="tagline">Every word, perfectly documented.</em>
      </div>

      {/* ===== PROOFREADING ===== */}
      <div className="serviceBlock">
        <h2>Proofreading & Editing</h2>
        <p>Final refinement for your academic or literary documents.</p>
        <ul>
          <li>Grammar and language correction</li>
          <li>Academic tone and clarity adjustments</li>
          <li>Style consistency and formatting review</li>
        </ul>
        <em className="tagline">Perfect your final draft before submission.</em>
      </div>

      {/* ===== DATA ENTRY ===== */}
      <div className="serviceBlock">
        <h2>Data Entry</h2>
        <p>
          We digitize and organize academic or institutional data accurately and
          securely.
        </p>
        <ul>
          <li>Conversion of handwritten or scanned materials</li>
          <li>Structured entry in Word or Excel</li>
          <li>Verification for data integrity</li>
        </ul>
        <em className="tagline">
          Clean, accurate, and ready-to-use digital records.
        </em>
      </div>

      {/* ===== MANUSCRIPT DIGITIZATION ===== */}
      <div className="serviceBlock">
        <h2>Manuscript Digitization</h2>
        <p>
          Digitizing and preserving rare or historic manuscripts for libraries,
          universities, and government archives.
        </p>
        <ul>
          <li>Manual typing and transcription</li>
          <li>Unicode conversion for old scripts</li>
          <li>Digital formatting and indexing</li>
        </ul>
        <em className="tagline">Preserving heritage through technology.</em>
      </div>
    </section>
  );
}
