import Navbar from "@/components/clinic/Navbar";
import HeroSection from "@/components/clinic/HeroSection";
import AboutSection from "@/components/clinic/AboutSection";
import ServicesSection from "@/components/clinic/ServicesSection";
import DoctorsSection from "@/components/clinic/DoctorsSection";
import TestimonialsSection from "@/components/clinic/TestimonialsSection";
import GallerySection from "@/components/clinic/GallerySection";
import WhyChooseUs from "@/components/clinic/WhyChooseUs";
import FAQSection from "@/components/clinic/FAQSection";
import Footer from "@/components/clinic/Footer";
import FloatingCTA from "@/components/clinic/FloatingCTA";
import SectionIndicator from "@/components/clinic/SectionIndicator";

const Index = () => {
  return (
    <div className="relative">
      <Navbar />
      <SectionIndicator />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DoctorsSection />
      <TestimonialsSection />
      <GallerySection />
      <WhyChooseUs />
      <FAQSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
