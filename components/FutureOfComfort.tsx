"use client";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

// Mixkit free stock — fashion runway catwalk
const BANNER_VIDEO =
  "https://assets.mixkit.co/videos/52270/52270-720.mp4"; // model on runway

export default function FutureOfComfort() {
  return (
    <section className="bg-neutral-950 px-3 pb-8 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
      <div className="relative mx-auto h-screen max-w-[1400px] overflow-hidden rounded-3xl">
        <video
          src={BANNER_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-10 lg:p-14">
          <h2 className="max-w-2xl font-geist text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            The Future
            <br />
            of Comfort
            <br />
            Awaits
          </h2>

          <Button
            type="button"
            className="mt-8 h-auto w-fit gap-3 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-sm text-black shadow-none transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-black"
          >
            Buy Now
            <span className="flex size-8 items-center justify-center rounded-full bg-black text-white">
              <ArrowUpRight className="size-4" strokeWidth={2} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
