import feProfile from "@/assets/fe-albuquerque-profile.webp";
import fabioProfile from "@/assets/fabio-profile.jpg";

const FusaoSection = () => {
  return (
    <section id="fusao" className="py-32 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-heading uppercase">
            A Fusão
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A complementaridade perfeita entre estratégia e execução
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Fê Albuquerque - Estratégia */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-8 shadow-premium group-hover:shadow-cinematic transition-all duration-500">
              <img 
                src={feProfile} 
                alt="Fê Albuquerque - Estrategista de posicionamento"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">
                A Estratégia.
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fê Albuquerque é a arquiteta por trás do posicionamento. Com formação em 
                marketing, pós-graduação em comunicação integrada e certificações 
                internacionais, ela desenha a estratégia que transforma marcas em autoridades.
              </p>
            </div>
          </div>

          {/* Fábio Neder - Cinematografia */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-8 shadow-premium group-hover:shadow-cinematic transition-all duration-500">
              <img 
                src={fabioProfile} 
                alt="Fábio Neder - Diretor cinematográfico"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent">
                A Cinematografia.
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fábio Neder é o diretor da sua narrativa visual. Cinegrafista com vasta 
                experiência em produções de grande escala, ele e sua equipe trazem uma 
                estética de cinema para cada projeto, garantindo um impacto visual inesquecível.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FusaoSection;