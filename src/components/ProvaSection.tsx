import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const ProvaSection = () => {
  return (
    <section id="prova" className="py-32 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-foreground mb-6 font-heading tracking-wide">
          A Prova.
        </h2>
        
        <p className="text-xl text-muted-foreground mb-16">
          Nós transformamos o Expert X em uma referência nacional. Veja como.
        </p>

        <div className="relative group cursor-pointer">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-cinematic aspect-video">
            {/* Video Thumbnail Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-8 group-hover:bg-white/20 transition-all duration-300">
                <Play className="w-16 h-16 text-white ml-2" />
              </div>
            </div>
            
            {/* Overlay text */}
            <div className="absolute bottom-8 left-8 text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Case de Sucesso: Expert X
              </h3>
              <p className="text-white/80">
                De especialista local para autoridade nacional
              </p>
            </div>
          </div>
          
          {/* Hover effect */}
          <div className="absolute inset-0 bg-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          Clique para assistir ao depoimento completo
        </p>
      </div>
    </section>
  );
};

export default ProvaSection;