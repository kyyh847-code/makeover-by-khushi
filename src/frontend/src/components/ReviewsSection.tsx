import { Star } from "lucide-react";
import { motion } from "motion/react";

interface Review {
  name: string;
  city: string;
  look: string;
  text: string;
  rating: number;
  date: string;
  initials: string;
  bgColor: string;
}

const reviews: Review[] = [
  {
    name: "Priya Sharma",
    city: "Kishangarh",
    look: "Bridal Makeup",
    rating: 5,
    date: "March 2024",
    initials: "PS",
    bgColor: "#C9A96E",
    text: "Khushi didi ne mera bridal makeup itna sundar kiya ki main khud ko pehchan nahi paayi! Poori baarat wale compliment karte rahe. Sach mein Kishangarh ki sabse best makeup artist hain. Bilkul recommend karungi!",
  },
  {
    name: "Sunita Agarwal",
    city: "Ajmer",
    look: "Reception Look",
    rating: 5,
    date: "February 2024",
    initials: "SA",
    bgColor: "#D4A0B0",
    text: "Amazing experience! Khushi ji ka kaam dekh ke dil khush ho jaata hai. Meri beti ki shaadi mein unka kaam dekh ke mehman poochh rahe the ki Delhi se aaya kya. Products ekdum premium the, makeup 14 ghante tak fresh raha!",
  },
  {
    name: "Meera Rajput",
    city: "Pushkar",
    look: "Engagement Makeup",
    rating: 5,
    date: "January 2024",
    initials: "MR",
    bgColor: "#8B7355",
    text: "Meri engagement ke liye Khushi ji ne jo look banaya wo bilkul dream jaisi tha. Hair styling bhi ekdum perfect. Un jaise dedicated aur passionate artist dhundna bahut mushkil hai. 100% satisfied customer hoon main!",
  },
  {
    name: "Kavita Bhardwaj",
    city: "Nasirabad",
    look: "Bridal + Hair",
    rating: 5,
    date: "December 2023",
    initials: "KB",
    bgColor: "#C9A96E",
    text: "Sabse acchi baat ye hai ki Khushi ji bahut calm aur patient hain. Mujhe thoda late hogaya tha par unhone bina kisi tension ke perfect makeup kiya. Bridal juda itna beautiful tha ki photo mein lagte tha professional shoot hai!",
  },
  {
    name: "Anjali Verma",
    city: "Beawar",
    look: "Mehendi Function",
    rating: 5,
    date: "November 2023",
    initials: "AV",
    bgColor: "#E8B4A0",
    text: "Khushi di bilkul celebrity jaisa feel deti hain apne clients ko. Unke paas itne saare premium products hain aur har function ke liye alag look banati hain. Meri poori family fan ho gayi unki! Next event bhi inhi ke saath!",
  },
  {
    name: "Ritu Singhania",
    city: "Kishangarh",
    look: "Pre-Wedding Shoot",
    rating: 5,
    date: "October 2023",
    initials: "RS",
    bgColor: "#B8927E",
    text: "Pre-wedding shoot ke liye Khushi ji ne ek nahi, teen different looks banaye aur teeno outstanding the! Photographer bhi surprised tha ki itne clean looks aise fresh kaise lag rahe hain. True professional, absolutely love their work!",
  },
  {
    name: "Deepika Choudhary",
    city: "Jaipur",
    look: "Party Makeup",
    rating: 5,
    date: "September 2023",
    initials: "DC",
    bgColor: "#A07050",
    text: "Jaipur se specifically Kishangarh aayi sirf Khushi ji ke paas. Unki Instagram reels dekh ke pata tha ki ye kaam genuine hai. Aur sach mein real life mein bhi ekdum waisa hi kaam kiya. Beauty with brains — they know exactly what suits each client!",
  },
  {
    name: "Pooja Kumari",
    city: "Sambhar",
    look: "Airbrush Bridal",
    rating: 5,
    date: "August 2023",
    initials: "PK",
    bgColor: "#C9A96E",
    text: "Airbrush makeup ke baare mein pahle sunti thi, par Khushi ji ne pehli baar try karaya. Absolutely flawless! Garmi mein bhi 12 ghante tak makeup bilkul fresh raha. Ek dum value for money aur best decision tha. Heartfully recommend!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {["star1", "star2", "star3", "star4", "star5"].map((id, i) => (
        <Star
          key={id}
          className="w-4 h-4"
          fill={i < rating ? "#C9A96E" : "none"}
          color={i < rating ? "#C9A96E" : "#D4C4B4"}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-24 relative overflow-hidden"
      style={{ background: "#FAF7F2" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, #C9A96E, transparent)",
          }}
        />
        <div
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-15"
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
            Testimonials
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#3D2B1F" }}
          >
            What Our Brides Say
          </h2>
          <p
            className="font-body max-w-lg mx-auto"
            style={{ color: "#7A5C4A" }}
          >
            Real words from real brides who trusted Khushi with their most
            important day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl relative"
              style={{
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(201,169,110,0.3)",
                boxShadow: "0 4px 20px rgba(139,69,19,0.06)",
              }}
              data-ocid={`reviews.card.${i + 1}`}
            >
              <div
                className="absolute top-4 right-4 font-display text-6xl font-bold opacity-10"
                style={{ color: "#C9A96E", lineHeight: 1 }}
              >
                “
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${review.bgColor}, #8B4513)`,
                  }}
                >
                  {review.initials}
                </div>
                <div className="min-w-0">
                  <p
                    className="font-display text-sm font-bold truncate"
                    style={{ color: "#3D2B1F" }}
                  >
                    {review.name}
                  </p>
                  <p className="font-body text-xs" style={{ color: "#8B4513" }}>
                    {review.city} • {review.look}
                  </p>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p
                className="font-body text-sm leading-relaxed mt-3"
                style={{ color: "#5C4033" }}
              >
                {review.text}
              </p>
              <p
                className="font-body text-xs mt-3"
                style={{ color: "#A08070" }}
              >
                {review.date}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 p-8 rounded-2xl text-center"
          style={{
            background: "linear-gradient(135deg, #2C1810, #6B3A2A)",
            boxShadow: "0 8px 32px rgba(44,24,16,0.3)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div>
              <div
                className="font-display text-5xl font-bold"
                style={{ color: "#C9A96E" }}
              >
                4.9
              </div>
              <div className="flex justify-center mt-1">
                {["s1", "s2", "s3", "s4", "s5"].map((id) => (
                  <Star
                    key={id}
                    className="w-5 h-5"
                    fill="#C9A96E"
                    color="#C9A96E"
                  />
                ))}
              </div>
              <p
                className="font-body text-xs mt-1"
                style={{ color: "#D4C4B4" }}
              >
                Average Rating
              </p>
            </div>
            <div
              className="hidden md:block w-px h-16"
              style={{ background: "rgba(201,169,110,0.3)" }}
            />
            <div>
              <div className="font-display text-4xl font-bold text-white">
                1000+
              </div>
              <p className="font-body text-sm" style={{ color: "#D4C4B4" }}>
                Happy Clients
              </p>
            </div>
            <div
              className="hidden md:block w-px h-16"
              style={{ background: "rgba(201,169,110,0.3)" }}
            />
            <div>
              <p className="font-display text-xl font-semibold text-white max-w-xs">
                "The most trusted beauty studio in Kishangarh, Rajasthan"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
