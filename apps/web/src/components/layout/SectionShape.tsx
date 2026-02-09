type Props = {
  variant?: "white" | "black";
  className?: string;
};

export function SectionShape({ variant = "white", className }: Props) {
  const bg = variant === "black" ? "bg-black" : "bg-white";
  return (
    <div
      className={[
        "pointer-events-none absolute left-0 top-0 h-16 w-full",
        bg,
        "[clip-path:polygon(0_0,100%_0,100%_70%,50%_100%,0_70%)]",
        className ?? "",
      ].join(" ")}
      aria-hidden
    />
  );
}

