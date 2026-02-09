export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-10 text-sm text-white/70">
        <p>© {year} Ghost Signal</p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  );
}
