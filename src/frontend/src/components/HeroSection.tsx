import { motion } from "motion/react";
import { Suspense } from "react";
import Hero3DCanvas from "./Hero3DCanvas";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #2C1810 0%, #4A2C1A 30%, #6B3A2A 60%, #8B4513 100%)",
      }}
    >
      {/* 3D Canvas Background */}
      <Suspense fallback={null}>
        <Hero3DCanvas />
      </Suspense>

      {/* Blurry Glow Orbs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #C9A96E, transparent)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, #E8B4A0, transparent)",
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-10 blur-2xl"
          style={{
            background: "radial-gradient(circle, #D4A0B0, transparent)",
          }}
        />
      </div>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.1) 100%)",
          zIndex: 3,
        }}
      />

      {/* Main Content */}
      <div
        className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
        style={{ zIndex: 4 }}
      >
        {/* Text Side */}
        <div className="text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[#C9A96E]/60 text-[#C9A96E] backdrop-blur-sm"
              style={{ background: "rgba(201,169,110,0.1)" }}
            >
              ✦ Premium Luxury Beauty Studio ✦
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          >
            Makeover
            <br />
            <span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #C9A96E, #E8B4A0, #C9A96E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              By Khushi
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-1 mb-6"
          >
            <p className="text-[#E8D5C4] font-display text-xl font-medium">
              ✨ Best Makeup Artist in Kishangarh
            </p>
            <p className="text-[#E8D5C4] font-display text-xl font-medium">
              💍 Best Bridal Makeup Artist
            </p>
            <p className="text-[#E8D5C4] font-display text-xl font-medium">
              💇 Best Hairstylist in Kishangarh
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="text-[#D4C4B4] font-body text-base mb-8 max-w-md leading-relaxed"
          >
            Transforming brides into royalty with 8+ years of mastery. Trusted
            by Bollywood celebrities and 1000+ happy clients across Rajasthan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="px-8 py-4 rounded-full font-body font-semibold text-white text-sm tracking-wide shadow-warm transition-smooth hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #8B4513, #C9A96E)",
              }}
              data-ocid="hero.book_button"
            >
              Book Your Look ✦
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#gallery")}
              className="px-8 py-4 rounded-full font-body font-semibold text-sm tracking-wide border border-[#C9A96E]/70 text-[#E8D5C4] backdrop-blur-sm transition-smooth hover:bg-[#C9A96E]/20 hover:scale-105"
              data-ocid="hero.portfolio_button"
            >
              View Portfolio
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 flex items-center gap-8"
          >
            {[
              { value: "500+", label: "Bridal Looks" },
              { value: "8+", label: "Years Exp" },
              { value: "50+", label: "Celebrities" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-display text-2xl font-bold"
                  style={{ color: "#C9A96E" }}
                >
                  {stat.value}
                </div>
                <div className="font-body text-xs text-[#D4C4B4] tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Portrait Side */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center lg:justify-end"
        >
          <div
            className="relative"
            style={{ animation: "float 4s ease-in-out infinite" }}
          >
            {/* Glow ring behind portrait */}
            <div
              className="absolute inset-0 rounded-2xl opacity-60 blur-xl scale-110"
              style={{
                background:
                  "radial-gradient(circle, #C9A96E 0%, transparent 70%)",
              }}
            />
            <div
              className="relative rounded-2xl overflow-hidden border-2 border-[#C9A96E]/60 shadow-2xl"
              style={{
                width: 280,
                height: 380,
                boxShadow:
                  "0 0 60px rgba(201,169,110,0.4), 0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src="/assets/images/hero-portrait.png"
                alt="Khushi Kumawat - Bridal Makeup Artist"
                className="w-full h-full object-cover"
                data-ocid="hero.portrait"
              />
              {/* Portrait overlay card */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-sm"
                style={{
                  background:
                    "linear-gradient(to top, rgba(44,24,16,0.9), transparent)",
                }}
              >
                <p className="font-display text-white text-sm font-semibold">
                  Khushi Kumawat
                </p>
                <p className="font-body text-[#C9A96E] text-xs">
                  ✦ Kishangarh's #1 Makeup Artist
                </p>
              </div>
            </div>
            {/* Decorative corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#C9A96E] rounded-tl-lg" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#C9A96E] rounded-br-lg" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 5 }}
      >
        <span className="font-body text-xs text-[#C9A96E] tracking-widest uppercase">
          Scroll
        </span>
        <div
          className="w-0.5 h-10 bg-gradient-to-b from-[#C9A96E] to-transparent"
          style={{ animation: "fade-in 2s ease-in-out infinite" }}
        />
      </motion.div>
    </section>
  );
}
