import floralFrame from "@/assets/floral-frame.png";

export function Hero() {
  const blue = "#2B4F9E";

  return (
    <section
      className="relative overflow-hidden min-h-screen bg-cream flex flex-col items-center justify-center px-6 py-12 sm:py-20"
      style={{ color: blue }}
    >
      {/* Floral botanical frame */}
      <img
        src={floralFrame}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover sm:object-contain object-center"
      />

      <div className="relative z-10 max-w-md w-full text-center mx-auto flex flex-col items-center justify-between min-h-[80vh] py-8">
        <p
          className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.25em] uppercase leading-tight"
          style={{ color: blue }}
        >
          Приглашение
          <br />
          на свадьбу
        </p>

        <div className="flex flex-col items-center w-full">
          <span
            className="block w-32 sm:w-40 h-px mb-6"
            style={{ backgroundColor: blue }}
          />

          <h1
            className="font-script text-6xl sm:text-7xl md:text-8xl leading-[0.9]"
            style={{ color: blue }}
          >
            Наталья
          </h1>
          <p
            className="font-script text-5xl sm:text-6xl md:text-7xl leading-[1.1] my-1"
            style={{ color: blue }}
          >
            и
          </p>
          <h1
            className="font-script text-6xl sm:text-7xl md:text-8xl leading-[0.9]"
            style={{ color: blue }}
          >
            Валерий
          </h1>

          <span
            className="block w-32 sm:w-40 h-px mt-6"
            style={{ backgroundColor: blue }}
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3" style={{ color: blue }}>
            <span className="h-px w-10 sm:w-14" style={{ backgroundColor: blue, opacity: 0.7 }} />
            <p className="font-num text-2xl md:text-3xl tracking-[0.2em]">15.08.26</p>
            <span className="h-px w-10 sm:w-14" style={{ backgroundColor: blue, opacity: 0.7 }} />
          </div>
          <p className="mt-4 text-3xl" aria-hidden="true" style={{ color: blue }}>♥</p>
        </div>
      </div>
    </section>
  );
}
