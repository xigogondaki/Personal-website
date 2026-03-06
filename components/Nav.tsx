"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
  { href: "/case-studies", label: "Work" },
  { href: "/blog", label: "Writing" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="page-grid py-6 flex items-center justify-between sticky top-0 z-50 bg-paper/90 backdrop-blur-sm">
        {/* Logotype */}
        <Link href="/" className="t-caption hover:text-ink transition-colors">
          Your Name
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`t-caption transition-colors ${
                pathname === link.href
                  ? "text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden t-caption text-muted hover:text-ink transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-paper flex flex-col">
          <div className="page-grid py-6 flex justify-between items-center">
            <span className="t-caption">Your Name</span>
            <button
              className="t-caption text-muted"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <nav className="page-grid flex flex-col gap-6 mt-16">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="t-headline text-ink/40 hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
