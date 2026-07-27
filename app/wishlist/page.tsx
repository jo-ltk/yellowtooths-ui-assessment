"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, ShoppingBag } from "lucide-react";

import AddToCartButton from "@/components/AddToCartButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Reveal } from "@/components/motion/Reveal";
import { useCart } from "@/context/CartContext";
import {
  useWishlist,
  type WishlistItem,
} from "@/context/WishlistContext";
import { cn } from "@/lib/utils";

const WISHLIST_HERO =
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2000&q=85";

const DUMMY_ITEMS: WishlistItem[] = [
  {
    id: "dummy-wish-amber-blaze-classic-tee",
    name: "Amber Blaze Classic Tee",
    price: "$250",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dummy-wish-mystic-mauve-everyday-crew",
    name: "Mystic Mauve Everyday Crew",
    price: "$350",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dummy-wish-amber-blaze-softwear-coat",
    name: "Amber Blaze Softwear Coat",
    price: "$500",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dummy-wish-golden-hour-relaxed-tee",
    name: "Golden Hour Relaxed Tee",
    price: "$280",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
  },
];

const DUMMY_META: Record<string, { category: string; note: string }> = {
  "dummy-wish-amber-blaze-classic-tee": {
    category: "Tees",
    note: "Everyday essential",
  },
  "dummy-wish-mystic-mauve-everyday-crew": {
    category: "Tees",
    note: "Softwear edit",
  },
  "dummy-wish-amber-blaze-softwear-coat": {
    category: "Coats",
    note: "Limited drop",
  },
  "dummy-wish-golden-hour-relaxed-tee": {
    category: "Tees",
    note: "Warm-hour dye",
  },
};

