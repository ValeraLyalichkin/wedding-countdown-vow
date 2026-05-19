import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { launchHearts } from "@/lib/hearts";

export const Route = createFileRoute("/thanks")({
  component: Thanks,
  head: () => ({
    meta: [
      { title: "Спасибо! — Наталья и Валерий" },
      { name: "description", content: "Спасибо за ваш ответ" },
    ],
  }),
});

function Thanks() {
  useEffect(() => {
    launchHearts(40);
    const id = setInterval(() => launchHearts(20), 2500);
    return () => clearInterval(id);
  }, []);
  return (
    <main className="min-h-screen bg-forest text-cream flex items-center justify-center px-4 py-20">
      <div className="max-w-xl text-center">
        <p className="font-script text-6xl md:text-7xl mb-6">Спасибо!</p>
        <p className="font-display text-2xl md:text-3xl leading-relaxed">
          Ваш ответ получен.
        </p>
        <p className="mt-6 text-cream/80 leading-relaxed">
          Мы с нетерпением ждём встречи 15 августа 2026 года и очень благодарны, что этот день вы разделите с нами.
        </p>
        <p className="mt-8 font-script text-3xl">С любовью, Валера и Наташа</p>
        <Link
          to="/"
          className="inline-block mt-12 px-8 py-3 bg-cream text-forest font-medium tracking-wide uppercase text-sm rounded-full hover:bg-blush transition-colors"
        >
          На главную
        </Link>
      </div>
    </main>
  );
}
