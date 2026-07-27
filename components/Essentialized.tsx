"use client";

import { useState } from "react";
import CircularText from "./CircularText";

const products = [
  { key: "tees", name: "Tees", text: "TEES*TEES*TEES*" },
  { key: "hoodie", name: "Hoodie", text: "HOODIE*HOODIE*" },
  { key: "pants", name: "Pants", text: "PANTS*PANTS*" },
] as const;

const images = {
  tees: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop",
  hoodie:
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1600&auto=format&fit=crop",
  pants:
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1600&auto=format&fit=crop",
};

// Mixkit free stock — fashion modelling / apparel only
const videos = {
  tees: "https://assets.mixkit.co/videos/805/805-720.mp4", // model in black dress
  hoodie: "https://assets.mixkit.co/videos/806/806-720.mp4", // studio dress modelling
  pants: "https://assets.mixkit.co/videos/809/809-720.mp4", // fashion mirrors look
};

export default function Essentialized() {
  const [active, setActive] = useState<"tees" | "hoodie" | "pants">("tees");

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
          {(Object.keys(videos) as Array<keyof typeof videos>).map((key) => (
            <video
              key={key}
              src={videos[key]}
              poster={images[key]}
              autoPlay
              muted
              loop
              playsInline
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                active === key ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <a
            href="/collections/essentials?source=Essentialized"
            className="absolute right-6 top-6 z-10 inline-block border-b border-gray-900 pb-1 font-geist text-[10px] font-light uppercase tracking-[0.2em] text-gray-900 sm:right-8 sm:top-8 sm:text-xs"
          >
            Buy Now
          </a>

          <div className="absolute bottom-4 right-4 z-10 hidden items-end gap-3 sm:bottom-6 sm:right-6 sm:flex lg:bottom-8 lg:right-8 lg:gap-4">
            {products.map((item) => {
              const isActive = active === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActive(item.key)}
                  aria-pressed={isActive}
                  aria-label={item.name}
                  className={`rounded-full border-2 shadow-lg transition-all duration-300 ease-out ${
                    isActive
                      ? "scale-105 border-white bg-gray-900 opacity-100"
                      : "border-white/50 bg-gray-900/70 opacity-85 hover:scale-105 hover:border-white hover:bg-gray-900 hover:opacity-100"
                  }`}
                >
                  <CircularText
                    text={item.text}
                    spinDuration={isActive ? 12 : 20}
                    onHover="speedUp"
                    className="!mx-0 h-20 w-20 text-[9px] text-white lg:h-24 lg:w-24 lg:text-[10px]"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