const SUGGESTIONS = [
  {
    id: "midnight-essential-hoodie",
    name: "Midnight Essential Hoodie",
    price: "$420",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "stone-path-wide-pant",
    name: "Stone Path Wide Pant",
    price: "$380",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ember-layer-knit",
    name: "Ember Layer Knit",
    price: "$310",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
  },
];

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const isDemo = items.length === 0;
  const displayItems = isDemo ? DUMMY_ITEMS : items;

  function moveAllToBag() {
    if (isDemo) return;
    for (const item of items) {
      addToCart(item);
      removeFromWishlist(item.id);
    }
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#e8eaed]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.8)_0%,_transparent_52%),radial-gradient(ellipse_at_bottom_left,_rgba(70,85,100,0.12)_0%,_transparent_48%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.28] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
        }}
      />

      <Navbar />

      <section className="relative h-[42vh] min-h-[280px] max-h-[420px] w-full overflow-hidden sm:h-[48vh]">
        <Image
          src={WISHLIST_HERO}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_22%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#e8eaed] via-[#e8eaed]/30 to-black/30" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,16,22,0.52)_0%,transparent_58%)]" />

        <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-[1400px] flex-col justify-end px-6 pb-10 sm:px-8 sm:pb-12 lg:px-10">
          <Reveal variant="up" duration={1}>
            <p className="font-geist text-[10px] uppercase tracking-[0.28em] text-white/70 sm:text-xs">
              PARFS · Saved
            </p>
            <h1 className="mt-3 font-display text-5xl font-light leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Wishlist
            </h1>
            <p className="mt-4 max-w-md font-geist text-sm font-light leading-relaxed text-white/75 sm:text-base">
              {isDemo
                ? `${displayItems.length} sample saves — preview your favorites board.`
                : `${displayItems.length} ${displayItems.length === 1 ? "piece" : "pieces"} waiting for the right moment.`}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1400px] px-6 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-14 lg:px-10">
        <Reveal variant="up" delay={0.05}>
          <div className="flex flex-wrap items-center justify-between gap-4 overflow-hidden rounded-2xl border border-black/[0.06] bg-white/55 px-5 py-5 backdrop-blur-sm sm:px-7 sm:py-6">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-[#12161c] text-[#e8eaed]">
                <Heart className="size-4 fill-current" strokeWidth={1.5} />
              </span>
              <div>
                <p className="font-geist text-[10px] uppercase tracking-[0.22em] text-stone-500">
                  Saved for later
                </p>
                <p className="mt-1.5 max-w-lg font-geist text-sm font-light text-stone-700 sm:text-base">
                  Build your edit, then move pieces to the bag when you&apos;re
                  ready.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {isDemo && (
                <span className="rounded-full border border-stone-300/80 bg-white/70 px-3 py-1 font-geist text-[10px] uppercase tracking-[0.18em] text-stone-500">
                  Preview UI
                </span>
              )}
              <button
                type="button"
                disabled={isDemo}
                onClick={moveAllToBag}
                className="inline-flex items-center gap-2 rounded-full bg-[#12161c] px-5 py-2.5 font-geist text-[10px] uppercase tracking-[0.18em] text-[#e8eaed] transition-opacity hover:opacity-90 disabled:cursor-default disabled:opacity-40 sm:text-xs"
              >
                <ShoppingBag className="size-3.5" strokeWidth={1.75} />
                Move all to bag
              </button>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-16">
          <Reveal variant="left" delay={0.08}>
            <div className="mb-8 flex items-baseline justify-between gap-4">
              <h2 className="font-geist text-xs uppercase tracking-[0.22em] text-stone-500">
                / Favorites
              </h2>
              <span className="font-display text-2xl font-light tracking-tight text-stone-900 sm:text-3xl">
                {displayItems.length}
              </span>
            </div>
          </Reveal>

          <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {displayItems.map((item, index) => {
              const meta = DUMMY_META[item.id];

              return (
                <Reveal
                  key={item.id}
                  as="li"
                  variant="up"
                  delay={0.1 + index * 0.06}
                >
                  <article
                    className={cn(
                      "group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/[0.05] bg-white/70 shadow-[0_1px_2px_rgba(20,16,12,0.04),0_18px_40px_-28px_rgba(20,16,12,0.35)] backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1",
                    )}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/20 to-transparent" />

                      <button
                        type="button"
                        disabled={isDemo}
                        aria-label={`Remove ${item.name} from wishlist`}
                        onClick={() => removeFromWishlist(item.id)}
                        className="absolute top-3 right-3 z-10 flex size-9 items-center justify-center rounded-full bg-white/90 text-stone-900 transition-colors hover:bg-white disabled:cursor-default disabled:opacity-50"
                      >
                        <Heart
                          className="size-4 fill-current"
                          strokeWidth={1.5}
                        />
                      </button>

                      {meta && (
                        <span className="absolute top-3 left-3 z-10 rounded-full bg-white/90 px-3 py-1 font-geist text-[10px] uppercase tracking-[0.14em] text-stone-700 backdrop-blur-sm">
                          {meta.category}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
                      <h3 className="font-display text-[15px] font-semibold leading-snug tracking-tight text-stone-900 sm:text-base">
                        {item.name}
                      </h3>
                      {meta && (
                        <p className="mt-1 font-geist text-[10px] uppercase tracking-[0.16em] text-stone-500">
                          {meta.note}
                        </p>
                      )}
                      <p className="mt-2 font-geist text-sm font-light text-stone-600">
                        {item.price}
                      </p>

                      <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                        {isDemo ? (
                          <span className="border-b border-stone-300 pb-1 font-geist text-[10px] uppercase tracking-[0.2em] text-stone-400 sm:text-xs">
                            Add to Cart
                          </span>
                        ) : (
                          <AddToCartButton
                            product={item}
                            className="mt-0"
                          />
                        )}
                        <button
                          type="button"
                          disabled={isDemo}
                          onClick={() => removeFromWishlist(item.id)}
                          className="shrink-0 font-geist text-[10px] uppercase tracking-[0.16em] text-stone-400 transition-colors hover:text-stone-900 disabled:cursor-default disabled:opacity-40"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </div>

        {/* Side note strip */}
        <Reveal variant="up" delay={0.12} className="mt-14 sm:mt-20">
          <div className="grid overflow-hidden rounded-[1.75rem] border border-black/[0.05] bg-[#12161c] text-[#e8eaed] sm:grid-cols-[1.1fr_0.9fr]">
            <div className="relative p-7 sm:p-10">
              <p className="font-geist text-[10px] uppercase tracking-[0.24em] text-white/40">
                Curated saves
              </p>
              <h2 className="mt-4 max-w-md font-display text-3xl font-light leading-[1.05] tracking-tight sm:text-4xl">
                Your quiet board of future fits.
              </h2>
              <p className="mt-4 max-w-sm font-geist text-sm font-light leading-relaxed text-white/55">
                Heart pieces from Discover, revisit them here, then move what
                feels right into your bag.
              </p>
              <Link
                href="/?source=Wishlist Continue"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#e8eaed] py-2 pl-5 pr-2 font-geist text-xs text-[#12161c] transition-transform duration-300 hover:scale-[1.02]"
              >
                <span className="uppercase tracking-[0.16em]">
                  Keep browsing
                </span>
                <span className="flex size-9 items-center justify-center rounded-full bg-[#12161c] text-[#e8eaed]">
                  <ArrowUpRight className="size-4" strokeWidth={2} />
                </span>
              </Link>
            </div>
            <div className="relative min-h-[220px] sm:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#12161c]/40 sm:bg-gradient-to-l" />
            </div>
          </div>
        </Reveal>

        <div className="mt-20 border-t border-stone-900/10 pt-14 sm:mt-28 sm:pt-20">
          <Reveal variant="up">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-geist text-xs text-stone-400">/ Also like</p>
                <h2 className="mt-3 font-display text-3xl font-light tracking-tight text-stone-900 sm:text-4xl md:text-5xl">
                  Worth a look
                </h2>
              </div>
              <Link
                href="/?source=Wishlist Suggestions"
                className="inline-flex items-center gap-2 border-b border-stone-900 pb-1 font-geist text-[10px] uppercase tracking-[0.2em] text-stone-900 sm:text-xs"
              >
                Discover Reimagined
                <ArrowUpRight className="size-3.5" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>

          <ul className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-7">
            {SUGGESTIONS.map((product, index) => (
              <Reveal
                key={product.id}
                as="li"
                variant="up"
                delay={0.08 + index * 0.07}
              >
                <article className="group overflow-hidden rounded-[1.75rem] bg-white/70 shadow-[0_1px_2px_rgba(20,16,12,0.04),0_18px_40px_-28px_rgba(20,16,12,0.3)] ring-1 ring-black/[0.04] backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-1">
                  <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <Link
                      href="/?source=Wishlist Suggestions"
                      aria-label={`View ${product.name}`}
                      className="absolute right-4 bottom-4 z-10 flex size-10 translate-y-2 items-center justify-center rounded-full bg-white text-stone-950 opacity-0 shadow-md transition-all duration-300 hover:scale-105 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <ArrowUpRight className="size-4" strokeWidth={2} />
                    </Link>
                  </div>
                  <div className="px-5 pt-4 pb-5">
                    <h3 className="font-display text-[15px] font-semibold leading-snug tracking-tight text-stone-900">
                      {product.name}
                    </h3>
                    <p className="mt-1.5 font-geist text-sm font-light text-stone-500">
                      {product.price}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
