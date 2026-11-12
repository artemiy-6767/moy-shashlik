import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_IMAGE } from "@/data/products";

const stats = [
  { value: "от 240 ₽", label: "порция на углях" },
  { value: "40 мин", label: "доставка по городу" },
  { value: "100%", label: "свежее мясо, без заморозки" },
] as const;

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {HERO_IMAGE ? (
        <img src={HERO_IMAGE} alt="" className="absolute inset-0 -z-20 size-full object-cover opacity-40" />
      ) : null}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_20%,rgba(217,119,43,0.22),transparent_55%),linear-gradient(to_bottom,transparent,#0b0b0c)]"
      />

      <div className="mx-auto max-w-6xl px-5 pb-24 pt-28 md:pb-32 md:pt-40">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-ember-soft">Мангал · Угли · Огонь</p>
        <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.05] md:text-7xl">
          Шашлык Шашлычок
          <span className="block text-ember-soft">Шашлычочек</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Сочный шашлык на берёзовых углях по честной цене. Готовим из свежего мяса, маринуем по-домашнему,
          привозим горячим.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg">
            <a href="#catalog">
              Смотреть меню <ArrowDown className="size-4" aria-hidden />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contacts">Оформить заказ</a>
          </Button>
        </div>

        <dl className="mt-20 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-serif text-3xl font-semibold">{s.value}</dt>
              <dd className="mt-1 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
