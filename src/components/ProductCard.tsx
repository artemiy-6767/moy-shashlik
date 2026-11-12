import { Flame } from "lucide-react";
import type { Product } from "@/lib/schemas";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-ember/60">
      <div className="relative aspect-[4/3] overflow-hidden bg-[radial-gradient(ellipse_at_30%_20%,rgba(217,119,43,0.28),transparent_60%),linear-gradient(135deg,#1a1411,#0f0e0e)]">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center" aria-hidden>
            <Flame className="size-10 text-ember/50" />
          </div>
        )}
        {product.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 text-xs text-ember-soft backdrop-blur">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl font-semibold">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{product.description}</p>
        <div className="mt-5 flex items-baseline justify-between border-t border-border pt-4">
          <span className="text-lg font-semibold">{formatPrice(product.price)}</span>
          <span className="text-xs text-muted">{product.weight}</span>
        </div>
      </div>
    </article>
  );
}
