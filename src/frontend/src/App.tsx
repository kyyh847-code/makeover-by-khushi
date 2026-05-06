import AppointmentSection from "./components/AppointmentSection";
import CelebrityBar from "./components/CelebrityBar";
import ContactSection from "./components/ContactSection";
import FaqSection from "./components/FaqSection";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ReviewsSection from "./components/ReviewsSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <div style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
      <NavBar />
      <HeroSection />
      <CelebrityBar />
      <ServicesSection />
      <WhyChooseUs />
      <GallerySection />
      <ReviewsSection />
      <FaqSection />
      <AppointmentSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
