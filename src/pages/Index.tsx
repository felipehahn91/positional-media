import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import FusaoSection from "@/components/FusaoSection";
import EstruturaSection from "@/components/EstruturaSection";
import SolucoesSection from "@/components/SolucoesSection";
import ProvaSection from "@/components/ProvaSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ManifestoSection />
      <FusaoSection />
      <EstruturaSection />
      <SolucoesSection />
      <ProvaSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
