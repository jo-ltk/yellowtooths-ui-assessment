"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Reveal, RevealText } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const tabs = [
  "Classic",
  "Everyday",
  "Soft",
  "Foundation",
  "Active",
  "Essential",
] as const;

// Mixkit free stock — fashion modelling / runway only
const VIDEO_SOFTWEAR =
  "https://assets.mixkit.co/videos/806/806-720.mp4"; // studio dress modelling
const VIDEO_ACTIVE =
  "https://assets.mixkit.co/videos/50641/50641-720.mp4"; // model photoshoot posing

const images = {
  skate:
    "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1600&q=85",
  olive:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=85",
  basketball:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=85",
  outdoor:
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1600&q=85",
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
        "group relative overflow-hidden rounded-[1.75rem] bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.3),0_20px_40px_-24px_rgba(0,0,0,0.7)] ring-1 ring-white/[0.06] transition-all duration-700 ease-out hover:shadow-[0_1px_1px_rgba(0,0,0,0.4),0_32px_56px_-20px_rgba(0,0,0,0.85)]",
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
    <div
      className={cn(
        "mt-4 flex items-center gap-2.5",
        align === "right" && "justify-end",
      )}
    >
      {align === "left" && (
        <span className="h-px w-4 bg-white/30 transition-all duration-300 group-hover:w-7 group-hover:bg-white" />
      )}
      <span className="font-geist text-[11px] font-medium tracking-[0.2em] text-white/70 uppercase transition-colors duration-300 group-hover:text-white">
        {children}
      </span>
      {align === "right" && (
        <span className="h-px w-4 bg-white/30 transition-all duration-300 group-hover:w-7 group-hover:bg-white" />
      )}
    </div>
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
    <section className="bg-neutral-950 px-3 pt-8 pb-4 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
      <div className="mx-auto max-w-[1400px] rounded-[2.5rem] bg-gradient-to-b from-neutral-900 to-black px-5 py-8 ring-1 ring-white/[0.06] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        {/* Header */}
        <div className="mb-10 grid grid-cols-1 gap-4 lg:mb-12 lg:grid-cols-[80px_1fr_300px] lg:items-start lg:gap-10">
          <Reveal variant="fade">
            <span className="font-geist text-xs tracking-[0.15em] text-white/35">
              /03
            </span>
          </Reveal>
          <h2 className="font-geist text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <RevealText text="Style Outlook" mode="words" stagger={0.1} />
          </h2>
          <Reveal variant="up" delay={0.12}>
            <p className="max-w-xs font-geist text-sm leading-relaxed text-white/50 lg:justify-self-end lg:text-right">
              Make simplicity your boldest statement — experience crafted
              essentials with quiet, deliberate purpose.
            </p>
          </Reveal>
        </div>

        {/* Row A: big video left, two stacked tiles right */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
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
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </Tile>
            <Caption>Softwear</Caption>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <div>
              <Tile
                mounted={mounted}
                delayMs={100}
                className="h-[220px] sm:h-[240px] lg:h-[252px]"
              >
                <Image
                  src={images.skate}
                  alt="Street style fashion look"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </Tile>
              <Caption>Skate Line</Caption>
            </div>
            <div>
              <Tile
                mounted={mounted}
                delayMs={200}
                className="h-[220px] sm:h-[240px] lg:h-[252px]"
              >
                <Image
                  src={images.olive}
                  alt="Editorial fashion look"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </Tile>
              <Caption align="right">Skena Core</Caption>
            </div>
          </div>
        </div>

        {/* Row B: two stacked tiles left, big video right */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-5">
            <div>
              <Tile
                mounted={mounted}
                delayMs={300}
                className="h-[220px] sm:h-[240px] lg:h-[252px]"
              >
                <Image
                  src={images.basketball}
                  alt="Activewear fashion look"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </Tile>
              <Caption>Court Ready</Caption>
            </div>
            <div>
              <Tile
                mounted={mounted}
                delayMs={400}
                className="h-[220px] sm:h-[240px] lg:h-[252px]"
              >
                <Image
                  src={images.outdoor}
                  alt="Outdoor fashion look"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </Tile>
              <Caption>Outdoor Edit</Caption>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Tile
              mounted={mounted}
              delayMs={500}
              className="h-[320px] sm:h-[420px] lg:h-[540px]"
            >
              <video
                src={VIDEO_ACTIVE}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </Tile>
            <Caption align="right">Active</Caption>
          </div>
        </div>

        {/* Pill tab filter */}
        <div
          className={cn(
            "mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 transition-all duration-700 ease-out lg:mt-12",
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
          style={{ transitionDelay: "600ms" }}
        >
          <span className="font-geist text-[11px] font-medium tracking-[0.2em] text-white/35 uppercase">
            Shop the edit
          </span>
          <div className="flex flex-wrap justify-end gap-2.5">
            {tabs.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <Button
                  key={tab}
                  type="button"
                  variant="outline"
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "h-auto rounded-full border px-5 py-2.5 text-sm shadow-none transition-all duration-300",
                    isActive
                      ? "border-white bg-white text-black shadow-[0_8px_20px_-8px_rgba(255,255,255,0.4)] hover:bg-white hover:text-black"
                      : "border-white/15 bg-transparent text-white/60 hover:border-white/30 hover:bg-white/[0.04] hover:text-white",
                  )}
                >
                  {tab}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}