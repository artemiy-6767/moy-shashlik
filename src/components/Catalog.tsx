import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { fetchProducts } from "@/lib/api";
import { categoryLabels, type Category } from "@/lib/schemas";
import { cn } from "@/lib/utils";

type Filter = Category | "all";
const filters = Object.keys(categoryLabels) as Filter[];

export function Catalog() {
  const [filter, setFilter] = useState<Filter>("all");
  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const items = data?.filter((p) => filter === "all" || p.category === filter) ?? [];

  return (
    <section id="catalog" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-ember-soft">Меню</p>
          <h2 className="font-serif text-4xl font-semibold md:text-5xl">С мангала</h2>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Категории">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                filter === f
                  ? "border-ember bg-ember text-background"
                  : "border-border text-muted hover:text-foreground",
              )}
            >
              {categoryLabels[f]}
            </button>
          ))}
        </div>
      </div>

      {isPending ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="h-80 animate-pulse rounded-2xl border border-border bg-card" />
          ))}
        </div>
      ) : isError ? (
        <div className="rounded-2xl border border-border p-8 text-center text-muted">
          Не удалось загрузить меню.{" "}
          <button type="button" className="text-ember-soft underline" onClick={() => void refetch()}>
            Повторить
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
