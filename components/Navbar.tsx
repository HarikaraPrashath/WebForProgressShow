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

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 z-40 flex flex-col md:hidden bg-black backdrop-blur-none
    transition-transform duration-500 ease-in-out
    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
  `}
          style={{ backgroundColor: '#000' }}
        >
          <div className="flex flex-col items-center justify-center flex-1 gap-8 px-6 pt-20">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-2xl font-bold transition-all ${isActive ? 'text-[var(--accent)] scale-110' : 'text-white/80 hover:text-white'
                    }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="p-10 border-t border-white/10 bg-white/5">
            <p className="text-center text-sm text-white/40">
              © {new Date().getFullYear()} Mentora Career Guidance
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}