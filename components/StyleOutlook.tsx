"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tabs = [
  "Classic",
  "Everyday",
  "Soft",
  "Foundation",
  "Active",
  "Essential",
] as const;

const VIDEO_SOFTWEAR =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const VIDEO_ACTIVE =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

const images = {
  skate:
    "https://images.unsplash.com/photo-1523398002811-cffca00f566a?auto=format&fit=crop&w=800&q=80",
  olive:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  basketball:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
  outdoor:
    "https://images.unsplash.com/photo-1483721313421-3614f8b5e9b0?auto=format&fit=crop&w=800&q=80",
};

function Tile({
  className = "",
  delayMs = 0,
  mounted,
  children,
}: {
  className?: string;
  delayMs?: number;
  mounted: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-neutral-800 transition-all duration-700 ease-out",
        mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Caption({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <span
      className={cn(
        "mt-3 block font-geist text-[11px] font-medium uppercase tracking-[0.15em] text-white",
        align === "right" && "text-right",
      )}
    >
      {children}
    </span>
  );
}

export default function StyleOutlook() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Active");

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="bg-neutral-950 px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1400px] rounded-3xl bg-black px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        {/* Header */}
        <div className="mb-8 grid grid-cols-1 gap-4 lg:mb-10 lg:grid-cols-[80px_1fr_300px] lg:items-start lg:gap-10">
          <span className="font-geist text-xs text-white/40">/03</span>
          <h2 className="font-geist text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Style Outlook
          </h2>
          <p className="max-w-xs font-geist text-sm leading-relaxed text-white/60 lg:justify-self-end lg:text-right">
            Make simplicity your boldest statement, experience crafted
            essentials with a excellent purpose.
          </p>
        </div>

        {/* Row A: big video left, two stacked tiles right */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Tile
              mounted={mounted}
              delayMs={0}
              className="h-[320px] sm:h-[420px] lg:h-[540px]"
            >
              <video
                src={VIDEO_SOFTWEAR}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </Tile>
            <Caption>Softwear</Caption>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Tile
              mounted={mounted}
              delayMs={100}
              className="h-[220px] sm:h-[240px] lg:h-[260px]"
            >
              <Image
                src={images.skate}
                alt="Skate lifestyle"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Tile>
            <div>
              <Tile
                mounted={mounted}
                delayMs={200}
                className="h-[220px] sm:h-[240px] lg:h-[260px]"
              >
                <Image
                  src={images.olive}
                  alt="Skena Core look"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Tile>
              <Caption align="right">Skena Core</Caption>
            </div>
          </div>
        </div>

        {/* Row B: two stacked tiles left, big video right */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            <Tile
              mounted={mounted}
              delayMs={300}
              className="h-[220px] sm:h-[240px] lg:h-[260px]"
            >
              <Image
                src={images.basketball}
                alt="Active basketball look"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Tile>
            <Tile
              mounted={mounted}
              delayMs={400}
              className="h-[220px] sm:h-[240px] lg:h-[260px]"
            >
              <Image
                src={images.outdoor}
                alt="Outdoor lifestyle"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Tile>
          </div>

          <Tile
            mounted={mounted}
            delayMs={500}
            className="h-[320px] sm:h-[420px] lg:col-span-2 lg:h-[540px]"
          >
            <video
              src={VIDEO_ACTIVE}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </Tile>
        </div>

        {/* Pill tab filter */}
        <div
          className={cn(
            "mt-8 flex flex-wrap justify-end gap-3 transition-all duration-700 ease-out lg:mt-10",
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0",
          )}
          style={{ transitionDelay: "600ms" }}
        >
          {tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <Button
                key={tab}
                type="button"
                variant="outline"
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "h-auto rounded-full border px-5 py-2.5 text-sm shadow-none transition-colors duration-300",
                  isActive
                    ? "border-white bg-white text-black hover:bg-white hover:text-black"
                    : "border-white/20 bg-transparent text-white/70 hover:border-white/40 hover:bg-transparent hover:text-white",
                )}
              >
                {tab}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
