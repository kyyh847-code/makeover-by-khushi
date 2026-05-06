import { Instagram, MapPin, Phone, Sparkles } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#1A0F0A" }} data-ocid="footer">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #C9A96E, #8B4513)",
                }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-white">
                Makeover By Khushi
              </span>
            </div>
            <p
              className="font-body text-sm leading-relaxed mb-6"
              style={{ color: "#D4C4B4" }}
            >
              Kishangarh's premier luxury beauty studio. Transforming brides
              into queens with artistry, passion and premium products since
              2016.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/makeoverbykhushi"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)",
                }}
                aria-label="Instagram"
                data-ocid="footer.instagram_link"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-display text-base font-bold mb-6"
              style={{ color: "#C9A96E" }}
            >
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                { label: "Our Services", href: "#services" },
                { label: "Portfolio Gallery", href: "#gallery" },
                { label: "Why Choose Us", href: "#about" },
                { label: "Reviews", href: "#reviews" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block font-body text-sm transition-smooth hover:text-white"
                  style={{ color: "#A09080" }}
                  data-ocid={`footer.link.${link.label.toLowerCase().replace(/ /g, "_")}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="font-display text-base font-bold mb-6"
              style={{ color: "#C9A96E" }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: "#C9A96E" }}
                />
                <p className="font-body text-sm" style={{ color: "#A09080" }}>
                  1st Floor, Arya Mobile, Ajmer Rd, Adarsh Nagar, Kishangarh,
                  Rajasthan 305801
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#C9A96E" }}
                />
                <a
                  href="tel:07568268862"
                  className="font-body text-sm transition-smooth hover:text-white"
                  style={{ color: "#A09080" }}
                >
                  07568268862
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{ background: "rgba(201,169,110,0.2)" }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs" style={{ color: "#6B5040" }}>
            © {year} Makeover By Khushi Kumawat. All rights reserved.
          </p>
          <p className="font-body text-xs" style={{ color: "#6B5040" }}>
            {" "}
            <a
              href={"https://wa.me/917409768581"}
              target="_blank"
              rel="noreferrer"
              className="transition-smooth hover:text-[#C9A96E]"
              style={{ color: "#8B7050" }}
            >
              Designed BY Kavya Chaudhary
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
