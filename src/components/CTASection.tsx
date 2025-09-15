import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CTASection = () => {
  return (
    <section id="cta" className="py-32 px-4 bg-cinematic text-cinematic-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold tracking-tight mb-8 font-heading uppercase">
          Pronto para se tornar a referência?
        </h2>
        
        <p className="text-xl text-white/80 mb-16 leading-relaxed max-w-3xl mx-auto">
          Nossos projetos são desenhados sob medida e nosso atendimento é exclusivo. 
          Atendemos um número limitado de experts simultaneamente para garantir a imersão total.
        </p>

        <p className="text-lg text-white/90 mb-12">
          Se você acredita que seu conhecimento merece a posição de destaque no mercado, 
          agende uma conversa estratégica.
        </p>

        <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-8 shadow-cinematic max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                placeholder="Nome"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
              />
              <Input
                placeholder="E-mail"
                type="email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
              />
            </div>
            
            <Input
              placeholder="Telefone"
              type="tel"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
            />
            
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2 text-left">
                Conte-nos sobre seu desafio
              </label>
              <Textarea
                placeholder="Descreva seu atual posicionamento no mercado e onde você quer chegar..."
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent resize-none"
              />
            </div>
            
            <Button variant="premium" size="lg" className="w-full">
              Enviar Solicitação
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;