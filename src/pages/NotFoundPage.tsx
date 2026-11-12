import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-5 text-center">
      <h1 className="font-serif text-6xl font-semibold">404</h1>
      <p className="text-muted">Такой страницы нет — возможно, шашлык уже съели.</p>
      <Button asChild>
        <Link to="/">На главную</Link>
      </Button>
    </main>
  );
}
