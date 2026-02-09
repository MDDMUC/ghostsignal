import Image from "next/image";

const socialLinks = [
  { href: "https://www.instagram.com/ghostsignal/", label: "Instagram" },
  { href: "https://www.linkedin.com/company/ghostsignal/", label: "LinkedIn" },
  { href: "https://x.com/ghostsignal", label: "X" },
  { href: "https://www.facebook.com/ghostsignal/", label: "Facebook" },
] as const;

function Icon({
  name,
  className,
}: {
  name: "instagram" | "linkedin" | "x" | "facebook";
  className?: string;
}) {
  const cls = className ?? "h-4 w-4";

  if (name === "x") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={cls} fill="currentColor">
        <path d="M18.9 2H22l-6.8 7.8L23 22h-6.7l-5.2-6.8L5 22H2l7.3-8.4L1.7 2H8.5l4.7 6.1L18.9 2Zm-1.2 18h1.7L7.6 3.9H5.8L17.7 20Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={cls} fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 23.5h4V7.98h-4V23.5ZM8.5 7.98h3.8v2.12h.05c.53-1 1.82-2.06 3.75-2.06 4.02 0 4.76 2.65 4.76 6.09v9.37h-4v-8.3c0-1.98-.04-4.53-2.76-4.53-2.76 0-3.18 2.16-3.18 4.39v8.44h-4V7.98Z" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={cls} fill="currentColor">
        <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.6 1.7-1.6H16.7V4.8c-.8-.1-1.8-.2-3-.2-3 0-5 1.8-5 5v1.4H6v3h2.7v8h4.8Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cls} fill="currentColor">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.7-2.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_20%,rgba(255,255,255,0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_80%,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-10">
        <div className="flex justify-center">
          <Image
            src="/images/brand/morsecodewhite.png"
            alt=""
            width={960}
            height={32}
            className="h-4 w-auto opacity-80"
          />
        </div>
        <div className="mt-3 flex justify-center">
          <Image
            src="/images/brand/morsecodewhite.png"
            alt=""
            width={960}
            height={32}
            className="h-4 w-auto opacity-80"
          />
        </div>

        <div className="mt-10 flex items-center justify-center gap-7">
          {socialLinks.map((link) => {
            const iconName =
              link.label === "Instagram"
                ? "instagram"
                : link.label === "LinkedIn"
                  ? "linkedin"
                  : link.label === "Facebook"
                    ? "facebook"
                    : "x";

            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-white/70 transition hover:text-white"
                aria-label={link.label}
              >
                <Icon name={iconName} className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 text-xs text-white/55 sm:flex-row">
          <p>© {year} Ghost Signal</p>
          <p className="text-white/45">Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
