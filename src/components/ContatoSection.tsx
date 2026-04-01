import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContatoSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contato via Site - Dr. Jandir Nicacio");
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\nEmail: ${formData.email}\nTelefone: ${formData.telefone}\n\nMensagem:\n${formData.mensagem}`
    );
    window.location.href = `mailto:jalves.nicacio@gmail.com?subject=${subject}&body=${body}`;
    toast({
      title: "Redirecionando para seu email...",
      description: "Envie a mensagem pelo seu cliente de email."
    });
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <section id="contato" className="section-padding bg-muted/50">
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
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: "Rua Tobias Barreto, 189, Centro, Petrolina - PE. CEP: 56304-210"
                },
                { icon: Phone, text: "+55 (87) 99976‑3035" },
                { icon: Mail, text: "jandir.nicacio@univasf.edu.br" },
                { icon: Clock, text: "Terça-feira: 13h às 18h" }
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/80 pt-2">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-border shadow-sm mt-6">
              <iframe
                title="Localização do consultório"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.314589743763!2d-40.50364122402424!3d-9.393763598195116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7737187ffcf5fab%3A0xe551b0780fdbf594!2sAfetus%20Especialidade!5e0!3m2!1spt-BR!2sbr!4v1774545991377!5m2!1spt-BR!2sbr"
                className="w-full aspect-video"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
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
              <Button type="submit" size="lg" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
