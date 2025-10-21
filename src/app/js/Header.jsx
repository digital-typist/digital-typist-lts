import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="container">
        <div className="topRow">
          <div className="logo">
            <Image
              src="/logo.png"
              alt="Digital Typist Logo"
              width={38}
              height={38}
            />
          </div>

          <div className="titleArea">
            <h1>Digital Typist</h1>
          </div>

          <div className="menuIcon">
            <button aria-label="Menu">☰</button>
          </div>
        </div>

        <p className="tagline">Your Academic Partner for Thesis & Research</p>

        <nav className="siteNav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
