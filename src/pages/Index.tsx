import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProductCategories } from "@/components/ProductCategories";
import { AboutSection } from "@/components/AboutSection";
import { SpecificationsSection } from "@/components/SpecificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProductCategories />
      <AboutSection />
      <SpecificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
