import "./globals.css";
import "./css/home.css";
import Header from "./js/Header";
import Footer from "./js/Footer";

import { Inter, Cormorant_Garamond } from "next/font/google";

// ===== FONT CONFIG =====
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-garamond",
});

// ===== METADATA =====
export const metadata = {
  title: "Digital Typist",
  description: "Your Academic Partner for Thesis & Research Support",
};

// ===== ROOT LAYOUT =====
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${garamond.variable}`}>
        <div className="siteWrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
