import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--page-bg)_92%,transparent)] backdrop-blur relative">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <div className="flex items-center gap-3 text-lg font-semibold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-md shadow-blue-500/20">
            ML
          </span>
          <span className="bg-gradient-to-r from-[var(--ink)] to-[var(--accent-2)] bg-clip-text text-transparent font-bold">
            CareerAI
          </span>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--muted)] md:flex">
          <Link className="text-[var(--ink)] transition-colors hover:text-[var(--accent)]" href="/">Home</Link>
          <Link className="transition-colors hover:text-[var(--accent)]" href="/domain">Domain</Link>
          <Link className="transition-colors hover:text-[var(--accent)]" href="/milestones">Milestones</Link>
          <Link className="transition-colors hover:text-[var(--accent)]" href="/documents">Documents</Link>
          <Link className="transition-colors hover:text-[var(--accent)]" href="/presentation">Presentation</Link>
          <Link className="transition-colors hover:text-[var(--accent)]" href="/about">About</Link>
          <Link className="transition-colors hover:text-[var(--accent)]" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}