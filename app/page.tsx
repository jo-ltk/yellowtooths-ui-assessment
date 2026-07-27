import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import ProductShowcase from "@/components/ProductShowcase";
import Essentialized from "@/components/Essentialized";
import Discover from "@/components/Discover";
import StyleOutlook from "@/components/StyleOutlook";
import EverydayComfort from "@/components/EverydayComfort";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Statement />
      <ProductShowcase />
      <Essentialized />
      <Discover />
      <StyleOutlook />
      <EverydayComfort />
    </main>
  );
}
