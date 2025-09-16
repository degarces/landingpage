"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock page scroll when sidebar is open
  useEffect(() => {
    const html = document.documentElement;
    if (isOpen) {
      html.classList.add("overflow-hidden");
    } else {
      html.classList.remove("overflow-hidden");
    }
    return () => html.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <header className="fixed top-3 left-5 right-5 z-50">
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between h-12 px-4 py-4 shadow rounded-lg ring-2 ring-green-400 ring-offset-0">
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="flex flex-col gap-1"
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-green-400 rounded"></span>
          <span className="w-6 h-0.5 bg-green-400 rounded"></span>
          <span className="w-6 h-0.5 bg-green-400 rounded"></span>
        </button>
      </div>

      {/* Desktop */}
      <nav className="hidden md:flex items-center fixed top-3 left-1/2 -translate-x-1/2
        w-[min(92vw,550px)] bg-white text-green-400 px-6 py-2.5 rounded-xl shadow-lg backdrop-blur-md z-50
        border-2 border-green-400">

        {/* Logo (left) */}
        <Link href="/" className="flex items-center shrink-0">
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* Links */}
        <div className="ml-6 flex items-center whitespace-nowrap">
          {/* Left group keeps its own spacing */}
          <div className="flex items-center gap-7">
            <Link href="/pricing"  className="hover:text-green-300">Pricing</Link>
            <Link href="/features" className="hover:text-green-300">Features</Link>
            <Link href="/download" className="hover:text-green-300">Updates</Link>
            <Link href="/download" className="hover:text-green-300">Download</Link>
          </div>

          {/* Slim spacing around the bar */}
          <span className="mx-4">|</span>

          {/* Right item */}
          <Link href="/login" className="hover:text-green-300">Sign in</Link>
        </div>
      </nav>



      {/* Mobile sidebar */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="text-xl fixed top-0 right-0 w-full h-full bg-white text-green-400 shadow-lg flex flex-col p-5 py-10 z-50"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 flex flex-col gap-1"
            aria-label="Close menu"
          >
            <span className="w-6 h-0.5 bg-green-300"></span>
            <span className="w-6 h-0.5 bg-green-300"></span>
            <span className="w-6 h-0.5 bg-green-300"></span>
          </button>

          <Link href="/pricing" onClick={() => setIsOpen(false)} className="w-full px-4 py-3 hover:bg-gray-100">Pricing</Link>
          <Link href="/features" onClick={() => setIsOpen(false)} className="w-full px-4 py-3 hover:bg-gray-100">Features</Link>
          <Link href="/download" onClick={() => setIsOpen(false)} className="w-full px-4 py-3 hover:bg-gray-100">Download</Link>
          <Link href="/login" onClick={() => setIsOpen(false)} className="w-full px-4 py-3 hover:bg-gray-100">Log in</Link>

          <span className="w-full h-0.5 bg-green-300 rounded"></span>

          <Button asChild className="text-xl mt-4 w-full px-4">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
