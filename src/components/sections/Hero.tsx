import { SketchCorners } from "../SketchCorners";
import ornament from "@/assets/ornament.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-cream flex flex-col items-center justify-center px-6 pt-6 pb-8 sm:py-20">
      <SketchCorners trSize="w-44 sm:w-60 md:w-80" blSize="w-48 sm:w-64 md:w-96" opacity={0.9} />

      <div className="relative z-10 max-w-md w-full text-center mx-auto flex flex-col items-center">
        <p className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.25em] uppercase text-wine mb-10 sm:mb-14 leading-tight">
          Приглашение
          <br />
          на свадьбу
        </p>

        {/* Top ornament — top half of the reference image */}
        <img
          src={ornament}
          alt=""
          aria-hidden="true"
          className="w-full max-w-sm h-auto"
          style={{ clipPath: "inset(0 0 50% 0)", marginBottom: "-22%" }}
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

        {/* Bottom ornament — bottom half of the reference image */}
        <img
          src={ornament}
          alt=""
          aria-hidden="true"
          className="w-full max-w-sm h-auto"
          style={{ clipPath: "inset(50% 0 0 0)", marginTop: "-22%" }}
        />

        <div className="flex items-center gap-3 mt-10 sm:mt-12 text-wine">
          <span className="h-px w-10 sm:w-14 bg-current opacity-70" />
          <p className="font-num text-2xl md:text-3xl tracking-[0.2em]">15.08.26</p>
          <span className="h-px w-10 sm:w-14 bg-current opacity-70" />
        </div>
        <p className="mt-6 sm:mt-8 text-wine text-xl" aria-hidden="true">♥</p>
      </div>
    </section>
  );
}
