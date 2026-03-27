import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Formação", href: "#formacao" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Contato", href: "#contato" }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phone = "5587999763035";
  const message = encodeURIComponent(
    "Olá Dr. Jandir, gostaria de agendar uma consulta."
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="font-display text-xl font-bold text-primary">
          Dr. Jandir Nicacio
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button asChild>
            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Consulta
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-background border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full mt-2" asChild>
            <a href="#contato" onClick={() => setIsOpen(false)}>
              Agendar Consulta
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
