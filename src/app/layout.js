// app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "YourBrand",
  description: "Your landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Fixed navbar already handled inside Navbar */}
        <Navbar />
        <main className="flex-1 pt-20"> {/* keep your existing pt-20 offset */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
