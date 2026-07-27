"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const slides = [
  {
    src: "/hero.png",
    alt: "Model holding a perfume bottle",
    objectPosition: "object-right",
  },
  {
    src: "/hero-2.jpg",
    alt: "Fashion editorial portrait",
    objectPosition: "object-center",
  },
  {
    src: "/hero-3.jpg",
    alt: "Fashion editorial portrait",
    objectPosition: "object-center",
  },
] as const;

const AUTO_MS = 4500;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [active]);

  return (
    <section className="p-3 sm:p-4">
      <div className="relative h-[calc(100svh-5.5rem-1.5rem)] min-h-[420px] overflow-hidden rounded-2xl bg-sky-200 sm:h-[calc(100svh-5.5rem-2rem)]">
        {/* Full-bleed slides */}
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className={cn(
              "object-cover transition-opacity duration-700 ease-out",
              slide.objectPosition,
              i === active ? "opacity-100" : "opacity-0",
            )}
            sizes="100vw"
          />
        ))}

        {/* Text overlay — always top-left */}
        <div className="absolute top-0 left-0 z-10 flex flex-col items-start px-5 pt-6 sm:px-8 sm:pt-8 md:px-10 md:pt-10 lg:px-14 lg:pt-14">
          <h1 className="font-display text-3xl font-light leading-[1.05] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
            FRAGRANCE
            <br />
            BECOMES
            <br />
            MEMORY
          </h1>
        </div>

        {/* Slider indicators */}
        <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2 sm:left-10 lg:left-14">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => setActive(i)}
              className={cn(
                "h-[2px] transition-all duration-300",
                i === active
                  ? "w-10 bg-gray-900"
                  : "w-4 bg-gray-500/70 hover:bg-gray-700/80",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
