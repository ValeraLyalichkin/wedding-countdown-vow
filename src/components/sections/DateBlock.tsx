import { Reveal } from "../Reveal";
import { SketchCorners } from "../SketchCorners";

export function DateBlock() {
  const days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  // 15 Aug 2026 is a Saturday
  const dates = [10, 11, 12, 13, 14, 15, 16];
  return (
    <section className="relative overflow-hidden bg-cream py-24 px-4">
      <SketchCorners opacity={0.7} />
      <Reveal className="relative z-10 max-w-xl mx-auto text-center">
        <h2 className="font-display text-5xl md:text-6xl text-wine mb-8 tracking-wide">Август</h2>
        <div className="border-t border-b border-ink/30 py-6">
          <div className="grid grid-cols-7 gap-2 md:gap-4 text-sm md:text-base text-ink/70 mb-4 uppercase tracking-wider">
            {days.map((d) => <div key={d}>{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-2 md:gap-4 text-xl md:text-2xl text-ink font-num">
            {dates.map((n) => (
              <div key={n} className="relative h-12 flex items-center justify-center">
                {n === 15 ? (
                  <span className="relative inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28">
                    <svg viewBox="0 0 32 32" className="absolute inset-0 w-full h-full text-wine fill-current">
                      <path d="M16 28 C 6 20, 2 12, 8 7 C 12 4, 15 7, 16 10 C 17 7, 20 4, 24 7 C 30 12, 26 20, 16 28 Z" />
                    </svg>
                    <span className="relative text-cream font-medium">{n}</span>
                  </span>
                ) : (
                  <span>{n}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
