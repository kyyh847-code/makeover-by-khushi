import { Instagram, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function FloatingButtons() {
  const [hoveredWa, setHoveredWa] = useState(false);
  const [hoveredIg, setHoveredIg] = useState(false);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 100 }}>
      {/* Instagram — Left side */}
      <div
        className="absolute bottom-8 left-6 pointer-events-auto"
        onMouseEnter={() => setHoveredIg(true)}
        onMouseLeave={() => setHoveredIg(false)}
        data-ocid="floating.instagram_button"
      >
        <AnimatePresence>
          {hoveredIg && (
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.9 }}
              className="absolute bottom-16 left-0 px-3 py-2 rounded-xl whitespace-nowrap text-xs font-semibold text-white font-body"
              style={{
                background:
                  "linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)",
              }}
            >
              Follow on Instagram ❤️
            </motion.div>
          )}
        </AnimatePresence>
        <motion.a
          href="https://instagram.com/makeoverbykhushi"
          target="_blank"
          rel="noreferrer"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-smooth"
          style={{
            background: "linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)",
            boxShadow: "0 4px 20px rgba(253,29,29,0.4)",
          }}
          aria-label="Follow on Instagram"
        >
          <Instagram className="w-7 h-7" />
        </motion.a>
      </div>

      {/* WhatsApp — Right side */}
      <div
        className="absolute bottom-8 right-6 pointer-events-auto"
        onMouseEnter={() => setHoveredWa(true)}
        onMouseLeave={() => setHoveredWa(false)}
        data-ocid="floating.whatsapp_button"
      >
        <AnimatePresence>
          {hoveredWa && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              className="absolute bottom-16 right-0 px-3 py-2 rounded-xl whitespace-nowrap text-xs font-semibold text-white font-body"
              style={{ background: "#25D366" }}
            >
              Chat on WhatsApp 💬
            </motion.div>
          )}
        </AnimatePresence>
        <motion.a
          href="https://wa.me/917568268862"
          target="_blank"
          rel="noreferrer"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.25,
          }}
          className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-smooth"
          style={{
            background: "#25D366",
            boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
          }}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.a>
      </div>
    </div>
  );
}
