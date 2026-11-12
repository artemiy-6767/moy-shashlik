import { z } from "zod";

export const categorySchema = z.enum(["pork", "chicken", "lamb", "beef", "veg"]);
export type Category = z.infer<typeof categorySchema>;

export const categoryLabels: Record<Category | "all", string> = {
  all: "Всё",
  pork: "Свинина",
  chicken: "Курица",
  lamb: "Баранина",
  beef: "Говядина",
  veg: "Овощи",
};

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  weight: z.string(),
  category: categorySchema,
  badge: z.string().optional(),
  image: z.string().url().optional(),
});
export type Product = z.infer<typeof productSchema>;

export const orderSchema = z.object({
  name: z.string().trim().min(2, "Введите имя"),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s()-]{10,18}$/, "Введите корректный номер телефона"),
  comment: z.string().trim().max(300, "Не более 300 символов"),
});
export type OrderInput = z.infer<typeof orderSchema>;
