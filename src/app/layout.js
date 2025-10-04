// Import global styles (works site-wide)
import "../css/app.css";      // renamed from App.module.css → app.css
import "./globals.css";       // for base resets

// Import components
import Header from "../js/Header";
import Footer from "../js/Footer";

// Page metadata
export const metadata = {
  title: "Digital Typist",
  description: "Your Academic Partner for Thesis & Research Support",
};

// Root layout wrapper
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="App">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
