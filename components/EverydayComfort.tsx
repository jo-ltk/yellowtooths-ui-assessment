"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const garments = [
  {
    src: "/garments/garment-1.png",
    alt: "Periwinkle oversized tee",
  },
  {
    src: "/garments/garment-2.png",
    alt: "Orange oversized tee",
  },
  {
    src: "/garments/garment-3.png",
    alt: "Lime green hoodie",
  },
] as const;

export default function EverydayComfort() {
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [paused, setPaused] = useState(false);

  // Duplicate so the infinite loop has no seam
  const track = [...garments, ...garments, ...garments, ...garments];

  return (
    <section className="bg-neutral-950 px-3 pb-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-3xl bg-black px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <span className="font-geist text-xs text-white/40">/04</span>

        <h2 className="mt-3 font-geist text-[2.6rem] font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
          The Science
          <br />
          of Everyday
          <br />
          Comfort
        </h2>

        <div className="mt-6 flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Scroll right"
            onClick={() => setDirection("right")}
            className="size-10 rounded-full border-white/30 bg-transparent text-white shadow-none hover:border-white hover:bg-white hover:text-black"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Scroll left"
            onClick={() => setDirection("left")}
            className="size-10 rounded-full border-white/30 bg-transparent text-white shadow-none hover:border-white hover:bg-white hover:text-black"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>

        {/* Mannequin runway — continuous left/right marquee */}
        <div
          className="relative mt-10 -mx-5 overflow-hidden sm:-mx-8 lg:-mx-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            key={direction}
            className={cn(
              "flex w-max gap-10 sm:gap-14",
              paused && "[animation-play-state:paused]",
            )}
            style={{
              animation: `${
                direction === "left" ? "mannequin-left" : "mannequin-right"
              } 14s linear infinite`,
            }}
          >
            {track.map((garment, i) => (
              <div
                key={`${garment.src}-${i}`}
                className="relative h-72 w-56 shrink-0 sm:h-96 sm:w-72 lg:h-[28rem] lg:w-80"
              >
                <Image
                  src={garment.src}
                  alt={garment.alt}
                  fill
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                  className="object-contain"
                  priority={i < 3}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center">
          <p className="font-geist text-xs uppercase tracking-[0.2em] text-white/70">
            Use ORMAS25 now, get 25% off your first fit
          </p>
        </div>
      </div>
    </section>
  );
}
