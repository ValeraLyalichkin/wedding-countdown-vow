import divider from "@/assets/divider.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-cream flex flex-col items-center justify-center px-6 py-12 sm:py-20 text-ink">
      <div className="relative z-10 max-w-md w-full text-center mx-auto flex flex-col items-center">
        <p className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.25em] uppercase leading-tight">
          Приглашение
          <br />
          на свадьбу
        </p>

        <img
          src={divider}
          alt=""
          aria-hidden="true"
          className="w-64 sm:w-80 h-auto mt-20 sm:mt-24 mb-6 select-none"
        />

        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl leading-[0.9]">
          Наталья
        </h1>
        <p className="font-script text-5xl sm:text-6xl md:text-7xl leading-[1.1] my-1">
          и
        </p>
        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl leading-[0.9]">
          Валерий
        </h1>

        <img
          src={divider}
          alt=""
          aria-hidden="true"
          className="w-64 sm:w-80 h-auto mt-6 mb-20 sm:mb-24 select-none"
        />

        <div className="flex items-center gap-3">
          <span className="h-px w-10 sm:w-14 bg-ink/70" />
          <p className="font-num text-2xl md:text-3xl tracking-[0.2em]">15.08.26</p>
          <span className="h-px w-10 sm:w-14 bg-ink/70" />
        </div>
        <p className="mt-4 text-3xl" aria-hidden="true">♥</p>
      </div>
    </section>
  );
}
