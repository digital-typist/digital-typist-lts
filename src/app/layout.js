import "./globals.css";
import "./css/home.css";
import Header from "./js/Header";
import Footer from "./js/Footer";

import localFont from "next/font/local";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Digital Typist",
  description: "Your Academic Partner for Thesis & Research Support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="siteWrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
