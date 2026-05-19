import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Reveal } from "../Reveal";
import { launchHearts } from "@/lib/hearts";
import { SketchCorners } from "../SketchCorners";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyOwNISbIm3Pkd-TFLDWd31jJ-fmDmLkn0HP0mh2sT9oNfuRHDznpDp0rRRYsIW000r7A/exec"

const ALCOHOL = ["Белое вино", "Красное вино", "Виски", "Водка", "Самогон"];

export function Rsvp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");
  const [transfer, setTransfer] = useState<"none" | "after" | "">("");
  const [drinks, setDrinks] = useState<string[]>([]);
  const [noAlcohol, setNoAlcohol] = useState(false);
  const [allergy, setAllergy] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const toggleDrink = (d: string) => {
    setDrinks((prev) => prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]);
    if (noAlcohol) setNoAlcohol(false);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || name.trim().length < 2) { setError("Укажите фамилию и имя"); return; }
    if (!attending) { setError("Выберите вариант присутствия"); return; }
    if (attending === "yes" && !transfer) { setError("Укажите, нужен ли трансфер"); return; }

    setSubmitting(true);
    launchHearts(70);

    const drinkLine = noAlcohol ? "Не пью алкоголь" : (drinks.length ? drinks.join(", ") : "—");
    const payload = {
      timestamp: new Date().toISOString(),
      name,
      attending: attending === "yes" ? "Да, буду" : "К сожалению, нет",
      transfer: attending === "yes" ? (transfer === "after" ? "Да, только после торжества" : "Не нужен") : "—",
      drinks: drinkLine,
      allergy: allergy.trim() || "—",
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
    } catch {/* ignore */}

    setTimeout(() => navigate({ to: "/thanks" }), 1400);
  };

  return (
    <section id="rsvp" className="relative overflow-hidden bg-forest text-forest py-20 px-4">
      <SketchCorners opacity={0.4} />
      <Reveal className="relative z-10 max-w-xl mx-auto bg-cream rounded-3xl shadow-2xl p-8 sm:p-12">
        <p className="font-serif text-3xl md:text-4xl text-center mb-10 tracking-wide text-forest">Анкета гостя</p>

        <form onSubmit={onSubmit} className="space-y-8">
          <Field label="Фамилия и имя">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={120}
              className="w-full bg-transparent border-b border-forest/40 py-2 text-forest placeholder:text-[#666] focus:border-forest outline-none"
              placeholder="Иванов Иван"
            />
          </Field>

          <Field label="Сможете ли вы присутствовать?">
            <div className="flex flex-col sm:flex-row gap-3">
              <Choice active={attending === "yes"} onClick={() => setAttending("yes")}>Да, буду</Choice>
              <Choice active={attending === "no"} onClick={() => { setAttending("no"); setTransfer(""); }}>К сожалению, нет</Choice>
            </div>
          </Field>

          {attending === "yes" && (
            <Field label="Потребуется ли трансфер?">
              <div className="flex flex-col sm:flex-row gap-3">
                <Choice active={transfer === "none"} onClick={() => setTransfer("none")}>Не нужен</Choice>
                <Choice active={transfer === "after"} onClick={() => setTransfer("after")}>Да, только после торжества</Choice>
              </div>
              {transfer === "after" && (
                <p className="mt-3 text-sm text-forest/70 italic border-l-2 border-forest/40 pl-3">
                  Трансфер будет организован после завершения торжества для гостей, направляющихся в с. Атемар
                </p>
              )}
            </Field>
          )}

          <Field label="Какой алкоголь вы предпочитаете?">
            <div className="flex flex-col gap-2">
              {ALCOHOL.map((d) => (
                <label key={d} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={drinks.includes(d)}
                    onChange={() => toggleDrink(d)}
                    className="w-5 h-5 accent-blush"
                  />
                  <span className="text-forest/90 group-hover:text-forest">{d}</span>
                </label>
              ))}
              <label className={`flex items-center gap-3 ${drinks.length ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}>
                <input
                  type="checkbox"
                  checked={noAlcohol}
                  disabled={drinks.length > 0}
                  onChange={(e) => setNoAlcohol(e.target.checked)}
                  className="w-5 h-5 accent-blush"
                />
                <span>Не пью алкоголь</span>
              </label>
            </div>
          </Field>

          <Field label="Есть ли у вас аллергия на какие-либо продукты?">
            <textarea
              value={allergy}
              onChange={(e) => setAllergy(e.target.value)}
              maxLength={500}
              rows={1}
              className="w-full bg-transparent border-b border-forest/40 py-2 text-forest placeholder:text-[#666] focus:border-forest outline-none resize-none"
              placeholder="Опишите, если есть"
            />
          </Field>

          {error && <p className="text-blush text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 bg-forest text-cream font-medium uppercase tracking-[0.2em] text-sm rounded-full hover:bg-wine transition-colors disabled:opacity-60"
          >
            {submitting ? "Отправляем..." : "Отправить"}
          </button>
        </form>
      </Reveal>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p
        className="mb-4 text-forest font-semibold text-lg md:text-xl tracking-wide"
        style={{ fontFamily: "'Montserrat', sans-serif", color: "#2F4156" }}
      >
        {label}
      </p>
      {children}
    </div>
  );
}

function Choice({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 py-3 px-5 rounded-full border transition-all text-sm tracking-wide
        ${active ? "bg-forest text-cream border-forest" : "border-forest/50 text-forest hover:border-forest"}`}
    >
      {children}
    </button>
  );
}
