import Image from "next/image";

export default function Hero() {
  return (
    <section className="p-3 sm:p-4">
      <div className="relative h-[calc(100svh-5.5rem-1.5rem)] min-h-[420px] overflow-hidden rounded-2xl bg-sky-200 sm:h-[calc(100svh-5.5rem-2rem)]">
        {/* Full-bleed image */}
        <Image
          src="/hero.png"
          alt="Model holding a perfume bottle"
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />

        {/* Text overlay — always top-left */}
        <div className="absolute top-0 left-0 z-10 flex flex-col items-start px-5 pt-6 sm:px-8 sm:pt-8 md:px-10 md:pt-10 lg:px-14 lg:pt-14">
          <h1 className="font-display text-3xl font-light leading-[1.05] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            FRAGRANCE
            <br />
            BECOMES
            <br />
            MEMORY
          </h1>

          <div className="mt-5 sm:mt-7 md:mt-8">
            <a
              href="#"
              className="inline-block border-b border-gray-900 pb-1 text-[10px] font-light uppercase tracking-[0.2em] text-gray-900 sm:text-xs"
            >
              All Collection
            </a>
          </div>
        </div>

        {/* Slider indicators */}
        <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2 sm:left-10 lg:left-14">
          <span className="h-[2px] w-4 bg-gray-500/70" />
          <span className="h-[2px] w-4 bg-gray-500/70" />
          <span className="h-[2px] w-10 bg-gray-900" />
        </div>
      </div>
    </section>
  );
}
