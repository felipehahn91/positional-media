import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const SolucoesSection = () => {
  return (
    <section id="solucoes" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-foreground tracking-tight mb-6 font-heading uppercase">
            Nossas Soluções
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Posicionamento 360° - Principal */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-accent/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-card border border-accent/30 rounded-lg p-8 shadow-elegant hover:shadow-premium transition-all duration-500">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-3xl font-bold text-foreground">
                  Posicionamento 360°
                </h3>
                <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  PRINCIPAL
                </span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                O projeto que transforma seu conhecimento em autoridade de mercado.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Diagnóstico e Dossiê de Posicionamento",
                  "Produção de Ativos de Marca (Fotografia e Vídeo)",
                  "Lançamento de Narrativa",
                  "Acompanhamento Estratégico"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button variant="premium" size="lg" className="w-full">
                Saiba mais
              </Button>
            </div>
          </div>

          {/* Presença Digital Estratégica - Secundário */}
          <div className="group">
            <div className="bg-card border rounded-lg p-8 shadow-elegant hover:shadow-premium transition-all duration-500">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Presença Digital Estratégica
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A otimização contínua da sua comunicação como expert.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Planejamento Editorial Mensal",
                  "Criação e Gestão de Conteúdo",
                  "Análise de Desempenho"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button variant="outline" size="lg" className="w-full">
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolucoesSection;