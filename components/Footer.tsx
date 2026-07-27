const words = Array.from({ length: 12 }, () => "novure");

export default function Footer() {
  // Two identical tracks so the loop has no seam
  const track = [...words, ...words];

  return (
    <footer className="bg-white pt-14 sm:pt-16">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <h3 className="font-geist text-base font-medium text-gray-900">
              Contact
            </h3>
            <ul className="mt-4 space-y-1.5 font-geist text-sm text-gray-500">
              <li>Hello@novure.com</li>
              <li>Support@novure.com</li>
              <li>+1234 5678 90</li>
            </ul>
          </div>

          <div className="sm:text-center">
            <h3 className="font-geist text-base font-medium text-gray-900">
              Social Media
            </h3>
            <ul className="mt-4 space-y-1.5 font-geist text-sm text-gray-500 sm:inline-block sm:text-left">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>

          <div className="sm:text-right">
            <h3 className="font-geist text-base font-medium text-gray-900">
              Company
            </h3>
            <ul className="mt-4 space-y-1.5 font-geist text-sm">
              <li className="text-gray-700">News &amp; update</li>
              <li className="text-gray-400">About us</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Giant cropped wordmark — continuous marquee */}
      <div className="h-24 overflow-hidden sm:h-32 lg:h-40" aria-hidden="true">
        <div className="animate-footer-marquee flex w-max">
          {track.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="-mb-6 shrink-0 pr-6 font-geist text-[6.5rem] font-bold leading-none tracking-tight text-gray-900 sm:pr-8 sm:text-[9rem] lg:pr-10 lg:text-[11rem]"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
