import { Clock, MapPin, Phone } from "lucide-react";
import { OrderForm } from "@/components/OrderForm";

// Контакты — заглушки, замените на реальные.
const contacts = [
  { icon: Phone, label: "Телефон", value: "+7 (000) 000-00-00" },
  { icon: MapPin, label: "Адрес", value: "г. Екатеринбург, ул. Примерная, 1" },
  { icon: Clock, label: "Часы работы", value: "Ежедневно, 11:00–23:00" },
] as const;

export function Footer() {
  return (
    <footer id="contacts" className="mx-auto max-w-6xl px-5 pt-24">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-ember-soft">Контакты</p>
          <h2 className="font-serif text-4xl font-semibold md:text-5xl">Закажите шашлык</h2>
          <ul className="mt-10 grid gap-6">
            {contacts.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-4">
                <Icon className="mt-0.5 size-5 text-ember" aria-hidden />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
                  <p className="mt-1">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <OrderForm />
      </div>

      <div className="mt-24 flex flex-col justify-between gap-2 border-t border-border py-8 text-sm text-muted sm:flex-row">
        <span>© {new Date().getFullYear()} Шашлык Шашлычок Шашлычочек</span>
        <span>Сделано с огнём</span>
      </div>
    </footer>
  );
}
