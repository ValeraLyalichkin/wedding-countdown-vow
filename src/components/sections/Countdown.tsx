import { useEffect, useState } from "react";
import { Reveal } from "../Reveal";
import { SketchCorners } from "../SketchCorners";

const TARGET = new Date("2026-08-15T15:00:00+03:00").getTime();

function diff() {
  const ms = Math.max(0, TARGET - Date.now());
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const [t, setT] = useState(diff());
  useEffect(() => {
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);
  const items: [string, number][] = [
    ["дней", t.days],
    ["часов", t.hours],
    ["минут", t.minutes],
    ["секунд", t.seconds],
  ];
  return (
    <section className="relative overflow-hidden bg-cream py-20 px-4">
      <SketchCorners opacity={0.75} />
      <Reveal className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="font-script text-5xl md:text-6xl text-wine">До встречи через...</p>
        <div className="mt-10 grid grid-cols-4 gap-3 md:gap-6">
          {items.map(([label, val]) => (
            <div key={label} className="bg-forest text-cream rounded-2xl p-4 md:p-6 shadow-lg">
              <div className="font-num text-3xl md:text-6xl tabular-nums leading-none">
                {String(val).padStart(2, "0")}
              </div>
              <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-cream/70">
                {label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 font-script text-3xl md:text-4xl text-wine">
          С любовью, Валера и Наташа
        </p>
      </Reveal>
    </section>
  );
}
