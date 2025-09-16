import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      {/* Hero */}
      <main className="row-start-2 px-8 sm:px-20 py-16 flex flex-col gap-8 items-center sm:items-start">
        
        <h1 className="text-green-400 text-4xl sm:text-5xl font-extrabold tracking-tight">
          Welcome to ....
        </h1>
        <p className="text-green-400 text-lg text-gray-600">
          Doing things and stuff cuz yuhr.
        </p>

        <div className="flex gap-3 flex-col sm:flex-row">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center h-12 px-5 rounded-md bg-green-400 text-white hover:opacity-90"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="text-green-400 bg-gray-100 inline-flex items-center justify-center h-12 px-5 rounded-md hover:bg-gray-200"
          >
            About
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 py-6 text-center text-sm text-gray-500">
        <span>© {new Date().getFullYear()} Your Name</span>
      </footer>
    </div>
  );
}
