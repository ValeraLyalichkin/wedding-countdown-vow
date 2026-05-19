import { SketchCorners } from "../SketchCorners";
import ornament from "@/assets/ornament.png";

export function Hero() {
  const maskBase = {
    WebkitMaskImage: `url(${ornament})`,
    maskImage: `url(${ornament})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "100% 200%",
    maskSize: "100% 200%",
    backgroundColor: "var(--wine)",
    aspectRatio: "600 / 150",
  } as React.CSSProperties;

  return (
    <section className="relative overflow-hidden min-h-screen bg-cream flex flex-col items-center justify-center px-6 pt-8 pb-10 sm:py-20">
      <SketchCorners trSize="w-44 sm:w-60 md:w-80" blSize="w-48 sm:w-64 md:w-96" opacity={0.9} />

      <div className="relative z-10 max-w-md w-full text-center mx-auto flex flex-col items-center">
        <p className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.25em] uppercase text-wine mb-6 leading-tight">
          Приглашение
          <br />
          на свадьбу
        </p>

        {/* Top half of the ornament — recolored via CSS mask, transparent background */}
        <div
          aria-hidden="true"
          className="w-full max-w-sm"
          style={{
            ...maskBase,
            WebkitMaskPosition: "top",
            maskPosition: "top",
            
            marginBottom: "-2.5rem",
          }}
        />

        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-wine leading-[0.9]">
          Наталья
        </h1>
        <p className="font-script text-5xl sm:text-6xl md:text-7xl text-wine leading-[1.1] my-1">
          и
        </p>
        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-wine leading-[0.9]">
          Валерий
        </h1>

        {/* Bottom half of the ornament */}
        <div
          aria-hidden="true"
          className="w-full max-w-sm"
          style={{
            ...maskBase,
            WebkitMaskPosition: "bottom",
            maskPosition: "bottom",
            
            marginTop: "-2.5rem",
          }}
        />

        <div className="flex items-center gap-3 mt-4 text-wine">
          <span className="h-px w-10 sm:w-14 bg-current opacity-70" />
          <p className="font-num text-2xl md:text-3xl tracking-[0.2em]">15.08.26</p>
          <span className="h-px w-10 sm:w-14 bg-current opacity-70" />
        </div>
        <p className="mt-4 text-wine text-3xl" aria-hidden="true">♥</p>
      </div>
    </section>
  );
}
