'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

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
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--page-bg)_92%,transparent)] backdrop-blur relative">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <div className="flex items-center gap-3 text-lg font-semibold tracking-tight">
          {/* Logo Image */}
          <div className="h-10 w-10 rounded-xl overflow-hidden shadow-md shadow-blue-500/20">
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
        </div>

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
      </div>
    </header>
  );
}