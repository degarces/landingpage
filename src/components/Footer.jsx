// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-lime-500/40 bg-white/80 backdrop-blur">
      <div className="mx-auto w-[min(92vw,1100px)] px-4 py-8 text-green-400">
        {/* Top row */}
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">YourBrand</h3>
            <p className="text-sm/6 text-green-400/80">
              Build. Launch. Grow. A tiny tagline lives here.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-2 text-md sm:col-span-2 sm:grid-cols-4">
            <Link href="/pricing"  className="hover:text-green-400">Pricing</Link>
            <Link href="/features" className="hover:text-green-400">Features</Link>
            <Link href="/download" className="hover:text-green-400">Download</Link>
            <Link href="/updates"  className="hover:text-green-400">Updates</Link>
            <Link href="/about"    className="hover:text-green-400">About</Link>
            <Link href="/login"    className="hover:text-green-400">Sign in</Link>
            <Link href="/signup"   className="hover:text-green-400">Get Started</Link>
            <a  href="mailto:hello@example.com" className="hover:text-green-400">Contact</a>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-3 h-px bg-lime-500/30" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-3 text-sm sm:flex-row">
          <p className="text-green-400">© {year} YourBrand. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-green-700">𝕏</a>
            <a href="#" aria-label="GitHub"  className="hover:text-green-700">GitHub</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-green-700">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
