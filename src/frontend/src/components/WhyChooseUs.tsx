import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Bridal Looks", icon: "💍" },
  { value: 8, suffix: "+", label: "Years Experience", icon: "✨" },
  { value: 1000, suffix: "+", label: "Happy Clients", icon: "❤️" },
  { value: 50, suffix: "+", label: "Celebrity Projects", icon: "🌟" },
];

const features = [
  {
    icon: "🌿",
    title: "Premium Products",
    desc: "Only MAC, KRYOLAN, HUDA BEAUTY and international luxury brands",
  },
  {
    icon: "📸",
    title: "HD Makeup Finish",
    desc: "Camera-perfect finish that glows on screen and in person",
  },
  {
    icon: "🚗",
    title: "On-Location Service",
    desc: "We come to your venue — home, hotel, or banquet hall",
  },
  {
    icon: "🎓",
    title: "Latest Techniques",
    desc: "Regularly trained on global trends and new artistry methods",
  },
  {
    icon: "💰",
    title: "Affordable Luxury",
    desc: "Celebrity-quality looks at prices accessible for everyone",
  },
  {
    icon: "🏆",
    title: "Celebrity Expertise",
    desc: "Trusted by Bollywood & TV stars for red-carpet appearances",
  },
];

function AnimatedCounter({
  value,
  suffix,
  active,
}: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, value]);
  return (
    <span
      className="font-display text-5xl font-bold"
      style={{ color: "#8B4513" }}
    >
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FAF7F2 0%, #F5EDE0 100%)",
      }}
    >
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A96E, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
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
            Why Choose Us
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#3D2B1F" }}
          >
            Why Choose Khushi?
          </h2>
          <p
            className="font-body max-w-xl mx-auto text-base"
            style={{ color: "#7A5C4A" }}
          >
            A luxury beauty experience built on years of mastery, premium
            ingredients, and an undying passion for artistry.
          </p>
        </motion.div>

        {/* Animated Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center p-8 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(201,169,110,0.3)",
                boxShadow: "0 4px 20px rgba(139,69,19,0.08)",
              }}
              data-ocid={`why.stat.${i + 1}`}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                active={inView}
              />
              <p
                className="font-body text-sm mt-2"
                style={{ color: "#7A5C4A" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl group hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(201,169,110,0.25)",
              }}
              data-ocid={`why.feature.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(201,169,110,0.2), rgba(232,180,160,0.2))",
                }}
              >
                {feat.icon}
              </div>
              <div>
                <h4
                  className="font-display text-base font-bold mb-1"
                  style={{ color: "#3D2B1F" }}
                >
                  {feat.title}
                </h4>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "#7A5C4A" }}
                >
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Celebrity Callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden relative"
          style={{
            background:
              "linear-gradient(135deg, #2C1810 0%, #6B3A2A 50%, #8B4513 100%)",
          }}
          data-ocid="why.celebrity_callout"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, #C9A96E 0%, transparent 60%)",
            }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
                style={{
                  background: "rgba(201,169,110,0.2)",
                  color: "#C9A96E",
                  border: "1px solid rgba(201,169,110,0.4)",
                }}
              >
                ★ Celebrity Clientele
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Trusted By <span style={{ color: "#C9A96E" }}>Bollywood</span>{" "}
                Celebrities
              </h3>
              <p
                className="font-body text-base leading-relaxed mb-6"
                style={{ color: "#D4C4B4" }}
              >
                Khushi has had the privilege of working with Bollywood actors,
                TV personalities, top influencers and social media stars —
                delivering red-carpet worthy looks every single time. Her client
                list reads like a who's who of Indian entertainment.
              </p>
              <ul className="space-y-2">
                {[
                  "Bollywood film & TV shoots",
                  "Award ceremony red carpet looks",
                  "Music video and album covers",
                  "Brand campaign photoshoots",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-body text-sm"
                    style={{ color: "#E8D5C4" }}
                  >
                    <span style={{ color: "#C9A96E" }}>✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 lg:h-auto overflow-hidden">
              <img
                src="/assets/images/photo8.png"
                alt="Professional Makeup Workspace"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(44,24,16,0.5) 0%, transparent 50%)",
                }}
              />
              <div
                className="absolute bottom-6 right-6 px-4 py-3 rounded-xl"
                style={{
                  background: "rgba(201,169,110,0.15)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(201,169,110,0.4)",
                }}
              >
                <p className="font-display text-white text-sm font-bold">
                  50+ Celebrities
                </p>
                <p className="font-body text-xs" style={{ color: "#C9A96E" }}>
                  Trust Khushi's Expertise
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
