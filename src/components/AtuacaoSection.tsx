import { motion } from "framer-motion";
import { Building2, Stethoscope, MapPin } from "lucide-react";

const atuacoes = [
  {
    icon: Building2,
    titulo: "Afetus Especialidade",
    descricao:
      "A Clínica Afetus Especialidades oferece uma experiência diferenciada à Saúde da Mulher!"
  },
  {
    icon: Stethoscope,
    titulo: "Atendimento Clínico",
    descricao:
      "Consultas médicas completas com foco na saúde integral do paciente."
  },
  {
    icon: MapPin,
    titulo: "Petrolina e Região",
    descricao:
      "Atendendo pacientes de Petrolina, Juazeiro e toda região do Vale do São Francisco."
  }
];

const AtuacaoSection = () => {
  return (
    <section id="atuacao" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Atuação Profissional</h2>
          <p className="section-subtitle mx-auto">
            Onde e como o Dr. Jandir atende seus pacientes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {atuacoes.map((item, i) => (
            <motion.div
              key={item.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md hover:border-secondary/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <item.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-display">
                {item.titulo}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.descricao}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtuacaoSection;
