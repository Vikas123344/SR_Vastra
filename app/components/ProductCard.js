"use client";

import { useState } from "react";
import ImageSlider from "./ImageSlider";

// One product card: image slider on top, details below.
// If the product has `colors`, round colour buttons appear in the details
// (under the name). Clicking one switches the photos to that colour.
export default function ProductCard({ product, index, whatsappNumber }) {
  const [selected, setSelected] = useState(0);

  const colors = product.colors || [];
  const hasColors = colors.length > 0;
  const active = hasColors ? colors[selected] || colors[0] : null;
  const images = hasColors ? active.images : product.images || [];

  const message =
    `Hello SR Vastra! I'm interested in ${product.name}` +
    (hasColors ? ` in ${active.name}` : "") +
    `, listed at ${product.price}. Please share the available sizes, colours, and ordering details.`;

  const enquireHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <article className="group min-w-0">
      {/* All product sliders use the same dimensions */}
      <div className="relative h-[480px] w-full overflow-hidden bg-[#f2e9df] sm:h-[560px] lg:h-[600px]">
        {/* key restarts the slider from the first photo when the colour changes */}
        <ImageSlider key={hasColors ? active.name : "single"} images={images} />

        <span className="absolute left-4 top-4 z-20 bg-[#fffaf3] px-3 py-2 text-xs text-[#70283f]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="mt-5 text-[10px] tracking-[2px] text-[#a8874f]">
        {product.category}
      </p>

      <h3 className="mt-2 font-serif text-2xl text-[#30242a]">
        {product.name}
      </h3>

      {/* Colour buttons (only for products that have colours) */}
      {colors.length > 1 && (
        <div className="mt-3 flex items-center gap-3">
          <span className="text-[10px] tracking-[2px] text-[#776b68]">
            COLOUR:{" "}
            <span className="text-[#30242a]">{active.name.toUpperCase()}</span>
          </span>

          <div
            className="flex items-center gap-2"
            role="group"
            aria-label="Choose colour"
          >
            {colors.map((color, i) => (
              <button
                key={color.name}
                type="button"
                onClick={() => setSelected(i)}
                aria-label={`Show ${color.name} colour`}
                aria-pressed={selected === i}
                title={color.name}
                style={{ backgroundColor: color.hex }}
                className={`h-6 w-6 rounded-full border border-black/10 transition hover:scale-110 ${
                  selected === i
                    ? "ring-2 ring-[#70283f] ring-offset-2 ring-offset-[#fffaf3]"
                    : ""
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 flex items-center justify-between border-b border-[#eadfd7] pb-4">
        <span className="text-sm">{product.price}</span>

        <a
          href={enquireHref}
          target="_blank"
          rel="noreferrer"
          className="text-xs tracking-widest text-[#70283f] hover:text-[#b99a5b]"
        >
          ENQUIRE ↗
        </a>
      </div>
    </article>
  );
}