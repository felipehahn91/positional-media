import { Mail, Phone, MapPin, Clock, Linkedin, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Logo Column */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Positional Media" className="h-24 w-auto mb-4" />
            <p className="text-muted-foreground">
              Arquitetando a autoridade de experts incontestáveis
            </p>
          </div>

          {/* Contatos */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contatos</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">(47) 99147-1237</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">comercial.positionalmedia@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Localização e Horário */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Atendimento</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">Balneário Camboriú, SC - Brasil</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">Seg - Sex: 8h às 18h</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Siga-nos</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-secondary hover:bg-accent hover:text-accent-foreground p-3 rounded-lg transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-secondary hover:bg-accent hover:text-accent-foreground p-3 rounded-lg transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-secondary hover:bg-accent hover:text-accent-foreground p-3 rounded-lg transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8">
          <p className="text-center text-muted-foreground">
            © 2025 Positional Media. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;