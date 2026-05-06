import { Menu, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-warm border-b border-border"
          : "bg-transparent"
      }`}
      data-ocid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollTo("#hero")}
          className="flex items-center gap-2 group"
          data-ocid="navbar.logo"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#8B4513] flex items-center justify-center shadow-warm">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <span
              className="font-display text-lg font-semibold"
              style={{
                color: scrolled ? "#3D2B1F" : "#fff",
                textShadow: scrolled ? "none" : "0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              Makeover By Khushi
            </span>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="font-body text-sm font-medium transition-smooth hover:opacity-80 relative group"
              style={{
                color: scrolled ? "#3D2B1F" : "rgba(255,255,255,0.92)",
                textShadow: scrolled ? "none" : "0 1px 4px rgba(0,0,0,0.3)",
              }}
              data-ocid={`navbar.link.${link.label.toLowerCase()}`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9A96E] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <motion.button
            type="button"
            onClick={() => scrollTo("#appointment")}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 8px 28px rgba(139,69,19,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
            className="relative px-6 py-2.5 rounded-full font-body text-sm font-semibold text-white overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #3D2B1F, #8B4513, #C9A96E)",
              boxShadow: "0 4px 16px rgba(139,69,19,0.25)",
            }}
            data-ocid="navbar.cta_button"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <span style={{ fontSize: "0.7rem" }}>✦</span> Book Now
            </span>
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 60%, transparent 70%)",
              }}
              animate={{ x: ["-150%", "150%"] }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                repeatDelay: 2,
              }}
            />
          </motion.button>
        </div>

        <button
          type="button"
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          data-ocid="navbar.menu_toggle"
        >
          {menuOpen ? (
            <X
              className="w-6 h-6"
              style={{ color: scrolled ? "#3D2B1F" : "#fff" }}
            />
          ) : (
            <Menu
              className="w-6 h-6"
              style={{ color: scrolled ? "#3D2B1F" : "#fff" }}
            />
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card/98 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left font-body text-foreground hover:text-primary transition-smooth py-1"
                  data-ocid={`navbar.mobile.${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => scrollTo("#appointment")}
                className="px-5 py-2.5 rounded-full font-body text-sm font-semibold text-white text-center"
                style={{
                  background:
                    "linear-gradient(135deg, #3D2B1F, #8B4513, #C9A96E)",
                }}
                data-ocid="navbar.mobile.cta_button"
              >
                ✦ Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
