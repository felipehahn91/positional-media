import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToManifesto = () => {
    document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-cinematic-hero text-white mb-8 fade-in-up">
          AUTORIDADE NÃO SE CRIA
          <br />
          COM POSTS.
        </h1>
        <p className="text-cinematic-sub text-white/90 mb-12 fade-in-delayed">
          Nós arquitetamos a sua posição de expert incontestável.
        </p>
        <Button 
          variant="hero" 
          size="lg" 
          onClick={scrollToManifesto}
          className="fade-in-delayed"
        >
          Descubra como
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;