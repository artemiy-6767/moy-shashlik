import { About } from "@/components/About";
import { Catalog } from "@/components/Catalog";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalog />
        <About />
      </main>
      <Footer />
    </>
  );
}
