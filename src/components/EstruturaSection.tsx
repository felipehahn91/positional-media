import podcastStudio from "@/assets/podcast-studio.jpg";
import videoProduction from "@/assets/video-production.jpg";
import brandIdentity from "@/assets/brand-identity.jpg";
import webDevelopment from "@/assets/web-development.jpg";
import consultoria from "@/assets/consultoria.jpg";

const EstruturaSection = () => {
  const capabilities = [
    {
      title: "Estúdios de Produção",
      image: podcastStudio,
      description: "Estúdios próprios de fotografia e podcast com equipamentos de padrão internacional para garantir que sua mensagem seja vista e ouvida com a máxima qualidade."
    },
    {
      title: "Produção Cinematográfica",
      image: videoProduction,
      description: "Direção de fotografia e produção de vídeo com estética de cinema para contar sua história de forma impactante, incluindo cobertura de eventos corporativos."
    },
    {
      title: "Identidade Visual de Marca",
      image: brandIdentity,
      description: "Criação e redesign de identidades visuais que traduzem a essência da sua marca e comunicam autoridade e sofisticação em cada ponto de contato."
    },
    {
      title: "Ecossistemas Digitais",
      image: webDevelopment,
      description: "Desenvolvimento de websites e plataformas digitais que não são apenas bonitos, mas funcionam como o centro do seu ecossistema de autoridade."
    },
    {
      title: "Consultoria Estratégica",
      image: consultoria,
      description: "Sessões de consultoria premium e imersões profundas para diagnosticar desafios e desenhar, passo a passo, o caminho para a liderança do seu mercado."
    },
    {
      title: "Cobertura de Eventos Corporativos",
      image: videoProduction,
      description: "Cobertura completa de eventos corporativos com direção de fotografia profissional, capturando momentos estratégicos que fortalecem sua marca e autoridade no mercado."
    }
  ];

  return (
    <section id="estrutura" className="py-32 px-4 bg-cinematic text-cinematic-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold tracking-tight mb-6 font-heading uppercase">
            A Estrutura por Trás do Expert
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto">
            Para construir experts de referência, reunimos um arsenal de competências e 
            tecnologia de ponta em um só lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-500 shadow-premium hover:shadow-cinematic">
                <div className="relative overflow-hidden">
                  <img 
                    src={capability.image} 
                    alt={capability.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-accent">
                    {capability.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-white/70 italic">
            Todos estes elementos são integrados em nosso projeto principal, o Posicionamento 360°.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EstruturaSection;