import Link from "next/link";

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="container">
        <div className="brand">
          <h1>Digital Typist</h1>
          <p className="tagline">Your Academic Partner for Thesis & Research</p>
        </div>

        <nav className="siteNav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
