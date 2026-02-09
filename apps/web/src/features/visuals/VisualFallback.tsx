type Props = {
  className?: string;
};

export function VisualFallback({ className }: Props) {
  return (
    <div
      className={
        className ??
        "h-full w-full bg-[radial-gradient(80%_60%_at_60%_30%,rgba(124,58,237,0.35),transparent_60%),radial-gradient(60%_50%_at_40%_60%,rgba(6,182,212,0.25),transparent_55%)]"
      }
    />
  );
}

