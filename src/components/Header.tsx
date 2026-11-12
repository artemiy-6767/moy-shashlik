import { Flame, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#catalog", label: "Меню" },
  { href: "#about", label: "О нас" },
  { href: "#contacts", label: "Контакты" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-serif text-lg font-semibold tracking-wide">
          <Flame className="size-5 text-ember" aria-hidden />
          Шашлычок
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href="#contacts">Заказать</a>
          </Button>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-border px-5 py-5 md:hidden" aria-label="Мобильная навигация">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
