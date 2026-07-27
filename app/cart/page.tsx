"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal, itemCount } =
    useCart();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 md:py-24 lg:px-10">
        <h1 className="font-serif text-2xl font-light leading-[1.1] tracking-tight text-gray-900 md:text-4xl">
          Cart
        </h1>
        <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-gray-600 sm:text-base">
          {itemCount === 0
            ? "Your bag is empty."
            : `${itemCount} ${itemCount === 1 ? "item" : "items"} in your bag.`}
        </p>

        {items.length === 0 ? (
          <div className="mt-16 border-t border-gray-100 pt-16 text-center">
            <p className="text-sm font-light text-gray-500 sm:text-base">
              Nothing here yet.
            </p>
            <Link
              href="/?source=Cart Empty"
              className="mt-6 inline-block border-b border-gray-900 pb-1 text-[10px] font-light uppercase tracking-[0.2em] text-gray-900 sm:text-xs"
            >
              Discover Reimagined
            </Link>
          </div>
        ) : (
          <>
            <ul className="mt-12 divide-y divide-gray-100 border-t border-gray-100">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-6"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
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
                  </div>

                  <div className="flex items-center justify-between gap-4 sm:ml-auto sm:justify-end">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${item.name}`}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="flex h-8 w-8 items-center justify-center border border-gray-200 text-sm font-light text-gray-900"
                      >
                        −
                      </button>
                      <span className="min-w-6 text-center text-sm font-light text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${item.name}`}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="flex h-8 w-8 items-center justify-center border border-gray-200 text-sm font-light text-gray-900"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="shrink-0 border-b border-gray-900 pb-1 text-[10px] font-light uppercase tracking-[0.2em] text-gray-900 sm:text-xs"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
              <span className="text-sm font-light uppercase tracking-[0.2em] text-gray-500">
                Subtotal
              </span>
              <span className="font-serif text-xl font-light tracking-tight text-gray-900 sm:text-2xl">
                ${cartTotal.toLocaleString()}
              </span>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
