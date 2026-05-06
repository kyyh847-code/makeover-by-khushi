import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface Service {
  title: string;
  description: string;
  price: string;
  image: string;
  tag: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Bridal Makeup",
    description:
      "Exquisite bridal transformations crafted with HD techniques, luxurious products and timeless artistry for your most special day.",
    price: "₹8,000 – ₹25,000",
    image: "/assets/images/bride-red.png",
    tag: "Most Popular",
    icon: "💍",
  },
  {
    title: "Party & Reception Makeup",
    description:
      "Glamorous looks for receptions, sangeet, cocktail parties and all festive occasions that demand you shine the brightest.",
    price: "₹3,500 – ₹10,000",
    image: "/assets/images/bride-orange.png",
    tag: "Trending",
    icon: "✨",
  },
  {
    title: "Hairstyling & Braiding",
    description:
      "From intricate bridal juda to modern waves, mehendi braids to celebrity blowouts — every strand perfectly styled.",
    price: "₹2,000 – ₹8,000",
    image: "/assets/images/glamour-blue-saree.png",
    tag: "Signature",
    icon: "💇",
  },
  {
    title: "Special Effects Makeup",
    description:
      "Professional SFX artistry for films, TV shoots, theatrical productions and special events. Prosthetics to creature FX.",
    price: "₹5,000 – ₹20,000",
    image: "/assets/images/sfx-clay.png",
    tag: "Pro Level",
    icon: "🎨",
  },
  {
    title: "Engagement & Pre-Wedding",
    description:
      "Stunning looks for roka ceremonies, haldi, mehndi functions and all pre-wedding celebrations.",
    price: "₹4,000 – ₹12,000",
    image: "/assets/images/bride-purple-jewelry.png",
    tag: "Exclusive",
    icon: "👑",
  },
  {
    title: "Airbrush Makeup",
    description:
      "Flawless camera-ready airbrush finish that lasts 12+ hours. Perfect for destination weddings and summer brides.",
    price: "₹6,000 – ₹18,000",
    image: "/assets/images/bride-candid.png",
    tag: "HD Finish",
    icon: "🎥",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(10px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      data-ocid={`services.card.${index + 1}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(201,169,110,0.3)",
          boxShadow: "0 4px 24px rgba(139,69,19,0.08)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="relative h-52 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(44,24,16,0.6) 0%, transparent 50%)",
            }}
          />
          <span
            className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              background: "linear-gradient(135deg, #8B4513, #C9A96E)",
              color: "#fff",
            }}
          >
            {service.tag}
          </span>
          <span className="absolute top-3 left-3 text-2xl">{service.icon}</span>
        </div>
        <div className="p-6">
          <h3
            className="font-display text-xl font-bold mb-2"
            style={{ color: "#3D2B1F" }}
          >
            {service.title}
          </h3>
          <p
            className="font-body text-sm leading-relaxed mb-4"
            style={{ color: "#7A5C4A" }}
          >
            {service.description}
          </p>
          <div className="flex items-center justify-between">
            <span
              className="font-display text-sm font-semibold"
              style={{ color: "#8B4513" }}
            >
              {service.price}
            </span>
            <button
              type="button"
              onClick={() =>
                document
                  .querySelector("#appointment")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 py-2 rounded-full text-xs font-semibold text-white transition-smooth hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #8B4513, #C9A96E)",
              }}
              data-ocid={`services.book_button.${index + 1}`}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{ background: "#FAF7F2" }}
    >
      {/* Background blurs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A96E, transparent)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #E8B4A0, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "rgba(139,69,19,0.1)",
              color: "#8B4513",
              border: "1px solid rgba(139,69,19,0.2)",
            }}
          >
            What We Offer
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#3D2B1F" }}
          >
            Our Premium Services
          </h2>
          <p
            className="font-body text-muted-foreground max-w-xl mx-auto text-base"
            style={{ color: "#7A5C4A" }}
          >
            Each service is crafted with precision, premium products, and an
            artist's passion to make you look your absolute best.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
