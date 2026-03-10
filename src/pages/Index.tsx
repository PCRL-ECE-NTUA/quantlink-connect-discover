import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DomainsSection from "@/components/DomainsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SpecsSection from "@/components/SpecsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <DomainsSection />
        <HowItWorksSection />
        <SpecsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
