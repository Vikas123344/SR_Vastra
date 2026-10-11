"use client";

import { useEffect, useRef, useState } from "react";

// Reusable slider. Pass any list of images:
//   <ImageSlider images={[{ src, alt, position? }]} />
// position (optional) controls which part stays visible when object-cover crops.
//
// Autoplay is tied to the wall clock, so every slider on the page changes
// at the same moment (every `interval` ms), even after manual clicks.
export default function ImageSlider({
  images = [],
  autoPlay = true,
  interval = 3000,
}) {
  const [current, setCurrent] = useState(0);
  const lastClick = useRef(0);
  const total = images.length;

  // Always a valid index, even if `current` is stale or the list changed size.
  const index = total ? current % total : 0;

  // Shared-clock autoplay: wait until the next multiple of `interval`.
  useEffect(() => {
    if (!autoPlay || total < 2) return;

    let timeout;

    const schedule = () => {
      const delay = interval - (Date.now() % interval);

      timeout = setTimeout(() => {
        // If the visitor just clicked, skip this tick so the slide
        // doesn't change right under their finger.
        if (Date.now() - lastClick.current > interval / 2) {
          setCurrent((previous) => (previous + 1) % total);
        }
        schedule();
      }, delay);
    };

    schedule();

    return () => clearTimeout(timeout);
  }, [autoPlay, interval, total]);

  // Nothing to show (hooks above must stay before this early return)
  if (!total) return null;

  const slide = images[index];

  const goTo = (nextIndex) => {
    lastClick.current = Date.now();
    setCurrent(nextIndex);
  };

  const previousSlide = () => goTo((index - 1 + total) % total);
  const nextSlide = () => goTo((index + 1) % total);

  return (
    <div className="slider-container">
      <img
        key={slide.src}
        src={slide.src}
        alt={slide.alt}
        className="animate-image-change absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: slide.position || "center" }}
      />

      {/* Previous button */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#fffaf3]/90 text-xl text-[#70283f] shadow-md transition hover:bg-white sm:h-12 sm:w-12"
      >
        &#8592;
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next image"
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#fffaf3]/90 text-xl text-[#70283f] shadow-md transition hover:bg-white sm:h-12 sm:w-12"
      >
        &#8594;
      </button>

      {/* Image indicators */}
      <div className="absolute bottom-3 left-0 z-10 flex w-full items-center justify-center gap-2">
        {images.map((image, dotIndex) => (
          <button
            key={image.src}
            type="button"
            onClick={() => goTo(dotIndex)}
            aria-label={`Show image ${dotIndex + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === dotIndex ? "w-6 bg-[#70283f]" : "w-2 bg-[#fffaf3]/90"
            }`}
          />
        ))}
      </div>
    </div>
  );
}