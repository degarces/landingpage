import "./globals.css";
import Navbar from "../components/Navbar";  

export const metadata = { title: "My Next App" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
