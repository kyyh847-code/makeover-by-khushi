import { motion } from "motion/react";
import { useState } from "react";

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/assets/images/photo1.png",
    alt: "Bridal makeup look",
    category: "Bridal",
    caption: "Radiant Bridal Transformation",
  },
  {
    src: "/assets/images/photo2.png",
    alt: "Bride in elegant attire",
    category: "Bridal",
    caption: "Classic Bride — Timeless Elegance",
  },
  {
    src: "/assets/images/photo3.png",
    alt: "Bridal look with jewelry",
    category: "Bridal",
    caption: "Jewelled Bridal Artistry",
  },
  {
    src: "/assets/images/photo4.png",
    alt: "Bridal makeup closeup",
    category: "Bridal",
    caption: "HD Bridal Glow — Flawless Finish",
  },
  {
    src: "/assets/images/photo5.png",
    alt: "Festive makeup look",
    category: "Bridal",
    caption: "Festive Bridal Makeover",
  },
  {
    src: "/assets/images/photo6.png",
    alt: "Party makeup look",
    category: "Glamour",
    caption: "Cocktail Party Glam",
  },
  {
    src: "/assets/images/photo7.png",
    alt: "Bridal reception look",
    category: "Glamour",
    caption: "Reception Night Look",
  },
  {
    src: "/assets/images/photo8.png",
    alt: "Professional makeup shoot",
    category: "BTS",
    caption: "Behind The Scenes — Studio Magic",
  },
  {
    src: "/assets/images/photo9.png",
    alt: "Engagement makeup look",
    category: "Bridal",
    caption: "Engagement Ceremony Look",
  },
];

const categories = ["All", "Bridal", "Glamour", "SFX", "BTS"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <section
      id="gallery"
      className="py-24 relative overflow-hidden"
      style={{ background: "#F5EDE0" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A96E, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "rgba(139,69,19,0.1)",
              color: "#8B4513",
              border: "1px solid rgba(139,69,19,0.2)",
            }}
          >
            Portfolio
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#3D2B1F" }}
          >
            Our Work
          </h2>
          <p
            className="font-body max-w-lg mx-auto"
            style={{ color: "#7A5C4A" }}
          >
            A curated showcase of transformations — from radiant brides to
            cinematic SFX.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-ocid="gallery.filter_tabs"
        >
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold font-body transition-smooth"
              style={
                activeCategory === cat
                  ? {
                      background: "linear-gradient(135deg, #8B4513, #C9A96E)",
                      color: "#fff",
                      boxShadow: "0 4px 15px rgba(139,69,19,0.3)",
                    }
                  : {
                      background: "rgba(255,255,255,0.8)",
                      color: "#7A5C4A",
                      border: "1px solid rgba(201,169,110,0.3)",
                    }
              }
              data-ocid={`gallery.filter.${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer"
              style={{
                boxShadow:
                  hoveredIndex === i
                    ? "0 20px 50px rgba(139,69,19,0.25)"
                    : "0 4px 20px rgba(139,69,19,0.1)",
                transition: "box-shadow 0.3s ease",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover"
                style={{
                  transform: hoveredIndex === i ? "scale(1.08)" : "scale(1)",
                  transition: "transform 0.5s ease",
                }}
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-4"
                style={{
                  background:
                    "linear-gradient(to top, rgba(44,24,16,0.85) 0%, transparent 50%)",
                  opacity: hoveredIndex === i ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <span
                  className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold mb-2 w-fit"
                  style={{
                    background: "rgba(201,169,110,0.8)",
                    color: "#3D2B1F",
                  }}
                >
                  {item.category}
                </span>
                <p className="font-display text-white text-sm font-medium">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
