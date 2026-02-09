type Props = {
  variant?: "white" | "black";
  className?: string;
  height?: number;
};

export function SectionShape({
  variant = "white",
  className,
  height = 110,
}: Props) {
  const fill = variant === "black" ? "#0b0d12" : "#ffffff";

  return (
    <div
      className={[
        "pointer-events-none absolute left-0 top-0 w-full overflow-hidden",
        className ?? "",
      ].join(" ")}
      style={{ height }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M0,0H1440V60C1080,120,360,120,0,60Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
