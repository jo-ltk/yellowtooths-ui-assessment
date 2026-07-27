"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 md:py-24 lg:px-10">
        <h1 className="font-serif text-2xl font-light leading-[1.1] tracking-tight text-gray-900 md:text-4xl">
          Wishlist
        </h1>
        <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-gray-600 sm:text-base">
          Pieces you&apos;ve saved for later.
        </p>

        {items.length === 0 ? (
          <div className="mt-16 border-t border-gray-100 pt-16 text-center">
            <p className="text-sm font-light text-gray-500 sm:text-base">
              Your wishlist is empty.
            </p>
            <Link
              href="/?source=Wishlist Empty"
              className="mt-6 inline-block border-b border-gray-900 pb-1 text-[10px] font-light uppercase tracking-[0.2em] text-gray-900 sm:text-xs"
            >
              Discover Reimagined
            </Link>
          </div>
        ) : (
          <ul className="mt-12 divide-y divide-gray-100 border-t border-gray-100">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-4 py-6 sm:gap-6"
              >
                <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-stone-100 sm:h-28 sm:w-24">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="font-serif text-lg font-light tracking-tight text-gray-900 sm:text-xl">
                    {item.name}
                  </h2>
                  <p className="mt-1 text-xs font-light tracking-wide text-gray-500 sm:text-sm">
                    {item.price}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => removeFromWishlist(item.id)}
                  className="shrink-0 border-b border-gray-900 pb-1 text-[10px] font-light uppercase tracking-[0.2em] text-gray-900 sm:text-xs"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
