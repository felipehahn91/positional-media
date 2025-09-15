import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logoDefault from "@/assets/logo-header.webp";
import logoScrolled from "@/assets/logo.webp";

const navLinks = [
  { href: "#manifesto", label: "O Manifesto" },
  { href: "#fusao", label: "A Fusão" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#prova", label: "Prova" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-20' : 'h-28'}`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img 
                src={isScrolled ? logoScrolled : logoDefault} 
                alt="Positional Media" 
                className={`w-auto transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'}`} 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-md ${
                  isScrolled 
                    ? "text-muted-foreground hover:text-primary hover:bg-primary/10" 
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="ml-6">
              <Button variant="premium" onClick={scrollToCTA}>
                Agende uma conversa
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={!isScrolled ? 'text-white hover:bg-white/10 hover:text-white' : ''}
                >
                  <Menu className="h-10 w-10" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-0">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                     <h4 className="text-lg font-semibold">Menu</h4>
                  </div>
                  <nav className="flex flex-col space-y-2 p-4">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <a
                          href={link.href}
                          className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-2 rounded-md"
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto p-4 border-t">
                     <SheetClose asChild>
                        <Button variant="premium" className="w-full" onClick={scrollToCTA}>
                            Agende uma conversa
                        </Button>
                     </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;