import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    q: "How far in advance should I book for bridal makeup?",
    a: "For bridal services, we recommend booking at least 2–3 months in advance, especially for peak wedding season (October–February). This ensures your preferred date is available and allows time for a trial session. For popular dates, bookings up to 6 months ahead are common.",
  },
  {
    q: "Do you offer trial sessions before the wedding day?",
    a: "Absolutely! We highly recommend a trial session 2–4 weeks before your wedding. This lets you experience the look, ensure it matches your vision, and make any adjustments. The trial includes full bridal makeup, hairstyling, and a photo session so you can see exactly how you’ll look on your big day.",
  },
  {
    q: "What brands and products do you use?",
    a: "We use only premium, internationally recognized brands including MAC Cosmetics, KRYOLAN Professional Makeup, Huda Beauty, Charlotte Tilbury, NARS, and more. All products are dermatologically tested, non-toxic, and suitable for sensitive skin. We never compromise on quality.",
  },
  {
    q: "Do you travel for destination weddings outside Kishangarh?",
    a: "Yes! Khushi regularly travels for destination weddings across Rajasthan, and to cities like Jaipur, Delhi, Mumbai, and beyond. Travel charges and accommodation are to be arranged by the client. Please contact us early for destination booking to check availability.",
  },
  {
    q: "How long does the bridal makeup process take?",
    a: "Full bridal makeup with hairstyling typically takes 2.5–4 hours depending on the complexity of the look, hair length, and number of jewelry pieces to be incorporated. For group bookings (bridesmaid/family), please add 1–1.5 hours per additional person. We always recommend starting early.",
  },
  {
    q: "Do you take group bookings for the bridal party?",
    a: "Yes! We accommodate group bookings for brides, bridesmaids, mothers, and extended family. We can bring an assistant artist for larger groups to ensure everyone is ready on time. Discounts are available for groups of 4 or more. Contact us for a custom group package quote.",
  },
  {
    q: "What is the price range for your services?",
    a: "Our services are designed to be luxurious yet accessible. Bridal packages start from ₹8,000 and go up to ₹25,000 depending on the look and complexity. Party makeup starts at ₹3,500. We offer customized packages for multi-day bookings. All packages include premium products and a post-event touch-up kit.",
  },
  {
    q: "Do you offer mehendi / henna or other wedding services?",
    a: "While our core expertise is makeup and hairstyling, we can connect you with trusted mehendi artists in our network. We also offer nail art and full-body skincare consultation as add-on services. Ask about our complete bridal package which bundles all these services for a seamless wedding experience.",
  },
];

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: { faq: FAQ; index: number; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.9)",
        border: isOpen
          ? "1px solid rgba(201,169,110,0.5)"
          : "1px solid rgba(201,169,110,0.2)",
        transition: "border-color 0.3s ease",
        boxShadow: isOpen
          ? "0 8px 30px rgba(139,69,19,0.12)"
          : "0 2px 10px rgba(139,69,19,0.05)",
      }}
      data-ocid={`faq.item.${index + 1}`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left"
        data-ocid={`faq.toggle.${index + 1}`}
      >
        <span
          className="font-display text-base font-bold pr-4 leading-snug"
          style={{ color: "#3D2B1F" }}
        >
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5" style={{ color: "#8B4513" }} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6">
              <div
                className="w-full h-px mb-4"
                style={{ background: "rgba(201,169,110,0.3)" }}
              />
              <p
                className="font-body text-sm leading-relaxed"
                style={{ color: "#5C4033" }}
              >
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F5EDE0 0%, #FAF7F2 100%)",
      }}
    >
      <div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A96E, transparent)" }}
      />

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "rgba(139,69,19,0.1)",
              color: "#8B4513",
              border: "1px solid rgba(139,69,19,0.2)",
            }}
          >
            FAQ
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#3D2B1F" }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="font-body max-w-lg mx-auto"
            style={{ color: "#7A5C4A" }}
          >
            Everything you need to know before your appointment.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center p-8 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.8)",
            border: "1px solid rgba(201,169,110,0.3)",
          }}
        >
          <p
            className="font-display text-xl font-bold mb-2"
            style={{ color: "#3D2B1F" }}
          >
            Still have questions?
          </p>
          <p className="font-body text-sm mb-4" style={{ color: "#7A5C4A" }}>
            Reach out directly and we’ll get back to you personally.
          </p>
          <a
            href="tel:07568268862"
            className="inline-block px-8 py-3 rounded-full font-body font-semibold text-white text-sm transition-smooth hover:scale-105 hover:shadow-warm"
            style={{ background: "linear-gradient(135deg, #8B4513, #C9A96E)" }}
            data-ocid="faq.call_button"
          >
            Call Us: 07568268862
          </a>
        </motion.div>
      </div>
    </section>
  );
}
