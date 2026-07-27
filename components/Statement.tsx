import Image from "next/image";

export default function Statement() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 text-center font-display text-[2.1rem] font-light leading-none tracking-tight text-gray-900 sm:gap-x-4 sm:text-6xl lg:gap-x-5 lg:text-7xl">
        <span>WHERE EVERY</span>

        {/* Drop chip — oval portrait */}
        <span className="relative inline-block h-10 w-16 shrink-0 overflow-hidden rounded-full align-middle sm:h-14 sm:w-24 lg:h-16 lg:w-28">
          <Image
            src="/statement/drop-v2.png"
            alt=""
            fill
            sizes="112px"
            className="object-cover"
          />
        </span>

        <span>DROP IS A</span>
      </p>

      <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-4 text-center font-display text-[2.1rem] font-light leading-none tracking-tight text-gray-900 sm:mt-6 sm:gap-x-4 sm:text-6xl lg:gap-x-5 lg:text-7xl">
        <span>PORTAL</span>

        {/* Portal chip — arched */}
        <span className="relative inline-block h-12 w-9 shrink-0 overflow-hidden rounded-t-full rounded-b-md align-middle sm:h-16 sm:w-12 lg:h-[4.5rem] lg:w-14">
          <Image
            src="/statement/portal-v2.png"
            alt=""
            fill
            sizes="56px"
            className="object-cover"
          />
        </span>

        <span>TO A HIDDEN</span>

        {/* Hidden world chip — perfume bottle */}
        <span className="relative inline-block h-10 w-10 shrink-0 overflow-hidden rounded-2xl align-middle sm:h-14 sm:w-14 lg:h-16 lg:w-16">
          <Image
            src="/statement/hidden-v2.png"
            alt=""
            fill
            sizes="64px"
            className="object-cover"
          />
        </span>

        <span>WORLD</span>
      </p>
    </section>
  );
}
