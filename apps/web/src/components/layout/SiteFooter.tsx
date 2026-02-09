export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-10 text-sm text-muted">
        <p>© {year} Ghost Signal</p>
        <p>Built with Next.js + WebGL</p>
      </div>
    </footer>
  );
}

