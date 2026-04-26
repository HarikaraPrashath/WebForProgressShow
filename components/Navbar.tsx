'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Domain', href: '/domain' },
    { name: 'Milestones', href: '/milestones' },
    { name: 'Documents', href: '/documents' },
    { name: 'Presentation', href: '/presentation' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--page-bg)_92%,transparent)] backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <Link href="/" className={`flex items-center gap-3 text-lg font-semibold tracking-tight relative z-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {/* Logo Image */}
          <div className="h-10 w-10 rounded-xl overflow-hidden shadow-md shadow-blue-500/20 bg-white">
            <img
              src="/logo.png"
              alt="Mentora Logo"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Brand Name */}
          <span className="bg-gradient-to-r from-[var(--ink)] to-[var(--accent-2)] bg-clip-text text-transparent font-bold text-xl">
            Mentora
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--muted)] md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-[var(--accent)] ${isActive ? 'text-[var(--accent)] font-semibold border-b-2 border-[var(--accent)] pb-1' : 'text-[var(--muted)]'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white border border-black transition-all duration-300 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 top-full z-40 w-full md:hidden">
            <div className="mx-4 mt-4 rounded-2xl border border-[var(--border)] bg-[var(--panel)] shadow-xl">
              <div className="flex flex-col py-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-5 py-3 text-base font-semibold transition-colors ${
                        isActive
                          ? 'text-[var(--accent)]'
                          : 'text-[var(--ink)] hover:text-[var(--accent)]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}