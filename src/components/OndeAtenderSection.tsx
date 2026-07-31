import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const consultorios = [
  {
    nome: "Afetus Especialidade",
    subtitulo: "Saúde da Mulher",
    endereco: "Rua Tobias Barreto, 189, Centro, Petrolina - PE. CEP: 56304-210",
    horario: "Terça-feira: 13h às 18h",
    telefone: "(87) 99976-3035",
    whatsapp: "5587999763035",
    mapaSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.314589743763!2d-40.50364122402424!3d-9.393763598195116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7737187ffcf5fab%3A0xe551b0780fdbf594!2sAfetus%20Especialidade!5e0!3m2!1spt-BR!2sbr!4v1774545991377!5m2!1spt-BR!2sbr"
  },
  {
    nome: "Cardiovasf",
    subtitulo: "Instituto do Coração do Vale do São Francisco",
    endereco: "Rua Pacífico da Luz, 850, Centro, Petrolina - PE",
    horario: "Quarta-feira: 14h às 18h",
    telefone: "(87) 99172-8798",
    whatsapp: "5587991728798",
    mapaSrc: `https://www.google.com/maps?q=${encodeURIComponent(
      "Rua Pacífico da Luz, 850, Centro, Petrolina - PE"
    )}&output=embed`
  }
];

const OndeAtenderSection = () => {
  const message = encodeURIComponent("Olá, gostaria de agendar uma consulta.");

  return (
    <section id="onde-atender" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Onde Atendo</h2>
          <p className="section-subtitle mx-auto">
            Consultórios particulares do Dr. Jandir em Petrolina
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {consultorios.map((c, i) => (
            <motion.div
              key={c.nome}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col"
            >
              <div className="p-8 space-y-5 flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground font-display">
                      {c.nome}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {c.subtitulo}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <p className="text-foreground/80 text-sm">{c.endereco}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <p className="text-foreground/80 text-sm">{c.horario}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <p className="text-foreground/80 text-sm">{c.telefone}</p>
                  </div>
                </div>

                <Button asChild className="w-full">
                  <a
                    href={`https://wa.me/${c.whatsapp}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar em {c.nome}
                  </a>
                </Button>
              </div>

              <iframe
                title={`Localização - ${c.nome}`}
                src={c.mapaSrc}
                className="w-full aspect-video"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OndeAtenderSection;
