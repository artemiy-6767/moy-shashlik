import { Beef, Flame, Truck } from "lucide-react";

const features = [
  { icon: Beef, title: "Свежее мясо", text: "Берём у проверенных фермеров, маринуем в день приготовления." },
  { icon: Flame, title: "Настоящий мангал", text: "Берёзовые угли и никакой духовки — только живой огонь." },
  { icon: Truck, title: "Горячим до двери", text: "Доставляем в термосумках, чтобы шашлык приехал сочным." },
] as const;

export function About() {
  return (
    <section id="about" className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-24 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-ember-soft">О компании</p>
          <h2 className="font-serif text-4xl font-semibold md:text-5xl">Просто хороший шашлык</h2>
          <p className="mt-6 leading-relaxed text-muted">
            Мы начинали с одного мангала и семейного рецепта маринада. Сегодня готовим на сотни порций в день, но
            подход остался прежним: хорошее мясо, правильные угли и честная цена, без накруток и лишних слов.
          </p>
        </div>

        <ul className="grid gap-6">
          {features.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-5 rounded-2xl border border-border bg-background p-6">
              <Icon className="mt-1 size-6 shrink-0 text-ember" aria-hidden />
              <div>
                <h3 className="font-serif text-xl font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
