import { Stethoscope } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faGoogleScholar
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const footerNavItems = [
    { id: "inicio", label: "Início" },
    { id: "sobre", label: "Sobre Mim" },
    { id: "formacao", label: "Formação Acadêmica" },
    { id: "especialidades", label: "Especialidades" }
  ];
  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Dr. Jandir Nicacio</span>
            </div>
            <p className="text-gray-400 mb-4">
              Hematologista dedicado ao cuidado humanizado e tratamento de
              excelência.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-1">
              CRM-PE 23006 — Petrolina, PE
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">
              Links Rápidos
            </span>
            <div className="space-y-2">
              {footerNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {[
              {
                icon: faInstagram,
                href: "https://instagram.com/jandirnicacio",
                label: "Instagram"
              },
              {
                icon: faFacebookF,
                href: "https://facebook.com/jandirnicacio",
                label: "Facebook"
              },
              {
                icon: faGoogleScholar,
                href: "https://scholar.google.com/citations?user=vxvDj24AAAAJ&hl=pt-BR&oi=ao",
                label: "Google Scholar"
              }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Dr. Jandir Nicacio. Todos os direitos
            reservados. Vibe coded by{" "}
            <a
              href="https://portfolio.jalvesnicacio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-primary-foreground/90 transition-colors"
            >
              Jalves Nicacio.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
