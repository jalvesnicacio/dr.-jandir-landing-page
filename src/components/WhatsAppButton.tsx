import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "5587999763035";
  const message = encodeURIComponent(
    "Olá Dr. Jandir, gostaria de agendar uma consulta."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
