import { createActor } from "@/backend";
import { useActor } from "@caffeineai/core-infrastructure";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const TIME_SLOTS = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
];

const SERVICES = [
  "Bridal Makeup",
  "Party & Reception Makeup",
  "Hairstyling & Braiding",
  "Special Effects Makeup",
  "Engagement & Pre-Wedding",
  "Airbrush Makeup",
  "HD & Cinema Makeup",
];

const BENEFITS = [
  {
    icon: "✦",
    title: "Instant Confirmation",
    desc: "Get a WhatsApp confirmation within minutes of booking",
  },
  {
    icon: "◈",
    title: "No Waiting",
    desc: "Your slot is reserved — walk in and get started immediately",
  },
  {
    icon: "♛",
    title: "Direct with Artist",
    desc: "Book directly with Khushi — no middlemen, no delays",
  },
];

const inputBase = {
  background: "rgba(255,251,245,0.7)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(201,169,110,0.35)",
  color: "#3D2B1F",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9rem",
  outline: "none",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 12px rgba(139,69,19,0.04)",
};

const focusStyle = {
  border: "1px solid rgba(201,169,110,0.75)",
  boxShadow:
    "0 0 0 3px rgba(201,169,110,0.18), 0 4px 16px rgba(139,69,19,0.08)",
  background: "rgba(255,253,248,0.9)",
};

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

type FocusKey = keyof FormState;

function FloatDeco() {
  return (
    <motion.div
      className="absolute -right-8 top-10 pointer-events-none select-none hidden lg:block"
      animate={{ y: [0, -18, 0], rotate: [0, 8, -6, 0] }}
      transition={{
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <div className="relative w-24 h-24">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,169,110,0.25) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
        <span className="absolute inset-0 flex items-center justify-center text-4xl">
          💄
        </span>
      </div>
    </motion.div>
  );
}

function SparkleEffect() {
  const sparks = Array.from({ length: 12 }, (_, i) => `spark-${i}`);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparks.map((sparkId, i) => (
        <motion.div
          key={sparkId}
          className="absolute text-lg"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          initial={{ opacity: 0, scale: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.4, 0],
            y: [-20, -60],
          }}
          transition={{
            duration: 1.2 + Math.random() * 0.8,
            delay: i * 0.12,
            ease: "easeOut",
          }}
        >
          {["✦", "✧", "⋆", "★", "✨"][i % 5]}
        </motion.div>
      ))}
    </div>
  );
}

