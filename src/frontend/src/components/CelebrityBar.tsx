import { useEffect, useRef } from "react";

const marqueeItems = [
  "✦ Trusted by Bollywood Celebrities",
  "✦ 500+ Bridal Looks Created",
  "✦ 8+ Years of Luxury Experience",
  "✦ Worked with TV Personalities",
  "✦ 1000+ Happy Clients",
  "✦ Featured in Top Wedding Magazines",
  "✦ Celebrity Makeup Expert",
  "✦ Red Carpet Ready Looks",
  "✦ On-Location Services Available",
  "✦ Rajasthan's Most Trusted Bridal Studio",
  "✦ 50+ Celebrity Projects Completed",
  "✦ Premium HD Makeup Specialist",
];

export default function CelebrityBar() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let raf: number;
    const speed = 0.6;
    const animate = () => {
      pos -= speed;
      const totalWidth = track.scrollWidth / 2;
      if (Math.abs(pos) >= totalWidth) pos = 0;
      track.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const allItems = [
    ...marqueeItems.map((item, i) => ({ item, key: `a${i}` })),
    ...marqueeItems.map((item, i) => ({ item, key: `b${i}` })),
  ];

  return (
    <div
      className="relative overflow-hidden py-3"
      style={{
        background:
          "linear-gradient(90deg, #2C1810, #6B3A2A, #8B4513, #6B3A2A, #2C1810)",
      }}
      data-ocid="celebrity_bar"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "repeating-linear-gradient(90deg, rgba(201,169,110,0.1) 0px, rgba(201,169,110,0.1) 1px, transparent 1px, transparent 100px)",
        }}
      />
      <div
        ref={trackRef}
        className="flex whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {allItems.map(({ item, key }) => (
          <span
            key={key}
            className="inline-block px-8 font-display text-sm font-medium"
            style={{ color: "#C9A96E" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
