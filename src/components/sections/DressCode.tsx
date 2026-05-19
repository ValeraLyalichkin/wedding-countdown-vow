import { Reveal } from "../Reveal";

const colors = [
  { hex: "#2F4156", name: "Navy" },
  { hex: "#5A7493", name: "Twilight" },
  { hex: "#a5c1d6", name: "Mist" },
  { hex: "#d6baa5", name: "Champagne" },
  { hex: "#93795a", name: "Bronze" },
  { hex: "#56442f", name: "Coffee" },
];

export function DressCode() {
  return (
    <section className="relative bg-cream py-20 px-4">
      <Reveal className="relative z-10 max-w-6xl mx-auto text-center">
        <p className="font-serif text-4xl md:text-5xl text-wine">Дресс-код</p>
        <p className="mt-6 max-w-xl mx-auto text-ink/75 leading-relaxed">
          Мы будем искренне рады, если в своих образах вы учтёте цветовую гамму нашего праздника
        </p>

        <div className="mt-10 flex flex-row flex-nowrap justify-center items-center gap-2 sm:gap-3 max-w-xl mx-auto">
          {colors.map((c) => (
            <div key={c.hex} className="flex flex-col items-center flex-1 min-w-0">
              <div
                className="w-full aspect-square rounded-lg shadow-md border border-ink/10"
                style={{ background: c.hex }}
              />
              <p className="mt-2 text-[10px] sm:text-xs text-ink/80 tracking-wide">{c.name}</p>
              <p className="mt-0.5 text-[9px] sm:text-[10px] text-ink/50 font-mono">{c.hex}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-xl mx-auto text-ink/75 leading-relaxed">
          Для своего удобства также можете взять с собой сменную обувь. Главное, чтобы вы себя чувствовали комфортно и уютно на нашем торжестве!
        </p>
      </Reveal>
    </section>
  );
}
