import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--panel)] relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--accent)]/5 pointer-events-none" />
      <div className="mx-auto w-full max-w-6xl px-6 py-16 relative">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl overflow-hidden shadow-md shadow-blue-500/20 bg-white">
                <img
                  src="/logo.png"
                  alt="Mentora Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="bg-gradient-to-r from-[var(--ink)] to-[var(--accent-2)] bg-clip-text text-transparent font-bold text-xl">
                Mentora
              </span>
            </div>
            <p className="max-w-sm text-sm text-[var(--muted)] leading-relaxed">
              Intelligent career path recommendations using machine learning. 
              Empowering students to find their true potential through data-driven academic and behavioral analysis.
            </p>
          </div>
          <div className="space-y-4 text-sm">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--ink)]">
              Quick Links
            </div>
            <div className="grid grid-cols-1 gap-3">
              <Link className="text-[var(--muted)] transition-colors hover:text-[var(--accent)] flex items-center gap-2" href="#home">
                <span className="h-1 w-1 rounded-full bg-[var(--accent)]/50" /> Home
              </Link>
              <Link className="text-[var(--muted)] transition-colors hover:text-[var(--accent)] flex items-center gap-2" href="#features">
                <span className="h-1 w-1 rounded-full bg-[var(--accent)]/50" /> Features
              </Link>
              <Link className="text-[var(--muted)] transition-colors hover:text-[var(--accent)] flex items-center gap-2" href="#about">
                <span className="h-1 w-1 rounded-full bg-[var(--accent)]/50" /> About
              </Link>
            </div>
          </div>
          <div className="space-y-4 text-sm">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--ink)]">
              Contact
            </div>
            <p className="text-[var(--muted)] leading-relaxed">Ready to transform your career path? Get in touch with our expert team.</p>
            <Link
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 shadow-lg shadow-[var(--accent)]/20"
              href="#contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-16 border-t border-[var(--border)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <div>© {new Date().getFullYear()} ML Career Guidance System. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[var(--ink)] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--ink)] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
