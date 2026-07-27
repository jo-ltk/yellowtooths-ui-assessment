"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, Search, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import WishlistButton from "@/components/WishlistButton";
import AddToCartButton from "@/components/AddToCartButton";
import { cn } from "@/lib/utils";

const filters: { label: string; options: string[] }[] = [
  {
    label: "Category",
    options: ["All", "Tees", "Hoodies", "Coats", "Pants", "Accessories"],
  },
  {
    label: "Size",
    options: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
  },
  {
    label: "Color",
    options: ["Amber Blaze", "Mystic Mauve", "Emerald", "Black", "White"],
  },
  {
    label: "Price",
    options: ["Under $250", "$250 - $350", "$350 - $500", "$500+"],
  },
];

const SIZE_ORDER = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"] as const;

const products = [
  {
    id: "amber-blaze-classic-tee",
    name: "Amber Blaze Classic Tee",
    category: "Tees",
    color: "Amber Blaze",
    sizeRange: "XS - XXXL",
    price: "$250",
    priceValue: 250,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "mystic-mauve-everyday-crew",
    name: "Mystic Mauve Everyday Crew",
    category: "Tees",
    color: "Mystic Mauve",
    sizeRange: "S - XXL",
    price: "$350",
    priceValue: 350,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "amber-blaze-softwear-coat",
    name: "Amber Blaze Softwear Coat",
    category: "Coats",
    color: "Amber Blaze",
    sizeRange: "S - XL",
    price: "$500",
    priceValue: 500,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "golden-hour-relaxed-tee",
    name: "Golden Hour Relaxed Tee",
    category: "Tees",
    color: "Amber Blaze",
    sizeRange: "XS - XXL",
    price: "$220",
    priceValue: 220,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sunset-pullover-hoodie",
    name: "Sunset Pullover Hoodie",
    category: "Hoodies",
    color: "Amber Blaze",
    sizeRange: "S - XXL",
    price: "$310",
    priceValue: 310,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "emerald-everyday-crew",
    name: "Emerald Everyday Crew",
    category: "Tees",
    color: "Emerald",
    sizeRange: "S - XL",
    price: "$280",
    priceValue: 280,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
  },
];

type Product = (typeof products)[number];

function matchesSize(sizeRange: string, size: string) {
  const [from, to] = sizeRange.split(" - ").map((part) => part.trim());
  const fromIndex = SIZE_ORDER.indexOf(from as (typeof SIZE_ORDER)[number]);
  const toIndex = SIZE_ORDER.indexOf(to as (typeof SIZE_ORDER)[number]);
  const sizeIndex = SIZE_ORDER.indexOf(size as (typeof SIZE_ORDER)[number]);

  if (fromIndex === -1 || toIndex === -1 || sizeIndex === -1) return false;
  return sizeIndex >= fromIndex && sizeIndex <= toIndex;
}

function matchesPrice(priceValue: number, priceFilter: string) {
  switch (priceFilter) {
    case "Under $250":
      return priceValue < 250;
    case "$250 - $350":
      return priceValue >= 250 && priceValue <= 350;
    case "$350 - $500":
      return priceValue >= 350 && priceValue <= 500;
    case "$500+":
      return priceValue >= 500;
    default:
      return true;
  }
}