export default function AppointmentSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const { actor } = useActor(createActor);

  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [focused, setFocused] = useState<FocusKey | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [showSparks, setShowSparks] = useState(false);

  const handleChange = (field: FocusKey, val: string) =>
    setForm((p) => ({ ...p, [field]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const id = await actor.bookAppointment(
        form.name,
        form.phone,
        form.email,
        form.service,
        form.date,
        form.time,
        form.message,
      );
      if (id === BigInt(0)) {
        setStatus("error");
      } else {
        setStatus("success");
        setShowSparks(true);
        setTimeout(() => setShowSparks(false), 2500);
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = (field: FocusKey) => ({
    ...inputBase,
    ...(focused === field ? focusStyle : {}),
  });

  const labelStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.07em",
    color: "#8B4513",
    textTransform: "uppercase" as const,
    marginBottom: "6px",
    display: "block",
  };

  const sharedClass = "w-full px-4 py-3 rounded-xl";

  return (
    <section
      id="appointment"
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #FDF8F0 0%, #FAF3E7 50%, #FDF6ED 100%)",
      }}
      data-ocid="appointment.section"
    >
      {/* Background glow orbs */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #E8C99A, transparent)" }}
      />
      <div
        className="absolute bottom-10 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A96E, transparent)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #D4A574, transparent)" }}
      />

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
            style={{
              background:
                "linear-gradient(135deg, rgba(139,69,19,0.1), rgba(201,169,110,0.15))",
              color: "#8B4513",
              border: "1px solid rgba(201,169,110,0.4)",
              boxShadow: "0 2px 12px rgba(139,69,19,0.08)",
            }}
          >
            <span style={{ color: "#C9A96E", fontSize: "1rem" }}>♛</span>
            Premium Booking
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
            style={{ color: "#3D2B1F", lineHeight: 1.15 }}
          >
            Book Your
            <span
              className="block"
              style={{
                background:
                  "linear-gradient(135deg, #8B4513 0%, #C9A96E 50%, #8B4513 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Appointment
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-body text-base max-w-xl mx-auto"
            style={{ color: "#7A5C4A", lineHeight: 1.75 }}
          >
            Reserve your exclusive beauty session with Khushi — India's
            celebrated bridal artist trusted by celebrities and brides alike.
          </motion.p>
        </motion.div>

        {/* Benefits Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex items-start gap-4 p-5 rounded-2xl"
              style={{
                background: "rgba(255,251,245,0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(201,169,110,0.3)",
                boxShadow: "0 4px 20px rgba(139,69,19,0.06)",
              }}
              data-ocid={`appointment.benefit.${i + 1}`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,69,19,0.12), rgba(201,169,110,0.18))",
                  border: "1px solid rgba(201,169,110,0.3)",
                  color: "#C9A96E",
                }}
              >
                {b.icon}
              </div>
              <div>
                <p
                  className="font-display font-semibold text-sm mb-0.5"
                  style={{ color: "#3D2B1F" }}
                >
                  {b.title}
                </p>
                <p
                  className="font-body text-xs leading-relaxed"
                  style={{ color: "#7A5C4A" }}
                >
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 4 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          whileHover={{
            boxShadow:
              "0 32px 80px rgba(139,69,19,0.18), 0 0 60px rgba(201,169,110,0.1)",
          }}
          className="relative rounded-3xl p-8 md:p-12"
          style={{
            background: "rgba(255,252,247,0.92)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(201,169,110,0.3)",
            boxShadow:
              "0 20px 60px rgba(139,69,19,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
            transformStyle: "preserve-3d",
            transformPerspective: "1200px",
          }}
          data-ocid="appointment.form_card"
        >
          {/* Decorative top bar */}
          <div
            className="absolute top-0 left-8 right-8 h-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #C9A96E, #8B4513, #C9A96E, transparent)",
            }}
          />
          {/* Left accent border */}
          <div
            className="absolute left-0 top-12 bottom-12 w-1 rounded-full"
            style={{
              background:
                "linear-gradient(180deg, transparent, #C9A96E, #8B4513, #C9A96E, transparent)",
            }}
          />

          <FloatDeco />

          {/* Idle / Success / Error States */}
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative flex flex-col items-center text-center py-16"
                data-ocid="appointment.success_state"
              >
                {showSparks && <SparkleEffect />}
                <motion.div
                  animate={{ scale: [1, 1.12, 1], rotate: [0, 8, -4, 0] }}
                  transition={{ duration: 1.2, repeat: 2 }}
                  className="text-6xl mb-6"
                >
                  🌸
                </motion.div>
                <h3
                  className="font-display text-3xl font-bold mb-3"
                  style={{ color: "#3D2B1F" }}
                >
                  Appointment Booked!
                </h3>
                <p
                  className="font-body text-base mb-2"
                  style={{ color: "#7A5C4A" }}
                >
                  Your appointment has been booked!
                </p>
                <p
                  className="font-body text-sm font-semibold"
                  style={{ color: "#8B4513" }}
                >
                  Khushi will contact you soon on{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #8B4513, #C9A96E)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {form.phone}
                  </span>
                </p>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setStatus("idle");
                    setForm({
                      name: "",
                      phone: "",
                      email: "",
                      service: "",
                      date: "",
                      time: "",
                      message: "",
                    });
                  }}
                  className="mt-8 px-8 py-3 rounded-full font-body text-sm font-semibold text-white"
                  style={{
                    background: "linear-gradient(135deg, #8B4513, #C9A96E)",
                  }}
                  data-ocid="appointment.book_again_button"
                >
                  Book Another
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                data-ocid="appointment.form"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="apt-name" style={labelStyle}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className={sharedClass}
                      style={inputStyle("name")}
                      id="apt-name"
                      data-ocid="appointment.name_input"
                    />
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.45 }}
                  >
                    <label htmlFor="apt-phone" style={labelStyle}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      className={sharedClass}
                      style={inputStyle("phone")}
                      id="apt-phone"
                      data-ocid="appointment.phone_input"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="apt-email" style={labelStyle}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className={sharedClass}
                      style={inputStyle("email")}
                      id="apt-email"
                      data-ocid="appointment.email_input"
                    />
                  </motion.div>

                  {/* Service */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.55 }}
                  >
                    <label htmlFor="apt-service" style={labelStyle}>
                      Select Service
                    </label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      onFocus={() => setFocused("service")}
                      onBlur={() => setFocused(null)}
                      className={sharedClass}
                      style={inputStyle("service")}
                      id="apt-service"
                      data-ocid="appointment.service_select"
                    >
                      <option value="" disabled style={{ color: "#aaa" }}>
                        Choose a service…
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  {/* Date */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    <label htmlFor="apt-date" style={labelStyle}>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      min={today}
                      value={form.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      onFocus={() => setFocused("date")}
                      onBlur={() => setFocused(null)}
                      className={sharedClass}
                      style={inputStyle("date")}
                      id="apt-date"
                      data-ocid="appointment.date_input"
                    />
                  </motion.div>

                  {/* Time */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.65 }}
                  >
                    <label htmlFor="apt-time" style={labelStyle}>
                      Preferred Time
                    </label>
                    <select
                      required
                      value={form.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                      onFocus={() => setFocused("time")}
                      onBlur={() => setFocused(null)}
                      className={sharedClass}
                      style={inputStyle("time")}
                      id="apt-time"
                      data-ocid="appointment.time_select"
                    >
                      <option value="" disabled style={{ color: "#aaa" }}>
                        Choose a time slot…
                      </option>
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="mb-8"
                >
                  <label htmlFor="apt-message" style={labelStyle}>
                    Special Message / Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share any specific requirements, occasion details, or special requests…"
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className="w-full px-4 py-3 rounded-xl resize-none"
                    style={{ ...inputStyle("message") }}
                    id="apt-message"
                    data-ocid="appointment.message_textarea"
                  />
                </motion.div>

                {/* Error */}
                <AnimatePresence>
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 px-5 py-3.5 rounded-xl text-sm font-body"
                      style={{
                        background: "rgba(220,60,60,0.07)",
                        border: "1px solid rgba(220,60,60,0.25)",
                        color: "#b94040",
                      }}
                      data-ocid="appointment.error_state"
                    >
                      ✦ Something went wrong. Please check your details and try
                      again.
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.75 }}
                  className="flex flex-col items-center gap-4"
                >
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={
                      status !== "loading"
                        ? {
                            scale: 1.04,
                            boxShadow: "0 12px 40px rgba(139,69,19,0.35)",
                          }
                        : {}
                    }
                    whileTap={status !== "loading" ? { scale: 0.97 } : {}}
                    className="relative w-full md:w-auto px-14 py-4 rounded-full font-body font-semibold text-white text-base overflow-hidden"
                    style={{
                      background:
                        status === "loading"
                          ? "rgba(139,69,19,0.6)"
                          : "linear-gradient(135deg, #3D2B1F 0%, #8B4513 40%, #C9A96E 100%)",
                      boxShadow: "0 8px 32px rgba(139,69,19,0.25)",
                      letterSpacing: "0.05em",
                    }}
                    data-ocid="appointment.submit_button"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-3">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                          className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                        />
                        Booking your appointment…
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        ✦ Confirm My Appointment
                      </span>
                    )}
                    {/* Shimmer */}
                    {status !== "loading" && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background:
                            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 60%, transparent 70%)",
                        }}
                        animate={{ x: ["-150%", "150%"] }}
                        transition={{
                          duration: 2.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          repeatDelay: 1.5,
                        }}
                      />
                    )}
                  </motion.button>

                  <p
                    className="font-body text-xs"
                    style={{ color: "#9E7A60", letterSpacing: "0.04em" }}
                  >
                    ✦ Available Mon–Sun &nbsp;|&nbsp; 10 AM – 7 PM &nbsp;|&nbsp;
                    Kishangarh, Rajasthan
                  </p>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
