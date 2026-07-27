export default function ProductShowcase() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl bg-stone-100 sm:h-80 lg:h-96">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200">
              <span className="px-6 text-center font-display text-sm italic text-gray-400">
                Replace with product photograph
              </span>
            </div>
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
          <div className="flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl bg-stone-100 sm:h-80 lg:h-96">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-stone-100 via-rose-50 to-stone-200">
              <span className="px-6 text-center font-display text-sm italic text-gray-400">
                Replace with product photograph
              </span>
            </div>
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
