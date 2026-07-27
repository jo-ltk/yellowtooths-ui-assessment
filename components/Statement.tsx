export default function Statement() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4 text-center font-display text-[2.1rem] font-light leading-none tracking-tight text-gray-900 sm:gap-x-4 sm:text-6xl lg:gap-x-5 lg:text-7xl">
        <span>WHERE EVERY</span>

        {/* Video chip */}
        <span className="relative inline-block h-10 w-16 shrink-0 overflow-hidden rounded-full align-middle sm:h-14 sm:w-24 lg:h-16 lg:w-28">
          <span className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-stone-200 to-stone-300" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/80 sm:h-7 sm:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-0.5 h-2.5 w-2.5 text-gray-800 sm:h-3.5 sm:w-3.5"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </span>

        <span>DROP IS A</span>
      </p>

      <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-4 text-center font-display text-[2.1rem] font-light leading-none tracking-tight text-gray-900 sm:mt-6 sm:gap-x-4 sm:text-6xl lg:gap-x-5 lg:text-7xl">
        <span>PORTAL</span>

        {/* Model chip — arched */}
        <span className="relative inline-block h-12 w-9 shrink-0 overflow-hidden rounded-t-full rounded-b-md align-middle sm:h-16 sm:w-12 lg:h-[4.5rem] lg:w-14">
          <span className="absolute inset-0 bg-gradient-to-b from-sky-100 via-rose-100 to-teal-100" />
        </span>

        <span>TO A HIDDEN</span>

        {/* Perfume bottle chip */}
        <span className="relative inline-block h-10 w-10 shrink-0 overflow-hidden rounded-2xl align-middle sm:h-14 sm:w-14 lg:h-16 lg:w-16">
          <span className="absolute inset-0 bg-gradient-to-b from-amber-100 via-rose-50 to-pink-100" />
        </span>

        <span>WORLD</span>
      </p>
    </section>
  );
}
