import Image from "next/image";

const images = {
  goldDust:
    "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1600&q=85",
  womens:
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1600&q=85",
};

export default function ProductShowcase() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-stone-100 sm:h-80 lg:h-96">
            <Image
              src={images.goldDust}
              alt="Gold Dust & Cracked Perfumes"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <h3 className="mt-8 font-display text-2xl font-light text-gray-900 sm:text-3xl">
            Gold Dust &amp; Cracked Perfumes
          </h3>
          <p className="mt-3 max-w-md text-center text-sm text-gray-500">
            One of the most defining fragrance notes of Gold Dust is cinnamon.
          </p>
          <a
            href="#"
            className="mt-6 border-b border-gray-900 pb-1 text-xs font-light uppercase tracking-[0.2em] text-gray-900"
          >
            Shop Selection
          </a>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-stone-100 sm:h-80 lg:h-96">
            <Image
              src={images.womens}
              alt="Women's Fragrances Perfumes"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <h3 className="mt-8 font-display text-2xl font-light text-gray-900 sm:text-3xl">
            Women&apos;s Fragrances Perfumes
          </h3>
          <p className="mt-3 max-w-md text-center text-sm text-gray-500">
            Women&apos;s fragrances – 100ml Eau de Parfum, 100ml Aftershave Balm
            &amp; a Pouch.
          </p>
          <a
            href="#"
            className="mt-6 border-b border-gray-900 pb-1 text-xs font-light uppercase tracking-[0.2em] text-gray-900"
          >
            Shop Selection
          </a>
        </div>
      </div>
    </section>
  );
}
