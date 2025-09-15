import podcastStudio from "@/assets/podcast-studio.jpg";
import videoProduction from "@/assets/video-production.jpg";
import brandIdentity from "@/assets/brand-identity.jpg";

const ManifestoSection = () => {
  return (
    <section id="manifesto" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content - Left Side */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-foreground font-heading">
              Nosso Manifesto.
            </h2>
            <div className="space-y-6 text-manifesto text-muted-foreground">
              <p>
                O mercado está saturado de barulho.
              </p>
              <p>
                Posts todos os dias, campanhas vazias, vídeos feitos apenas para cumprir tabela.
                A atenção das pessoas se tornou o bem mais disputado do mundo — e quase ninguém consegue conquistá-la.
              </p>
              <p>
                <strong className="text-foreground">É por isso que nós acreditamos no poder do sinal.</strong>
              </p>
              <p>
                O sinal é o oposto do barulho.
                Enquanto o barulho fala para todos e não conecta com ninguém, o sinal fala com precisão.
                Ele corta o ruído, chega no público certo, com a mensagem certa, no momento exato.
                Ele não passa despercebido. Ele marca, posiciona e permanece.
              </p>
              <p>
                Na Positional Media, não fazemos volume.
                <strong className="text-foreground"> Fazemos presença.</strong>
              </p>
              <p>
                Nascemos da fusão de dois mundos de elite: a inteligência estratégica de posicionamento e a arte da produção cinematográfica.
                Unimos estratégia, estética e narrativa para transformar marcas em autoridades.
              </p>
              <p>
                <strong className="text-foreground">Não gerenciamos suas redes sociais.
                Nós arquitetamos sua autoridade.</strong>
              </p>
              <p>
                Se você busca apenas mais um post, não somos para você.
                Mas, se o que você quer é se tornar o nome mais lembrado, a voz mais respeitada e a autoridade indiscutível do seu mercado, então o seu lugar é aqui.
              </p>
              <p>
                Porque posicionamento não é estar em todos os lugares.
                É estar no lugar certo, com a mensagem certa, com o público certo, no momento exato.
              </p>
              <p>
                <strong className="text-foreground">Nós somos a Positional Media.</strong><br />
                Transformamos ruído em clareza.<br />
                Clareza em presença.<br />
                Presença em autoridade.<br />
                E autoridade em legado.
              </p>
            </div>
          </div>
          
          {/* Images - Right Side */}
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={podcastStudio} 
                alt="Estúdio profissional de podcast com equipamentos de alta qualidade"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={videoProduction} 
                alt="Produção cinematográfica profissional em ação"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={brandIdentity} 
                alt="Desenvolvimento de identidade visual e branding estratégico"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;