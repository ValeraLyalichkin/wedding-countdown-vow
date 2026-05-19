import { SketchCorners } from "../SketchCorners";

function OrnamentTop({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 90"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* central filigree crown */}
      <g transform="translate(300 40)">
        {/* top fleur */}
        <path d="M0 -28 C -3 -22, -3 -18, 0 -14 C 3 -18, 3 -22, 0 -28 Z" />
        <circle cx="0" cy="-30" r="1.6" />
        {/* main body diamond */}
        <path d="M0 -14 L 8 -2 L 0 10 L -8 -2 Z" />
        <circle cx="0" cy="-2" r="2" fill="var(--cream)" />
        {/* side scrolls - left */}
        <path d="M-8 -2 C -22 -8, -34 -6, -42 2 C -36 4, -28 4, -22 0 C -28 6, -34 10, -32 14 C -26 12, -20 8, -16 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M-42 2 C -52 -2, -62 0, -68 6 C -62 8, -56 8, -50 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <circle cx="-70" cy="6" r="1.6" />
        {/* side scrolls - right (mirror) */}
        <path d="M8 -2 C 22 -8, 34 -6, 42 2 C 36 4, 28 4, 22 0 C 28 6, 34 10, 32 14 C 26 12, 20 8, 16 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M42 2 C 52 -2, 62 0, 68 6 C 62 8, 56 8, 50 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <circle cx="70" cy="6" r="1.6" />
        {/* tiny accent leaves */}
        <path d="M-14 8 C -18 12, -22 12, -24 10 C -22 8, -18 6, -14 8 Z" />
        <path d="M14 8 C 18 12, 22 12, 24 10 C 22 8, 18 6, 14 8 Z" />
      </g>
      {/* horizontal rule under the ornament */}
      <line x1="20" y1="70" x2="580" y2="70" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

function OrnamentBottom({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 90"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* horizontal rule above the ornament (mirrored) */}
      <line x1="20" y1="20" x2="580" y2="20" stroke="currentColor" strokeWidth="1.1" />
      <g transform="translate(300 50) scale(1 -1)">
        <path d="M0 -28 C -3 -22, -3 -18, 0 -14 C 3 -18, 3 -22, 0 -28 Z" />
        <circle cx="0" cy="-30" r="1.6" />
        <path d="M0 -14 L 8 -2 L 0 10 L -8 -2 Z" />
        <circle cx="0" cy="-2" r="2" fill="var(--cream)" />
        <path d="M-8 -2 C -22 -8, -34 -6, -42 2 C -36 4, -28 4, -22 0 C -28 6, -34 10, -32 14 C -26 12, -20 8, -16 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M-42 2 C -52 -2, -62 0, -68 6 C -62 8, -56 8, -50 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <circle cx="-70" cy="6" r="1.6" />
        <path d="M8 -2 C 22 -8, 34 -6, 42 2 C 36 4, 28 4, 22 0 C 28 6, 34 10, 32 14 C 26 12, 20 8, 16 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M42 2 C 52 -2, 62 0, 68 6 C 62 8, 56 8, 50 4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <circle cx="70" cy="6" r="1.6" />
        <path d="M-14 8 C -18 12, -22 12, -24 10 C -22 8, -18 6, -14 8 Z" />
        <path d="M14 8 C 18 12, 22 12, 24 10 C 22 8, 18 6, 14 8 Z" />
      </g>
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-cream flex flex-col items-center justify-center px-6 pt-10 pb-10 sm:py-20">
      <SketchCorners trSize="w-44 sm:w-60 md:w-80" blSize="w-48 sm:w-64 md:w-96" opacity={0.9} />

      <div className="relative z-10 max-w-md w-full text-center mx-auto flex flex-col items-center">
        <p className="font-serif text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-wine mb-4 leading-snug">
          Приглашение
          <br />
          на свадьбу
        </p>

        <OrnamentTop className="w-full max-w-sm text-wine" />

        <h1 className="font-script text-7xl sm:text-8xl md:text-[7rem] text-wine leading-[0.95] mt-2">
          Наталья
        </h1>
        <p className="font-script text-5xl sm:text-6xl md:text-7xl text-wine leading-[1.1] my-2">
          и
        </p>
        <h1 className="font-script text-7xl sm:text-8xl md:text-[7rem] text-wine leading-[0.95]">
          Валерий
        </h1>

        <OrnamentBottom className="w-full max-w-sm text-wine mt-2" />

        <div className="flex items-center gap-3 mt-4 text-wine">
          <span className="h-px w-10 sm:w-14 bg-current opacity-70" />
          <p className="font-num text-2xl md:text-3xl tracking-[0.25em]">15.08.26</p>
          <span className="h-px w-10 sm:w-14 bg-current opacity-70" />
        </div>
        <p className="mt-3 text-wine text-sm" aria-hidden="true">♥</p>
      </div>
    </section>
  );
}
