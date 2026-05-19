import { Reveal } from "../Reveal";
import hotel from "@/assets/hotel.webp";

export function Venue() {
  const address = "Республика Мордовия, г. Саранск, ул. Республиканская, д. 103";
  const yandexUrl = "https://yandex.ru/maps/org/azimut_otel_saransk/1175404353/?ll=45.170436%2C54.173622&z=16";

  return (
    <section className="relative bg-forest text-cream py-20 px-4">
      <Reveal className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="font-serif text-4xl md:text-5xl mb-2">Место проведения</p>
        <h3 className="font-display text-3xl md:text-4xl mb-2">AZIMUT Отель</h3>
        <p className="text-cream/80 mb-8 max-w-md mx-auto">{address}</p>

        <div className="rounded-2xl overflow-hidden shadow-2xl border border-cream/20">
          <img
            src={hotel}
            alt="AZIMUT Отель Саранск"
            className="w-full h-72 md:h-[28rem] object-cover"
            loading="lazy"
          />
        </div>

        <a
          href={yandexUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-block mt-8 px-8 py-3 bg-cream text-forest font-medium tracking-wide uppercase text-sm rounded-full hover:bg-blush transition-colors"
        >
          Построить маршрут
        </a>
      </Reveal>
    </section>
  );
}
