import { Reveal } from "../Reveal";
import couple from "@/assets/couple.png";

export function Invitation() {
  return (
    <section className="relative bg-forest text-cream py-20 px-4">
      <Reveal className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl mb-8 text-cream">
          Дорогие родные и близкие!
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-cream tracking-wide font-light">
          С особой радостью и волнением приглашаем Вас разделить с нами самый важный день в нашей жизни — день, с которого начинается наша семья
        </p>
        <div className="mt-10 flex justify-center">
          <img
            src={couple}
            alt="Наталья и Валерий"
            className="w-[55vw] max-w-[300px] sm:w-[68vw] sm:max-w-[340px] aspect-[3/4.4] object-cover rounded-2xl"
          />
        </div>
      </Reveal>
    </section>
  );
}
