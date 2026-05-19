import { SketchCorners } from "../SketchCorners";

function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 80"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* left swirl branch */}
      <path d="M30 40 C 90 40, 140 40, 200 40" />
      <path d="M60 40 C 80 28, 110 28, 130 40 C 120 36, 100 36, 95 42" />
      <path d="M150 40 C 170 30, 190 32, 205 42" />
      <path d="M120 40 C 130 50, 150 52, 170 46" />
      {/* left leaves */}
      <path d="M75 40 C 70 32, 60 30, 55 34 C 60 38, 70 40, 75 40 Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M175 40 C 180 32, 192 30, 198 34 C 192 38, 182 40, 175 40 Z" fill="currentColor" fillOpacity="0.18" />

      {/* right swirl branch (mirror) */}
      <path d="M570 40 C 510 40, 460 40, 400 40" />
      <path d="M540 40 C 520 28, 490 28, 470 40 C 480 36, 500 36, 505 42" />
      <path d="M450 40 C 430 30, 410 32, 395 42" />
      <path d="M480 40 C 470 50, 450 52, 430 46" />
      <path d="M525 40 C 530 32, 540 30, 545 34 C 540 38, 530 40, 525 40 Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M425 40 C 420 32, 408 30, 402 34 C 408 38, 418 40, 425 40 Z" fill="currentColor" fillOpacity="0.18" />

      {/* center medallion: diamond + floral */}
      <g transform="translate(300 40)">
        <path d="M0 -18 L 12 0 L 0 18 L -12 0 Z" />
        <circle cx="0" cy="0" r="3.2" fill="currentColor" />
        <path d="M0 -14 C -5 -10, -5 -4, 0 0 C 5 -4, 5 -10, 0 -14 Z" fill="currentColor" fillOpacity="0.25" />
        <path d="M0 14 C -5 10, -5 4, 0 0 C 5 4, 5 10, 0 14 Z" fill="currentColor" fillOpacity="0.25" />
        <path d="M-22 0 C -16 -6, -14 -6, -12 0" />
        <path d="M22 0 C 16 -6, 14 -6, 12 0" />
        <circle cx="-26" cy="0" r="1.4" fill="currentColor" />
        <circle cx="26" cy="0" r="1.4" fill="currentColor" />
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-cream flex flex-col items-center justify-center px-6 pt-6 pb-8 sm:py-20">
      <SketchCorners trSize="w-44 sm:w-60 md:w-80" blSize="w-48 sm:w-64 md:w-96" opacity={0.9} />

      <div className="relative z-10 max-w-md w-full text-center mx-auto flex flex-col items-center">
        <p className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.25em] uppercase text-wine mb-6 leading-tight">
          Приглашение
          <br />
          на свадьбу
        </p>

        <Ornament className="w-full max-w-sm text-wine mb-4" />

        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-wine leading-[0.9]">
          Наталья
        </h1>
        <p className="font-script text-5xl sm:text-6xl md:text-7xl text-wine leading-[1.1] my-1">
          и
        </p>
        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl text-wine leading-[0.9]">
          Валерий
        </h1>

        <Ornament className="w-full max-w-sm text-wine mt-4" />

        <div className="flex items-center gap-3 mt-6 text-wine">
          <span className="h-px w-10 sm:w-14 bg-current opacity-70" />
          <p className="font-num text-2xl md:text-3xl tracking-[0.2em]">15.08.26</p>
          <span className="h-px w-10 sm:w-14 bg-current opacity-70" />
        </div>
        <p className="mt-3 text-wine text-xl" aria-hidden="true">♥</p>
      </div>
    </section>
  );
}
