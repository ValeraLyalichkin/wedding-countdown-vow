import { Reveal } from "../Reveal";
import progGlasses from "@/assets/prog-glasses.png";
import progRings from "@/assets/prog-rings.png";
import progPlate from "@/assets/prog-plate.png";
import progCake from "@/assets/prog-cake.png";
import progCar from "@/assets/prog-car.png";

const items = [
  { time: "14:30", title: "Сбор гостей", desc: "Бокалы игристого и small talk перед главным событием вечера", img: progGlasses },
  { time: "15:00", title: "Церемония", desc: "Соберёмся, чтобы сказать «Да!» и разделить этот важный момент. Сразу после церемонии вас ждёт фотосессия", img: progRings },
  { time: "16:00", title: "Начало банкета", desc: "Время веселья, танцев, поздравлений и вкусной еды", img: progPlate },
  { time: "20:00", title: "Торт", desc: "Время для сладенького", img: progCake },
  { time: "21:00", title: "Завершение вечера", desc: "Этот вечер закончится морем объятий и счастливых воспоминаний", img: progCar },
] as const;

export function Programme() {
  return (
    <section className="relative bg-cream py-20 px-6 sm:px-10">
      <Reveal className="max-w-3xl mx-auto text-center mb-10">
        <p className="font-serif text-4xl md:text-5xl text-wine">Программа дня</p>
      </Reveal>

      <div className="max-w-2xl mx-auto">
        <div className="space-y-12">
          {items.map((it, i) => (
            <Reveal key={it.time} delay={i * 80}>
              <div className="flex items-center gap-5 sm:gap-7">
                {/* Icon column */}
                <div className="flex-shrink-0 w-28 sm:w-32 flex justify-center">
                  <img
                    src={it.img}
                    alt=""
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 text-left">
                  <p className="font-num text-2xl text-ink leading-none">{it.time}</p>
                  <h3 className="font-display text-xl mt-2 text-ink">{it.title}</h3>
                  <p className="text-sm text-ink/65 leading-relaxed mt-1">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
