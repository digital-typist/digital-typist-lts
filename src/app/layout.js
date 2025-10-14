import "./globals.css";
import "./css/home.css";
import Header from "./js/Header";
import Footer from "./js/Footer";

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
