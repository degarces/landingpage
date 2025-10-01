// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {Button} from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-3 left-5 right-5 z-50">
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between h-12 px-4 py-3 shadow rounded-lg bg-white text-green-400 ring-2 ring-green-400">
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="text-green-400 flex flex-col gap-1 active:scale-[0.97] transition-transform"
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-green-400"></span>
          <span className="w-6 h-0.5 bg-green-400"></span>
          <span className="w-6 h-0.5 bg-green-400"></span>
        </button>
      </div>

      {/* Desktop nav */}
      <nav
        className="hidden md:flex items-center fixed top-3 left-1/2 -translate-x-1/2
                   w-[min(92vw,550px)] text-green-400 bg-white px-6 py-2 rounded-xl shadow-lg
                  border-2 border-green-400"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Links */}
        <div className="ml-6 flex items-center whitespace-nowrap">
          <div className="flex items-center gap-7">
            <Link href="/pricing"  className="hover:opacity-90">Pricing</Link>
            <Link href="/features" className="hover:opacity-90">Features</Link>
            <Link href="/updates"  className="hover:opacity-90">Updates</Link>
            <Link href="/download" className="hover:opacity-90">Download</Link>
          </div>

          <span className="mx-3">|</span>

          <Link href="/login" className="hover:opacity-90">Sign in</Link>
        </div>
      </nav>

      {/* ---- Mobile Sidebar ---- */}
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-200
                    ${isOpen ? "opacity-100 pointer-events-auto bg-black/45" : "opacity-0 pointer-events-none bg-black/0"}
                    motion-reduce:transition-none`}
      ></button>

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 z-50 h-full w-[min(90vw,420px)]
                    bg-white text-green-400 shadow-xl md:hidden
                    transform transition-transform duration-300 will-change-transform
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                    motion-reduce:transition-none`}
        onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
      >
        {/* Close (top-right) */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 flex flex-col gap-1"
          aria-label="Close menu"
        >
          <span className="w-6 h-0.5 bg-green-400"></span>
          <span className="w-6 h-0.5 bg-green-400"></span>
          <span className="w-6 h-0.5 bg-green-400"></span>
        </button>

        {/* Content */}
        <div className="flex h-full flex-col p-6 pt-16">
          <nav className="text-xl">
            {[
              { href: "/pricing",  label: "Pricing" },
              { href: "/features", label: "Features" },
              { href: "/download", label: "Download" },
              { href: "/login",    label: "Sign in" },
            ].map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block w-full rounded-lg px-4 py-3 transition
                            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                            hover:bg-green-50 motion-reduce:transition-none`}
                style={{ transitionDuration: "250ms", transitionDelay: `${idx * 60}ms` }}
                {...(idx === 0 ? { autoFocus: true } : {})}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div
            className={`mt-4 h-px bg-green-200/60 transition
                        ${isOpen ? "opacity-100" : "opacity-0"} motion-reduce:transition-none`}
            style={{ transitionDuration: "250ms", transitionDelay: "260ms" }}
          />

          <div
            className={`mt-4 transition ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} motion-reduce:transition-none`}
            style={{ transitionDuration: "250ms", transitionDelay: "320ms" }}
          >
            <Button asChild className="w-full text-xl">
              <Link href="/signup" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

