import { createHashRouter } from "react-router";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";

// Hash-роутер работает на GitHub Pages под любым адресом репозитория
// и не требует настройки 404-страницы.
export const router = createHashRouter([
  { path: "/", element: <HomePage /> },
  { path: "*", element: <NotFoundPage /> },
]);
