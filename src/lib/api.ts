import { rawProducts } from "@/data/products";
import { orderSchema, productSchema, type OrderInput, type Product } from "@/lib/schemas";

const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export async function fetchProducts(): Promise<Product[]> {
  await delay(350);
  return productSchema.array().parse(rawProducts);
}

// Заглушка отправки заявки — замените на реальный запрос к вашему API.
export async function submitOrder(input: OrderInput): Promise<void> {
  const data = orderSchema.parse(input);
  await delay(600);
  console.info("order submitted", data);
}
