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
    <section className="pb-16 sm:pb-20 lg:pb-28">
      {/* Full-bleed wordmark — stretched edge to edge, no side gaps */}
      <div className="mx-auto max-w-[1400px]">
        <h2 className="sr-only">Essentialized</h2>
        <svg
          viewBox="0 0 1000 118"
          className="block h-auto w-full text-gray-900"
          aria-hidden="true"
          focusable="false"
        >
          <text
            x="0"
            y="100"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="currentColor"
            style={{
              fontFamily:
                "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
              fontWeight: 800,
              fontSize: 128,
              letterSpacing: "-0.04em",
            }}
          >
            Essentialized
          </text>
        </svg>

        <div className="mt-5 flex flex-col gap-3 border-t border-gray-200 pt-4 sm:mt-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <p className="max-w-[220px] font-geist text-sm font-light leading-snug text-gray-600">
            Feel confident in every layer, we engineered comfort you can trust
          </p>
          <p className="max-w-[220px] font-geist text-sm font-light leading-snug text-gray-600 sm:text-right">
            Smart comfort for daily living, with style that simplifies your life
          </p>
        </div>

        <div className="relative mt-6 h-[380px] w-full overflow-hidden rounded-2xl sm:mt-8 sm:h-[460px] lg:h-[560px]">
          {/* Fabric / campaign photograph placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-orange-400 to-orange-300" />

          <a
            href="/collections/essentials?source=Essentialized"
            className="absolute right-6 top-6 z-10 inline-block border-b border-gray-900 pb-1 font-geist text-[10px] font-light uppercase tracking-[0.2em] text-gray-900 sm:right-8 sm:top-8 sm:text-xs"
          >
            Buy Now
          </a>

          <div className="absolute bottom-4 right-4 z-10 hidden gap-3 sm:bottom-6 sm:right-6 sm:flex lg:bottom-8 lg:right-8">
            {products.map((item) => (
              <div
                key={item.name}
                className="relative flex h-32 w-24 flex-col overflow-hidden rounded-xl border border-gray-100 bg-white p-3 lg:h-36 lg:w-28"
              >
                <span className="font-geist text-[11px] font-light text-gray-900">
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
                <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-full bg-gradient-to-br from-[#E5D9C3] to-stone-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
