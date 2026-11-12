import type { Product } from "@/lib/schemas";

// Чтобы подключить фото: добавьте поле `image: "https://..."` товару
// или укажите HERO_IMAGE. Без фото карточки показывают тёмный градиент с углями.
export const HERO_IMAGE: string | null = null;

export const rawProducts: Product[] = [
  {
    id: "pork-neck",
    name: "Шашлык из свиной шеи",
    description: "Маринад на луке и минералке, мангал на берёзовых углях. Сочный, с румяной корочкой.",
    price: 420,
    weight: "300 г",
    category: "pork",
    badge: "Хит",
  },
  {
    id: "chicken-thigh",
    name: "Куриные бёдра",
    description: "Бедро без кости в йогуртовом маринаде с паприкой. Нежное и недорогое.",
    price: 320,
    weight: "300 г",
    category: "chicken",
  },
  {
    id: "lamb-rack",
    name: "Баранина на рёбрах",
    description: "Молодая баранина, только соль, лук и зира. Классика без компромиссов.",
    price: 590,
    weight: "300 г",
    category: "lamb",
    badge: "Выбор шефа",
  },
  {
    id: "beef-tender",
    name: "Говяжья мякоть",
    description: "Вымоченная в кефире говядина — мягкая, ароматная, без жёсткости.",
    price: 520,
    weight: "300 г",
    category: "beef",
  },
  {
    id: "lula",
    name: "Люля-кебаб",
    description: "Рубленая баранина с курдючным салом и зеленью. Подаём с луком и лавашем.",
    price: 380,
    weight: "2 шт.",
    category: "lamb",
  },
  {
    id: "ribs",
    name: "Свиные рёбрышки",
    description: "Томлёные в маринаде 12 часов, дожаривались на углях до карамельной корочки.",
    price: 460,
    weight: "350 г",
    category: "pork",
  },
  {
    id: "veg-set",
    name: "Овощи на мангале",
    description: "Баклажан, перец, помидоры и шампиньоны. Лёгкий гарнир к любому шашлыку.",
    price: 240,
    weight: "250 г",
    category: "veg",
  },
];
