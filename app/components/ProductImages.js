"use client";

import { useState } from "react";
import ImageSlider from "./ImageSlider";

// Shows a product's photos in the slider.
// - Products with `images` only: plain slider.
// - Products with `colors`: round colour buttons appear on the card, and
//   clicking one switches the slider to that colour's photos.
export default function ProductImages({ images = [], colors = [] }) {
  const [selected, setSelected] = useState(0);

  const hasColors = colors.length > 0;
  const active = hasColors ? colors[selected] || colors[0] : null;
  const activeImages = hasColors ? active.images : images;

  return (
    <>
      {/* key makes the slider restart from the first photo on colour change */}
      <ImageSlider
        key={hasColors ? active.name : "single"}
        images={activeImages}
      />

      {colors.length > 1 && (
        <div
          className="absolute right-4 top-4 z-20 flex items-center gap-2"
          role="group"
          aria-label="Choose colour"
        >
          {colors.map((color, index) => (
            <button
              key={color.name}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Show ${color.name} colour`}
              aria-pressed={selected === index}
              title={color.name}
              style={{ backgroundColor: color.hex }}
              className={`h-7 w-7 rounded-full border-2 border-white shadow-md transition hover:scale-110 ${
                selected === index ? "ring-2 ring-[#70283f]" : ""
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
}