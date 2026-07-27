import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Statement />
      <ProductShowcase />
    </main>
  );
}
