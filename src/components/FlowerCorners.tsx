import tlD from "@/assets/flowers/flower-tl-dark.png";
import trD from "@/assets/flowers/flower-tr-dark.png";
import blD from "@/assets/flowers/flower-bl-dark.png";
import brD from "@/assets/flowers/flower-br-dark.png";
import tlL from "@/assets/flowers/flower-tl-light.png";
import trL from "@/assets/flowers/flower-tr-light.png";
import blL from "@/assets/flowers/flower-bl-light.png";
import brL from "@/assets/flowers/flower-br-light.png";

type Corner = "tl" | "tr" | "bl" | "br" | "ml" | "mr";

type Props = {
  variant?: "dark" | "light";
  corners?: Array<Corner>;
  /** Tailwind size, e.g. "w-64 md:w-[28rem]" */
  size?: string;
  opacity?: number;
};

export function FlowerCorners({
  variant = "dark",
  corners = ["tl", "tr", "bl", "br"],
  size = "w-56 md:w-[26rem]",
  opacity = 0.9,
}: Props) {
  const set = variant === "dark"
    ? { tl: tlD, tr: trD, bl: blD, br: brD }
    : { tl: tlL, tr: trL, bl: blL, br: brL };

  // Position class + outward translate so flowers spill past section edges.
  const positions: Record<Corner, { src: string; pos: string }> = {
    tl: { src: set.tl, pos: "top-0 left-0 -translate-x-1/4 -translate-y-1/4" },
    tr: { src: set.tr, pos: "top-0 right-0 translate-x-1/4 -translate-y-1/4" },
    bl: { src: set.bl, pos: "bottom-0 left-0 -translate-x-1/4 translate-y-1/4" },
    br: { src: set.br, pos: "bottom-0 right-0 translate-x-1/4 translate-y-1/4" },
    ml: { src: set.bl, pos: "top-1/2 left-0 -translate-x-1/3 -translate-y-1/2" },
    mr: { src: set.br, pos: "top-1/2 right-0 translate-x-1/3 -translate-y-1/2" },
  };

  return (
    <>
      {corners.map((c) => (
        <img
          key={c}
          src={positions[c].src}
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute select-none z-0 ${size} ${positions[c].pos}`}
          style={{ opacity }}
        />
      ))}
    </>
  );
}
