import Image from "next/image";

type Props = {
  className?: string;
  orientation?: "horizontal" | "vertical";
};

export function RainbowBars({ className, orientation = "horizontal" }: Props) {
  const base =
    orientation === "vertical"
      ? "relative h-full w-10 overflow-hidden"
      : "relative h-3 w-full overflow-hidden";

  const imageClass =
    orientation === "vertical"
      ? "object-cover rotate-90 scale-[2]"
      : "object-cover";

  return (
    <div className={className ? `${base} ${className}` : base} aria-hidden>
      <Image
        src="/images/squarespace/group1.png"
        alt=""
        fill
        sizes={orientation === "vertical" ? "40px" : "100vw"}
        className={imageClass}
        priority={false}
      />
    </div>
  );
}

