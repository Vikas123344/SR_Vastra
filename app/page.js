import ProductCard from "./components/ProductCard";

const WHATSAPP_NUMBER = "919848035063";

// Builds a slide list from a public/ folder and file names.
// ["file-name-without-extension", "label for alt text", "optional crop position"]
// If a file name includes an extension (e.g. "photo.jpg") it is used as is.
// Otherwise ".png" is added, so mixed jpg/png folders work.
const slides = (folder, name, files) =>
  files.map(([file, label, position]) => ({
    src: file.includes(".") ? `/${folder}/${file}` : `/${folder}/${file}.png`,
    alt: `${name} - ${label}`,
    position: position || "center",
  }));

// =====================================================
// ADD A NEW CARD = ADD ONE OBJECT TO THIS LIST.
// Put its images in public/<folder>/ and list them below.
// =====================================================
const products = [
  {
    id: 1,
    name: "Cotton Discharge Print",
    category: "EVERYDAY ELEGANCE",
    // price: "₹999",
    images: slides("images", "The Everyday Kurta", [
      ["front-view", "front view"],
      ["back-view", "back view"],
      ["side-view", "side view"],
      ["fabric-detail", "fabric detail"],
      ["neckline-detail", "neckline detail"],
      ["sleeve-detail", "sleeve detail"],
    ]),
  },
  {
    id: 2,
    name: "Mul Cotton Tie Up Dress",
    category: "MADE FOR CELEBRATIONS",
    // price: "₹1,599",
    images: slides("images_2", "The Festive Collection", [
      ["front-view", "front view"],
      ["back-view", "back view"],
      ["side-view", "side view"],
      ["skirt-hem-detail", "skirt hem detail"],
      ["neckline-embroidery-detail", "neckline embroidery detail"],
      ["sleeve-detail", "sleeve detail"],
    ]),
  },
  {
    id: 3,
    name: "3-Piece Anarkali Salwar Suit Set",
    category: "TIMELESS CLASSICS",
    // price: "₹1,899",
    images: slides("images_3", "The Timeless Suit", [
      ["front-view", "front view", "center top"],
      ["back-view", "back view"],
      ["side-view", "side view"],
      ["dupatta-border-detail", "dupatta border detail"],
      ["neckline-embroidery-detail", "neckline embroidery detail"],
      ["sleeve-detail", "sleeve detail"],
    ]),
  },
  // ---- New cards: replace names, prices, folders and file names ----
  {
    id: 4,
    name: "Olive Green & Purple Ethnic Kurta Set",
    category: "CASUAL COMFORT",
    // price: "₹1,699",
    images: slides("image_4", "The Cotton Co-ord", [
      ["01_front_view.jpg", "front view"],
      ["02_side_view.jpg", "side view"],
      ["03_back_view.jpg", "back view"],
      ["neckline-detail.png", "neckline detail"],
      ["sleeve-detail.png", "sleeve detail"],
      ["skirt-hem-detail.png", "skirt hem detail"],
    ]),
  },
  {
    id: 5,
    name: "Girls Traditional Peter Collar Frock",
    category: "WEDDING SEASON",
    // price: "₹3,499",
    // Two colours: click a circle on the card to switch photos.
    colors: [
      {
        name: "Purple",
        hex: "#8a2d7a",
        images: slides("images_5/1", "The Bridal Anarkali - purple", [
          ["front-view", "front view"],
          ["side-view", "side view"],
          ["back-view", "back view"],
          ["neckline-detail", "neckline detail"],
          ["sleeve-detail", "sleeve detail"],
          ["skirt-hem-detail", "skirt hem detail"],
        ]),
      },
      {
        name: "Royal Blue",
        hex: "#1a4494",
        images: slides("images_5/2", "The Bridal Anarkali - royal blue", [
          ["front-view", "front view"],
          ["side-view", "side view"],
          ["back-view", "back view"],
          ["neckline-detail", "neckline detail"],
          ["sleeve-detail", "sleeve detail"],
          ["skirt-hem-detail", "skirt hem detail"],
        ]),
      },
    ],
  },
  {
    id: 6,
    name: "3-Piece Plum - Purple Digital Printed Kurta Set",
    category: "WORKWEAR EDIT",
    // price: "₹1,999",
    images: slides("images_6", "The Office Kurta Set", [
      ["front-view", "front view"],
      ["side-view", "side view"],
      ["back-view", "back view"],
      ["neckline-detail", "neckline detail"],
      ["sleeve-detail", "sleeve detail"],
      ["print-hem-detail", "printed hem detail"],
    ]),
  },
  // ---- Card 7: Saree in four colours (folders images_7/1 to images_7/4) ----
  {
    id: 7,
    name: "The Checked Saree",
    category: "SUMMER EDIT",
    // price: "₹1,599",
    // Four colours: click a circle on the card to switch photos.
    colors: [
      {
        name: "Green",
        hex: "#2e6b3f",
        images: slides("images_7/1", "The Checked Saree - green", [
          ["front-view", "front view"],
          ["side-view", "side view"],
          ["back-view", "back view"],
          ["border-detail", "border detail"],
          ["pallu-tassel-detail", "pallu tassel detail"],
          ["pleats-drape-detail", "pleats drape detail"],
        ]),
      },
      {
        name: "Black",
        hex: "#1c1c1c",
        images: slides("images_7/2", "The Checked Saree - black", [
          ["front-view", "front view"],
          ["side-view", "side view"],
          ["back-view", "back view"],
          ["border-detail", "border detail"],
          ["pallu-tassel-detail", "pallu tassel detail"],
          ["pleats-drape-detail", "pleats drape detail"],
        ]),
      },
      {
        name: "Blue",
        hex: "#1f3fbf",
        images: slides("images_7/3", "The Checked Saree - blue", [
          ["saree_1", "front view"],
          ["saree_2", "side view"],
          ["saree_3", "back view"],
          ["saree_4", "border detail"],
          ["saree_5", "pallu tassel detail"],
          ["saree_6", "pleats drape detail"],
        ]),
      },
      {
        name: "Purple",
        hex: "#7b1f6e",
        images: slides("images_7/4", "The Checked Saree - purple", [
          ["saree_purple_1", "front view"],
          ["saree_purple_2", "close-up view"],
          ["saree_purple_3", "back view"],
          ["saree_purple_4", "border detail"],
          ["saree_purple_5", "pallu tassel detail"],
          ["saree_purple_6", "pleats drape detail"],
        ]),
      },
    ],
  },
  // ---- Card 8: Embroidered Anarkali (folder images_8) ----
  {
    id: 8,
    name: "The Embroidered Anarkali",
    category: "FESTIVE FAVOURITES",
    // price: "₹2,799",
    images: slides("images_8", "The Embroidered Anarkali", [
      ["saree_teal_1", "front view"],
      ["saree_teal_2", "side view"],
      ["saree_teal_3", "back view"],
      ["saree_teal_4", "neckline embroidery detail"],
      ["saree_teal_5", "sleeve lace detail"],
      ["saree_teal_6", "embroidery and border detail"],
    ]),
  },
  // ---- Card 9: Embroidered Kurta (folder images_9) ----
  {
    id: 9,
    name: "The Embroidered Kurta",
    category: "EASY ELEGANCE",
    // price: "₹1,799",
    images: slides("images_9", "The Embroidered Kurta", [
      ["front-view", "front view"],
      ["side-view", "side view"],
      ["back-view", "back view"],
      ["neckline-detail", "neckline embroidery detail"],
      ["sleeve-detail", "sleeve embroidery detail"],
      ["fabric-detail", "fabric detail"],
    ]),
  },
];

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Announcement */}
      <div className="bg-[#70283f] px-4 py-3 text-center text-[10px] tracking-[3px] text-white sm:text-xs">
        A LITTLE TRADITION, A LOT OF LOVE ✨
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#eadfd7] bg-[#fffaf3]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/sr-vastra-logo.jpeg"
              alt="SR Vastra - By Sisters logo"
              className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
            />

            <div>
              <p className="font-serif text-xl tracking-wider text-[#70283f] sm:text-2xl">
                SR VASTRA
              </p>
              <p className="text-[9px] tracking-[4px] text-[#a8874f]">
                BY SISTERS
              </p>
            </div>
          </a>

          <nav className="flex w-full items-center justify-center gap-5 text-xs sm:gap-7 lg:w-auto lg:text-sm">
            <a href="#home" className="hover:text-[#b99a5b]">
              Home
            </a>
            <a href="#collection" className="hover:text-[#b99a5b]">
              Collections
            </a>
            <a href="#about" className="hover:text-[#b99a5b]">
              Our Story
            </a>
            <a href="#contact" className="hover:text-[#b99a5b]">
              Contact
            </a>
          </nav>

          <a
            href={whatsappLink(
              "Hello SR Vastra! I would like to explore your collection."
            )}
            target="_blank"
            rel="noreferrer"
            className="hidden border border-[#70283f] px-5 py-3 text-xs text-[#70283f] transition hover:bg-[#70283f] hover:text-white lg:block"
          >
            Enquire on WhatsApp ↗
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-10 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-16"
      >
        <div className="order-2 lg:order-1">
          <p className="text-xs tracking-[3px] text-[#a8874f]">
            ROOTED IN TRADITION · MADE WITH LOVE
          </p>

          <h1 className="mt-6 font-serif text-5xl leading-tight text-[#30242a] sm:text-6xl lg:text-7xl">
            Tradition,
            <br />
            woven with <span className="italic text-[#70283f]">grace.</span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-8 text-[#776b68] sm:text-base">
            Discover ethnic wear that celebrates your roots, your traditions,
            and the beauty of being yourself. Find something beautiful for
            every occasion.
          </p>

          <a
            href="#collection"
            className="mt-8 inline-flex items-center gap-5 bg-[#70283f] px-7 py-4 text-xs tracking-widest text-white transition hover:bg-[#4f1b2c]"
          >
            EXPLORE COLLECTION <span>→</span>
          </a>

          <p className="mt-6 font-serif text-sm italic text-[#8a7773]">
            Thoughtfully chosen. Beautifully worn.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative h-[390px] sm:h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1100&q=90"
              alt="Indian ethnic fashion inspiration"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 bg-[#fffaf3]/95 p-4">
              <span className="text-[9px] tracking-[2px] text-[#70283f]">
                THE ART OF DRESSING
              </span>
              <span className="font-serif text-sm italic text-[#a8874f]">
                Beautifully, always.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand values */}
      <section className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 border-y border-[#eadfd7] px-4 py-6 text-[9px] tracking-[2px] text-[#70283f] sm:gap-x-12 sm:text-xs">
        <span>TIMELESS STYLE</span>
        <span className="text-[#b99a5b]">✳</span>
        <span>INDIAN HERITAGE</span>
        <span className="text-[#b99a5b]">✳</span>
        <span>MADE FOR YOU</span>
      </section>

      {/* Collections */}
      <section
        id="collection"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-10 sm:py-24 lg:px-16"
      >
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs tracking-[3px] text-[#a8874f]">
              THE SR VASTRA EDIT
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#30242a] sm:text-5xl">
              Find your{" "}
              <span className="italic text-[#70283f]">
                kind of beautiful.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#776b68]">
            Pieces for everyday moments, family gatherings, festivities, and
            everything in between.
          </p>
        </div>

        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              whatsappNumber={WHATSAPP_NUMBER}
            />
          ))}
        </div>

        <p className="mt-6 text-xs leading-6 text-[#776b68]">
          Product details and prices shown are examples. Replace them with your
          actual collection before publishing.
        </p>
      </section>

      {/* Our story */}
      <section id="about" className="grid bg-[#f4ece3] lg:grid-cols-2">
        <div className="h-[340px] sm:h-[480px] lg:h-full lg:min-h-[540px]">
          <img
            src="https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=85"
            alt="Fashion and textile inspiration"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-14 sm:px-14 sm:py-20 lg:px-20">
          <p className="text-xs tracking-[3px] text-[#a8874f]">
            A BRAND BUILT ON SISTERHOOD
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#30242a] sm:text-5xl">
            More than clothes.
            <br />
            <span className="italic text-[#70283f]">A feeling.</span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#776b68]">
            SR Vastra – By Sisters is a celebration of Indian style, timeless
            traditions, and the confidence that comes from wearing something
            you truly love.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#776b68]">
            Inspired by our love for ethnic fashion, we want every outfit to
            make your everyday moments and special celebrations feel a little
            more beautiful.
          </p>

          <a
            href="#contact"
            className="mt-8 w-fit border-b border-[#70283f] pb-2 text-xs tracking-widest text-[#70283f]"
          >
            CONNECT WITH US →
          </a>
        </div>
      </section>

      {/* WhatsApp contact */}
      <section
        id="contact"
        className="px-5 py-20 text-center sm:px-10 sm:py-28"
      >
        <p className="text-xs tracking-[3px] text-[#a8874f]">
          WE WOULD LOVE TO HEAR FROM YOU
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#30242a] sm:text-5xl">
          Your next favourite outfit{" "}
          <span className="italic text-[#70283f]">awaits.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-8 text-[#776b68]">
          Have a question about a style, size, or availability? Message us and
          let us help you find something beautiful.
        </p>

        <a
          href={whatsappLink(
            "Hello SR Vastra – By Sisters! I'd love to know more about your ethnic-wear collection."
          )}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-3 bg-[#70283f] px-7 py-4 text-xs tracking-widest text-white transition hover:bg-[#4f1b2c]"
        >
          CHAT WITH US ON WHATSAPP ↗
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#302126] px-5 py-10 text-center text-[#fffaf3]">
        <a href="#home" className="inline-flex flex-col items-center">
          <img
            src="/sr-vastra-logo.jpeg"
            alt="SR Vastra logo"
            className="mb-3 h-16 w-16 rounded-full object-cover"
          />

          <span className="font-serif text-2xl tracking-[3px]">
            SR VASTRA
          </span>

          <span className="mt-1 text-[9px] tracking-[4px] text-[#d5b786]">
            BY SISTERS
          </span>
        </a>

        <p className="mt-5 font-serif text-sm italic text-[#e2d2ce]">
          Tradition, woven with grace.
        </p>

        <a
          href={whatsappLink("Hello SR Vastra!")}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block text-xs text-[#e6cba1] hover:text-white"
        >
          CONTACT US ↗
        </a>

        <p className="mt-8 border-t border-white/15 pt-5 text-xs text-[#d2c4c5]">
          © {new Date().getFullYear()} SR Vastra – By Sisters. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}