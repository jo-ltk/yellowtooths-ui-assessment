const products = [
  {
    name: "Tees",
    dots: ["bg-orange-500", "bg-[#C5A46A]", "bg-lime-600"],
  },
  {
    name: "Hoodie",
    dots: ["bg-orange-500", "bg-[#C5A46A]", "bg-lime-600"],
  },
  {
    name: "Pants",
    dots: ["bg-orange-500", "bg-[#C5A46A]", "bg-lime-600"],
  },
] as const;

export default function Essentialized() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
      <h2 className="text-center font-geist text-[4rem] font-black leading-[0.85] tracking-tight text-gray-900 sm:text-[6rem] lg:text-[8.5rem]">
        Essentialized
      </h2>

      <div className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <p className="max-w-xs text-sm font-light leading-relaxed text-gray-600">
          Feel confident in every layer, we engineered comfort you can trust
        </p>
        <p className="max-w-xs text-sm font-light leading-relaxed text-gray-600 sm:text-right">
          Smart comfort for daily living, with style that simplifies your life
        </p>
      </div>

      <div className="relative mt-6 h-[380px] w-full overflow-hidden rounded-2xl sm:h-[460px] lg:h-[560px]">
        {/* Fabric / campaign photograph placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-orange-400 to-orange-300" />

        <a
          href="/collections/essentials?source=Essentialized"
          className="absolute right-6 top-6 z-10 inline-block border-b border-gray-900 pb-1 text-[10px] font-light uppercase tracking-[0.2em] text-gray-900 sm:right-8 sm:top-8 sm:text-xs"
        >
          Buy Now
        </a>

        <div className="absolute bottom-4 right-4 z-10 hidden gap-3 sm:bottom-6 sm:right-6 sm:flex lg:bottom-8 lg:right-8">
          {products.map((item) => (
            <div
              key={item.name}
              className="relative flex h-32 w-24 flex-col overflow-hidden rounded-xl border border-gray-100 bg-white p-3 lg:h-36 lg:w-28"
            >
              <span className="text-[11px] font-light text-gray-900">
                {item.name}
              </span>
              <div className="mt-2 flex flex-col gap-1.5">
                {item.dots.map((color, i) => (
                  <button
                    key={`${item.name}-${i}`}
                    type="button"
                    aria-label={`${item.name} color ${i + 1}`}
                    className={`h-1.5 w-1.5 rounded-full ${color}`}
                  />
                ))}
              </div>
              {/* Garment preview, bleeding off the edge */}
              <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-full bg-gradient-to-br from-[#E5D9C3] to-stone-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
