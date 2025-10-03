// components/Footer.jsx
import Link from "next/link";

const socialLinks = [
  { href: "#", label: "X", aria: "X" },
  { href: "#", label: "LinkedIn", aria: "LinkedIn" },
  { href: "#", label: "YouTube", aria: "YouTube" },
  { href: "#", label: "Instagram", aria: "Instagram" },
  { href: "#", label: "GitHub", aria: "GitHub" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-lime-500/40 bg-white/80 backdrop-blur">
      <div className="mx-auto w-[min(92vw,1100px)] px-4 py-8 text-green-400">
        {/* Top row */}
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-3 text-green-400">
              <img src="/logo.svg" alt="ThorneCheck logo" className="h-10 w-auto" />
              <span className="text-xl font-semibold">ThorneCheck</span>
            </Link>
            <p className="text-sm/6 text-green-400/80">
              Build. Launch. Grow. Tools for teams who like momentum.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-2 text-md sm:col-span-2 sm:grid-cols-4">
            <Link href="/pricing" className="hover:text-green-400">Pricing</Link>
            <Link href="/features" className="hover:text-green-400">Features</Link>
            <Link href="/download" className="hover:text-green-400">Download</Link>
            <Link href="/updates" className="hover:text-green-400">Updates</Link>
            <Link href="/about" className="hover:text-green-400">About</Link>
            <Link href="/login" className="hover:text-green-400">Sign in</Link>
            <Link href="/signup" className="hover:text-green-400">Get Started</Link>
            <a href="mailto:hello@example.com" className="hover:text-green-400">Contact</a>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-3 h-px bg-lime-500/30" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-3 text-sm sm:flex-row">
          <p className="text-green-400">© {year} ThorneCheck. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.aria}
                className="hover:text-green-700"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
