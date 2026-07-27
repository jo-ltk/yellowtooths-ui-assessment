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

const products = [
  {
    name: "Amber Blaze Classic Tee",
    sizeRange: "XS - XXXL",
    price: "$250",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mystic Mauve Everyday Crew",
    sizeRange: "S - XXL",
    price: "$350",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Amber Blaze Softwear Coat",
    sizeRange: "S - XL",
    price: "$500",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Golden Hour Relaxed Tee",
    sizeRange: "XS - XXL",
    price: "$220",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sunset Pullover Hoodie",
    sizeRange: "S - XXL",
    price: "$310",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Emerald Everyday Crew",
    sizeRange: "S - XL",
    price: "$280",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
  },
];

function StarRating() {
  return (
    <div className="flex shrink-0 items-center gap-0.5 text-gray-900">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3 fill-current" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Discover() {
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

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
              const value = selected[filter.label];

              return (
                <DropdownMenu key={filter.label}>
                  <DropdownMenuTrigger
                    className={cn(
                      "inline-flex h-auto items-center gap-8 rounded-full border-0 bg-neutral-200/70 px-5 py-3 text-sm text-gray-500 shadow-none outline-none transition-colors hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-ring/40 sm:gap-10",
                      value && "text-gray-900",
                    )}
                  >
                    <span>{value ?? filter.label}</span>
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
              <article key={product.name} className="flex flex-col">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-stone-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                    className="object-cover"
                  />
                </div>

                <div className="mt-4 flex items-start justify-between gap-2">
                  <h4 className="font-geist text-sm font-medium leading-snug text-gray-900 sm:text-base">
                    {product.name}
                  </h4>
                  <StarRating />
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span className="font-geist text-xs text-gray-400">
                    {product.sizeRange}
                  </span>
                  <span className="font-geist text-xl font-semibold text-gray-900">
                    {product.price}
                  </span>
                </div>
              </article>
            ))}

            {filteredProducts.length === 0 && (
              <p className="col-span-full py-16 text-center font-geist text-sm text-gray-400">
                No products match your search.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
