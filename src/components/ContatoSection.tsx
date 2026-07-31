import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrenvdgl";

const ContatoSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          mensagem: formData.mensagem,
          _subject: "Contato via Site - Dr. Jandir Nicacio"
        })
      });

      if (!response.ok) throw new Error("Falha no envio");

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato, retornaremos em breve."
      });
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
    } catch {
      toast({
        variant: "destructive",
        title: "Não foi possível enviar",
        description: "Tente novamente ou fale pelo telefone/WhatsApp."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle mx-auto">
            Agende sua consulta ou tire suas dúvidas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-foreground/80 leading-relaxed">
              Prefere falar diretamente ou já sabe qual consultório é mais
              perto de você? Escolha a forma mais fácil de falar com a
              equipe do Dr. Jandir.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  text: "+55 (87) 99976‑3035",
                  href: "tel:+5587999763035"
                },
                {
                  icon: Mail,
                  text: "jandir.nicacio@univasf.edu.br",
                  href: "mailto:jandir.nicacio@univasf.edu.br"
                }
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/80 pt-2 group-hover:text-primary transition-colors">
                    {item.text}
                  </p>
                </a>
              ))}
            </div>

            <a
              href="#onde-atender"
              className="inline-flex items-center gap-2 text-secondary font-medium hover:text-secondary/80 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Ver consultórios e horários de atendimento
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border space-y-5"
            >
              <h3 className="text-xl font-bold text-foreground font-display mb-2">
                Envie uma mensagem
              </h3>
              <Input
                placeholder="Seu nome"
                required
                maxLength={100}
                value={formData.nome}
                onChange={(e) =>
                  setFormData({ ...formData, nome: e.target.value })
                }
              />
              <Input
                type="email"
                placeholder="Seu email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <Input
                type="tel"
                placeholder="Seu telefone"
                maxLength={20}
                value={formData.telefone}
                onChange={(e) =>
                  setFormData({ ...formData, telefone: e.target.value })
                }
              />
              <Textarea
                placeholder="Sua mensagem"
                required
                maxLength={1000}
                rows={4}
                value={formData.mensagem}
                onChange={(e) =>
                  setFormData({ ...formData, mensagem: e.target.value })
                }
              />
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