function StarRating({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-0.5 text-gray-900",
        className,
      )}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-3 fill-current sm:size-3.5"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export default function Discover() {
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const category = selected.Category;
    const size = selected.Size;
    const color = selected.Color;
    const price = selected.Price;
    const search = query.trim().toLowerCase();

    if (search && !product.name.toLowerCase().includes(search)) return false;
    if (category && category !== "All" && product.category !== category)
      return false;
    if (size && !matchesSize(product.sizeRange, size)) return false;
    if (color && product.color !== color) return false;
    if (price && !matchesPrice(product.priceValue, price)) return false;

    return true;
  });

  return (
    <section className="bg-neutral-100 px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1400px] rounded-[2rem] bg-neutral-50 px-5 py-8 sm:px-10 sm:py-10">
        {/* Top row: Filter by / Search */}
        <div className="flex items-center justify-between">
          <h2 className="font-geist text-2xl font-medium tracking-tight text-gray-900 sm:text-3xl">
            Filter by
          </h2>
          <h2 className="font-geist text-2xl font-medium tracking-tight text-gray-900 sm:text-3xl">
            Search
          </h2>
        </div>

        {/* Filter controls row */}
        <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => {
              const value = selected[filter.label] ?? "";

              return (
                <DropdownMenu key={filter.label}>
                  <DropdownMenuTrigger
                    className={cn(
                      "inline-flex h-auto items-center gap-8 rounded-full border-0 bg-neutral-200/70 px-5 py-3 text-sm text-gray-500 shadow-none outline-none transition-colors hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-ring/40 sm:gap-10",
                      value && "text-gray-900",
                    )}
                  >
                    <span>{value || filter.label}</span>
                    <ChevronDown className="size-3.5 opacity-70" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    sideOffset={8}
                    className="min-w-44 rounded-2xl p-2"
                  >
                    <DropdownMenuRadioGroup
                      value={value}
                      onValueChange={(next) =>
                        setSelected((prev) => ({
                          ...prev,
                          [filter.label]: next,
                        }))
                      }
                    >
                      {filter.options.map((option) => (
                        <DropdownMenuRadioItem
                          key={option}
                          value={option}
                          className="rounded-lg px-3 py-2 text-sm text-gray-600"
                        >
                          {option}
                        </DropdownMenuRadioItem>
                      ))}
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            })}
            <Button
              type="button"
              variant="ghost"
              disabled={!Object.keys(selected).length && !query}
              onClick={() => {
                setSelected({});
                setQuery("");
              }}
              className="h-auto rounded-full px-5 py-3 text-sm text-gray-500 hover:bg-neutral-200/70 hover:text-gray-900 disabled:opacity-40"
            >
              Reset
            </Button>
          </div>

          <div className="relative w-full sm:w-64">
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="search"
              className="h-auto rounded-full border-0 bg-neutral-200/70 px-5 py-3 pr-11 text-sm shadow-none placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-ring/40"
            />
            <Search className="pointer-events-none absolute top-1/2 right-5 size-4 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Main content: sidebar + product grid */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* Left sidebar */}
          <div className="flex flex-col self-start lg:sticky lg:top-8">
            <span className="font-geist text-xs text-gray-400">/02</span>
            <h3 className="mt-4 font-geist text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl">
              Discover
              <br />
              Reimagined
            </h3>
            <p className="mt-4 max-w-xs font-geist text-sm leading-relaxed text-gray-500">
              From tees to hoodies, every piece is crafted with next-gen fabric
              innovation and future-forward comfort.
            </p>

            <Button className="mt-8 h-auto w-fit gap-3 rounded-full bg-gray-950 py-1.5 pr-1.5 pl-5 text-sm text-white hover:bg-gray-800">
              Explore All
              <span className="flex size-8 items-center justify-center rounded-full bg-white text-gray-950">
                <ArrowUpRight className="size-4" strokeWidth={2} />
              </span>
            </Button>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group relative z-0 transition-[z-index] duration-0 hover:z-20"
              >
                {/* One continuous card — expands down over the meta on hover */}
                <div className="overflow-hidden rounded-2xl transition-shadow duration-300 ease-out group-hover:bg-white group-hover:shadow-xl group-hover:ring-2 group-hover:ring-[#f08a2e]">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-stone-100 group-hover:rounded-none group-hover:rounded-t-2xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    <WishlistButton
                      product={{
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      }}
                    />

                    <button
                      type="button"
                      aria-label={`View ${product.name}`}
                      className="absolute right-4 bottom-4 z-10 flex size-10 translate-y-2 items-center justify-center rounded-full bg-white text-gray-950 opacity-0 shadow-md transition-all duration-300 hover:scale-105 group-hover:translate-y-0 group-hover:opacity-100 sm:right-5"
                    >
                      <ArrowUpRight className="size-4" strokeWidth={2} />
                    </button>
                  </div>

                  {/* Meta sits under the image; on hover it becomes the card’s bottom panel */}
                  <div className="bg-transparent px-0 pt-4 transition-all duration-300 ease-out group-hover:bg-white group-hover:px-5 group-hover:pt-4 group-hover:pb-4">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-geist text-sm font-medium leading-snug text-gray-900 transition-all group-hover:max-w-[12rem] group-hover:text-base group-hover:font-semibold sm:text-base">
                        {product.name}
                      </h4>
                      <StarRating className="mt-0.5" />
                    </div>

                    <div className="mt-2 flex items-center justify-between transition-all group-hover:mt-3 group-hover:items-end">
                      <span className="font-geist text-xl font-semibold text-gray-900 group-hover:order-2">
                        {product.price}
                      </span>
                      <span className="font-geist text-xs text-gray-400 group-hover:order-1 group-hover:text-sm group-hover:text-gray-500">
                        {product.sizeRange}
                      </span>
                    </div>

                    <AddToCartButton
                      product={{
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      }}
                      className="mt-3 group-hover:mt-3"
                    />
                  </div>
                </div>
              </article>
            ))}
            {filteredProducts.length === 0 && (
              <p className="col-span-full py-16 text-center font-geist text-sm text-gray-400">
                No products match your filters.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
