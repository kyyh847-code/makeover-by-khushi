import { Instagram, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "#FAF7F2" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-0 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, #C9A96E, transparent)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, #E8B4A0, transparent)",
          }}
        />
      </div>

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
            Find Us
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#3D2B1F" }}
          >
            Get In Touch
          </h2>
          <p
            className="font-body max-w-lg mx-auto"
            style={{ color: "#7A5C4A" }}
          >
            Ready for your dream look? We’d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-3xl relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #2C1810, #6B3A2A, #8B4513)",
            }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 70% 30%, #C9A96E 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <h3 className="font-display text-2xl font-bold text-white mb-8">
                Studio Details
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(201,169,110,0.2)",
                      border: "1px solid rgba(201,169,110,0.4)",
                    }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: "#C9A96E" }} />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-white mb-1">
                      Studio Address
                    </p>
                    <p
                      className="font-body text-sm"
                      style={{ color: "#D4C4B4" }}
                    >
                      1st Floor, Arya Mobile, Ajmer Rd,
                      <br />
                      Adarsh Nagar, Kishangarh,
                      <br />
                      Rajasthan 305801
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(201,169,110,0.2)",
                      border: "1px solid rgba(201,169,110,0.4)",
                    }}
                  >
                    <Phone className="w-5 h-5" style={{ color: "#C9A96E" }} />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-white mb-1">
                      Phone / WhatsApp
                    </p>
                    <a
                      href="tel:07568268862"
                      className="font-body text-sm transition-smooth hover:text-white"
                      style={{ color: "#C9A96E" }}
                    >
                      07568268862
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(201,169,110,0.2)",
                      border: "1px solid rgba(201,169,110,0.4)",
                    }}
                  >
                    <Instagram
                      className="w-5 h-5"
                      style={{ color: "#C9A96E" }}
                    />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-white mb-1">
                      Instagram
                    </p>
                    <a
                      href="https://instagram.com/makeoverbykhushi"
                      target="_blank"
                      rel="noreferrer"
                      className="font-body text-sm transition-smooth hover:text-white"
                      style={{ color: "#C9A96E" }}
                    >
                      @makeoverbykhushi
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="mt-8 p-4 rounded-xl"
                style={{
                  background: "rgba(201,169,110,0.1)",
                  border: "1px solid rgba(201,169,110,0.3)",
                }}
              >
                <p className="font-body text-xs" style={{ color: "#D4C4B4" }}>
                  🕐 <strong style={{ color: "#C9A96E" }}>Studio Hours:</strong>{" "}
                  Mon–Sat 9AM–8PM | Sun by Appointment
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="tel:07568268862"
                  className="flex-1 py-3 rounded-full font-body font-semibold text-sm text-center transition-smooth hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #C9A96E, #8B4513)",
                    color: "#fff",
                  }}
                  data-ocid="contact.call_button"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/917568268862"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-full font-body font-semibold text-sm text-center border transition-smooth hover:bg-white/10"
                  style={{
                    borderColor: "rgba(201,169,110,0.5)",
                    color: "#C9A96E",
                  }}
                  data-ocid="contact.whatsapp_button"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden"
            style={{
              boxShadow: "0 8px 40px rgba(139,69,19,0.15)",
              border: "1px solid rgba(201,169,110,0.3)",
              minHeight: 400,
            }}
            data-ocid="contact.map"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.867!2d74.8653!3d26.5847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be8c26c5bdce7%3A0xb5c1c1d7b3b6a5d1!2sAdarsh+Nagar%2C+Kishangarh%2C+Rajasthan+305801!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Makeover By Khushi Studio Location"
            />
          </motion.div>
        </div>

        {/* Big CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center p-12 rounded-3xl relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #2C1810 0%, #6B3A2A 50%, #8B4513 100%)",
            boxShadow: "0 20px 60px rgba(44,24,16,0.4)",
          }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, #C9A96E 0%, transparent 60%)",
            }}
          />
          <div className="relative">
            <p
              className="font-body text-sm tracking-widest uppercase mb-3"
              style={{ color: "#C9A96E" }}
            >
              ✦ LIMITED SLOTS AVAILABLE ✦
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Ready for Your Dream Look?
            </h3>
            <p
              className="font-body text-base mb-8"
              style={{ color: "#D4C4B4" }}
            >
              Book your appointment today and let Khushi create your most
              magical transformation.
            </p>
            <a
              href="tel:07568268862"
              className="inline-block px-10 py-4 rounded-full font-body font-bold text-lg transition-smooth hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #C9A96E, #E8D5C4)",
                color: "#3D2B1F",
                boxShadow: "0 8px 30px rgba(201,169,110,0.4)",
              }}
              data-ocid="contact.main_cta"
            >
              📞 Call Now: 07568268862
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
