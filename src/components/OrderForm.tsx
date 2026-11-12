import { useMutation } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { submitOrder } from "@/lib/api";
import { orderSchema } from "@/lib/schemas";

type Errors = Partial<Record<"name" | "phone" | "comment", string>>;

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-ember";

export function OrderForm() {
  const [errors, setErrors] = useState<Errors>({});
  const mutation = useMutation({ mutationFn: submitOrder });

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const result = orderSchema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      comment: fd.get("comment") ?? "",
    });

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0];
        if ((key === "name" || key === "phone" || key === "comment") && !next[key]) {
          next[key] = issue.message;
        }
      }
      setErrors(next);
      return;
    }

    setErrors({});
    mutation.mutate(result.data, { onSuccess: () => form.reset() });
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-muted">Имя</label>
        <input id="name" name="name" autoComplete="name" className={fieldClass} placeholder="Как к вам обращаться" />
        {errors.name ? <p className="mt-1 text-xs text-red-400">{errors.name}</p> : null}
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm text-muted">Телефон</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="+7 900 000-00-00" />
        {errors.phone ? <p className="mt-1 text-xs text-red-400">{errors.phone}</p> : null}
      </div>
      <div>
        <label htmlFor="comment" className="mb-1.5 block text-sm text-muted">Комментарий</label>
        <textarea id="comment" name="comment" rows={3} className={fieldClass} placeholder="Что заказать, адрес, время" />
        {errors.comment ? <p className="mt-1 text-xs text-red-400">{errors.comment}</p> : null}
      </div>

      <Button type="submit" size="lg" disabled={mutation.isPending}>
        {mutation.isPending ? "Отправляем…" : "Отправить заявку"}
      </Button>

      {mutation.isSuccess ? (
        <p role="status" className="text-sm text-ember-soft">Спасибо! Мы скоро перезвоним.</p>
      ) : null}
      {mutation.isError ? (
        <p role="alert" className="text-sm text-red-400">Не получилось отправить. Попробуйте ещё раз.</p>
      ) : null}
    </form>
  );
}
